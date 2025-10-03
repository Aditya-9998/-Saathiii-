// C:\Users\Aditya Kumar\...\Kissan Saktiii\js\advisory.js
// FINAL VERSION: Logic for 5-section flow (Soil -> Crop -> Calc -> Fert -> Equip)

// --- Import Data Modules ---
import { soils, seasonsInfo, getSoilRegions } from '../data/soils.js';
import { crops } from '../data/crops.js'; 
import { getEquipmentForCrop } from '../data/equipment.js'; 
// Assuming data/fertilizers.js exists and is correctly structured with product details
import { fertilizers } from '../data/fertilizers.js'; 

document.addEventListener("DOMContentLoaded", () => {
    // --- Global State Variables ---
    let selectedSoilId = "alluvial"; 
    let selectedSeason = "kharif";
    let selectedCropKey = null;

    // --- FINAL CORRECTED Unit conversion factors (Based on 1 Acre = 1.613 Bigha) ---
    const ACER_PER_BIGHA = 1 / 1.613;   // ~0.620 acres per bigha
    const ACER_PER_KATHA = ACER_PER_BIGHA / 20; // 1 Katha = 1/20 Bigha
    const ACER_PER_DHUR = ACER_PER_KATHA / 20;  // 1 Dhur = 1/20 Katha
    
    const unitToAcre = { 
        acre: 1, 
        hectare: 2.47105, 
        bigha: ACER_PER_BIGHA,  
        katha: ACER_PER_KATHA,  
        dhur: ACER_PER_DHUR     
    };
    // ------------------------------------------

    const roundKg = v => Math.round(v * 10) / 10;
    const cap = s => s ? s.charAt(0).toUpperCase() + s.slice(1) : "";
    const getL = (obj, prop) => { 
        const value = obj[prop];
        return (typeof value === 'object' && value !== null) ? (value.en || value.hi || "") : (value || '');
    };
    const getArrayL = (obj, prop) => { 
        const value = obj[prop];
        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            return value.en || value.hi || [];
        }
        return Array.isArray(value) ? value : [];
    };

    // --- DOM References ---
    const soilListEl = document.getElementById("soil-horizontal-list");
    const cropGridEl = document.getElementById("crop-recommendation-grid");
    const fertSectionEl = document.getElementById("section-fertilizer"); 
    const fertDisplaySectionEl = document.getElementById("section-fertilizer-display"); 
    const equipSectionEl = document.getElementById("section-equipment"); 
    const soilRegionPopup = document.getElementById("soil-region-popup"); 
    const mainAdvisoryContainer = document.getElementById("advisory-main-content"); 
    
    const modal = document.getElementById("process-modal");
    const modalBody = document.getElementById("modal-body");
    const closeModalBtn = document.querySelector(".close-btn");
    
    // --- RENDER FUNCTIONS ---

    // 1. Render Horizontal Soil List (Section 1)
    function renderSoils() {
        if (!soilListEl) return;
        soilListEl.innerHTML = "";

        soils.forEach(s => {
            if(s.id === "alluvial") selectedSoilId = s.id; 
            
            const isActive = s.id === selectedSoilId ? "active" : "";
            const soilName = `${s.emoji} ${s.hindi} (${s.name})`;
            const regions = getSoilRegions(s.id); 

            const soilCard = document.createElement("div");
            soilCard.className = `soil-card-horizontal ${isActive}`;
            soilCard.dataset.soil = s.id;
            
            soilCard.innerHTML = `
                <div class="soil-name">${soilName}</div>
                <i class="fas fa-info-circle info-icon" title="View Regions"></i>
            `;

            soilCard.addEventListener('click', (e) => {
                if (e.target.classList.contains('info-icon')) {
                    return; 
                }
                selectSoil(s.id);
            });

            const infoIcon = soilCard.querySelector('.info-icon');
            infoIcon.addEventListener('mouseenter', (e) => showRegionPopup(e.currentTarget, regions));
            infoIcon.addEventListener('mouseleave', hideRegionPopup);
            
            soilListEl.appendChild(soilCard);
        });
    }

    function selectSoil(id) {
        selectedCropKey = null;
        
        selectedSoilId = id;
        document.querySelectorAll(".soil-card-horizontal").forEach(i => i.classList.remove("active"));
        const el = [...document.querySelectorAll(".soil-card-horizontal")].find(x => x.dataset.soil === id);
        if (el) el.classList.add("active");
        
        document.getElementById("section-crops")?.classList.remove("disabled");
        fertSectionEl?.classList.add("disabled");
        fertDisplaySectionEl?.classList.add("disabled");
        equipSectionEl?.classList.add("disabled");
        
        updateCropList();
        updateFertilizerSection();
        updateFertilizerDisplaySection();
        updateEquipmentSection();
    }
    
    function showRegionPopup(target, regions) {
        if (!soilRegionPopup || !mainAdvisoryContainer) return;
        
        const soilName = target.closest('.soil-card-horizontal').querySelector('.soil-name').textContent;
        soilRegionPopup.innerHTML = `<strong>${soilName}:</strong><br>${regions.split(';').map(r => `<span>${r.trim()}</span>`).join('<br>')}`;
        
        const targetRect = target.getBoundingClientRect();
        const containerRect = mainAdvisoryContainer.getBoundingClientRect();
        
        soilRegionPopup.style.top = `${targetRect.bottom - containerRect.top + window.scrollY + 5}px`;
        soilRegionPopup.style.left = `${targetRect.left + window.scrollX}px`;
        soilRegionPopup.style.display = "block";
    }

    function hideRegionPopup() {
        if (soilRegionPopup) soilRegionPopup.style.display = "none";
    }

    // 2. Render Crop List (Section 2)
    function updateCropList() {
        if (!cropGridEl) return;
        cropGridEl.innerHTML = "";

        const filteredEntries = Object.entries(crops).filter(([key, c]) => {
            return Array.isArray(c.seasons) && c.seasons.includes(selectedSeason) && 
                   Array.isArray(c.soils) && c.soils.includes(selectedSoilId);
        });

        if (!filteredEntries.length) {
            cropGridEl.innerHTML = `<div class="empty-message" style="padding:20px; text-align:center;">❌ No crops found for this soil and season. Try a different selection.</div>`;
            return;
        }

        filteredEntries.forEach(([key, crop]) => {
            const card = document.createElement("div");
            card.className = "crop-card four-per-row"; 
            card.dataset.key = key;
            const isSelected = key === selectedCropKey;
            
            card.innerHTML = `
                <div class="crop-image-container">
                    <img src="./images/${crop.picture ? crop.picture.split('/').pop() : 'placeholder.png'}" alt="${crop.name}" class="crop-image">
                </div>
                <div class="crop-details-content">
                    <div class="crop-header">
                        <h4>${crop.hindiName || crop.name} (${crop.name})</h4>
                        <div class="crop-yield-info">
                            <span>Yield: ${crop.avgYield_t_per_ha ?? "-"} t/ha</span>
                        </div>
                    </div>
                    <div class="crop-tags">
                        <span class='tag profitable'>${crop.profitable ? "Profitable" : "Varies"}</span>
                    </div>
                </div>
                <div style="display:flex;gap:0.5rem;padding:0.75rem; border-top: 1px solid #eee;">
                    <button class="details-btn" data-key="${key}" style="flex-grow:1;">Details</button>
                    <button class="select-btn-crop" data-key="${key}" style="flex-grow:1; background:${isSelected ? '#00bcd4' : '#4CAF50'};">Select</button>
                </div>`;

            card.querySelector(".details-btn").addEventListener("click", () => openModal(key));
            
            card.querySelector(".select-btn-crop").addEventListener("click", (e) => {
                selectedCropKey = key;
                document.querySelectorAll(".select-btn-crop").forEach(btn => btn.style.background = "#4CAF50");
                e.currentTarget.style.background = "#00bcd4"; 
                
                fertSectionEl?.classList.remove("disabled");
                fertDisplaySectionEl?.classList.remove("disabled");
                equipSectionEl?.classList.remove("disabled");
                
                updateFertilizerSection();
                updateFertilizerDisplaySection();
                updateEquipmentSection();
            });
            cropGridEl.appendChild(card);
        });
    }

    // 3. Render Fertilizer Calculator & Guide (Section 3)
    function updateFertilizerSection() {
        const fertDetailsEl = document.getElementById('selected-crop-fert-details');
        const calcUI = document.getElementById('fertilizer-calculator-ui');

        if (!selectedCropKey || !fertDetailsEl || !calcUI) {
            calcUI.innerHTML = `<p style="color:#555;padding:10px;">फसल का चयन करें (Step 2).</p>`;
            fertDetailsEl.innerHTML = '';
            return;
        }

        const crop = crops[selectedCropKey];
        
        // --- 3.1 Setup Calculator UI (No Calculate Button) ---
        calcUI.innerHTML = `
            <h3><i class="fas fa-calculator"></i> Fertilizer Calculator / गणना</h3>
            <div class="fertilizer-calc" style="display:flex; align-items:center; gap: 1rem; flex-wrap: wrap;">
                <label>Area/क्षेत्रफल:
                    <input type="number" id="field-size" value="1" min="0.1" step="0.1" style="width:80px">
                </label>
                <select id="field-unit">
                    <option value="acre">Acre</option>
                    <option value="hectare">Hectare</option>
                    <option value="bigha">Bigha</option>
                    <option value="katha">Katha</option>
                    <option value="dhur">Dhur</option>
                </select>
            </div>
            <div id="fert-result" style="margin-top:1rem; padding: 10px; border: 1px solid #ccc; border-radius: 5px;">
                </div>
        `;
        
        const fieldSizeInput = document.getElementById('field-size');
        const fieldUnitSelect = document.getElementById('field-unit');
        
        const updateCalcResult = () => {
            const fertResult = document.getElementById('fert-result');
            if (!fieldSizeInput || !fieldUnitSelect) return; 

            const fieldSize = parseFloat(fieldSizeInput.value || "1");
            const unit = fieldUnitSelect.value || "acre";
            
            const areaInAcre = fieldSize * (unitToAcre[unit] || 1);
            const { urea, dap, mop } = crop.fertilizersPerAcre || {};
            
            const areaInBigha = areaInAcre / unitToAcre['bigha'];

            fertResult.innerHTML = `
                <p>Selected Crop: <strong>${crop.hindiName}</strong></p>
                <p>Estimate for <strong>${fieldSize} ${cap(unit)} (~${areaInBigha.toFixed(2)} bigha)</strong>:</p>
                <ul style="list-style-type:none; padding-left:0;">
                    ${urea ? `<li><i class="fas fa-flask"></i> Urea: <strong>${roundKg(urea * areaInAcre)} kg</strong></li>` : ''}
                    ${dap ? `<li><i class="fas fa-flask"></i> DAP: <strong>${roundKg(dap * areaInAcre)} kg</strong></li>` : ''}
                    ${mop ? `<li><i class="fas fa-flask"></i> MOP: <strong>${roundKg(mop * areaInAcre)} kg</strong></li>` : ''}
                    ${!urea && !dap && !mop ? '<li>No specific NPK per acre recommendation found. See guide below.</li>' : ''}
                </ul>
            `;
        };
        
        fieldSizeInput.addEventListener('input', updateCalcResult);
        fieldUnitSelect.addEventListener('change', updateCalcResult);

        // --- 3.2 Display Detailed Fertilizer List from Crop (old, now only general NPK guidance) ---
        const npkRecommendation = getL(crop.fertilizersList.find(f => f.type === "NPK (kg/ha)") || {}, 'recommendation') || 'General guidance: Apply N, P, and K based on soil test results.';
        
        fertDetailsEl.innerHTML = `
            <h3><i class="fas fa-info-circle"></i> Application Guide (General) / उपयोग निर्देश (सामान्य)</h3>
            <div class="fert-grid-view">
                <div class="fert-detail-card">
                    <b>NPK Recommendation:</b><br>${npkRecommendation}
                </div>
            </div>
            <p style="margin-top:1rem; font-size:0.9em; color:red;">⚠️ Note: Prefer local extension & soil test before applying chemicals.</p>
        `;
        
        updateCalcResult(); 
    }

    // 4. Render Recommended Fertilizers Display (Section 4)
    function updateFertilizerDisplaySection() {
        const fertDisplayGridEl = document.getElementById('fertilizer-display-grid');
        if (!selectedCropKey || !fertDisplayGridEl) {
            if (fertDisplayGridEl) fertDisplayGridEl.innerHTML = `<p style="color:#555;padding:10px;">फसल का चयन करें (Step 2).</p>`;
            return;
        }

        const crop = crops[selectedCropKey];
        // Get fertilizer IDs from the crop's recommended list and match to master list
        const recommendedFertilizers = (crop.fertilizersList || []).map(f => {
            const master = fertilizers.find(mf => mf.name === f.name || mf.type.includes(f.type));
            return master ? { ...master, ...f } : null;
        }).filter(f => f); 

        const fertCardsHTML = recommendedFertilizers.map(f => {
            // Get data-attributes from the master list (f)
            const usage = getL(f, 'application') || 'See dosage below.';
            const safety = getL(f, 'safetyNotes') || 'Handle with gloves. Avoid inhalation.';

            return `
                <div class="fertilizer-card" data-fert-id="${f.id}">
                    <div class="card-top-bar">
                        <img src="./images/${f.image || 'placeholder.png'}" alt="${f.name}" class ="equip-image">
                        <i class="fas fa-info-circle info-icon-fert" 
                           title="Usage & Safety"
                           data-usage="${usage}" 
                           data-safety="${safety}"
                           data-dosage="${getL(f, 'dosageNotes') || 'N/A'}">
                        </i>
                    </div>
                    <h4>${f.hindi || f.name}</h4>
                    <p style="font-size:0.8em; color:#777; margin-bottom:5px;">${getL(f, 'primaryUse') || f.type}</p>
                    <span class="fert-tag">${f.type}</span>
                </div>
            `;
        }).join("");

        fertDisplayGridEl.innerHTML = `
            <h3>Recommended Fertilizers for ${crop.hindiName} (${crop.name})</h3>
            <div class="fertilizer-cards-grid">
                ${fertCardsHTML || '<p>No specific fertilizer product recommendations available. See calculator guide above for general NPK.</p>'}
            </div>
            <div id="fertilizer-tooltip-popup" class="equip-popup-tooltip"></div> `;

        const popupEl = document.getElementById('fertilizer-tooltip-popup');
        document.querySelectorAll('.info-icon-fert').forEach(icon => {
            icon.addEventListener('mouseenter', (e) => showFertilizerPopup(e.currentTarget, popupEl));
            icon.addEventListener('mouseleave', () => { if (popupEl) popupEl.style.display = 'none'; });
        });
    }

    function showFertilizerPopup(target, popupEl) {
        if (!popupEl) return;

        const usage = target.dataset.usage;
        const dosage = target.dataset.dosage;
        const safety = target.dataset.safety;
        const fertName = target.closest('.fertilizer-card').querySelector('h4').textContent;

        popupEl.innerHTML = `
            <strong>${fertName}</strong><hr style="margin: 5px 0;">
            <p><strong>उपयोग:</strong> ${usage}</p>
            <p><strong>खुराक (Dosage):</strong> ${dosage}</p>
            <p style="color: darkred; margin-top: 5px;"><strong>सुरक्षा:</strong> ${safety}</p>
            <p style="margin-top: 5px; font-size: 0.8em; color: #555;">*लागू करने से पहले मिट्टी की जांच अवश्य कराएं।</p>
        `;

        const rect = target.getBoundingClientRect();
        popupEl.style.top = `${rect.bottom + window.scrollY + 10}px`;
        popupEl.style.left = `${rect.left + window.scrollX}px`;
        popupEl.style.display = 'block';
    }


    // 5. Render Equipment Section (Section 5)
    function updateEquipmentSection() {
        const equipRecEl = document.getElementById('equipment-recommendations');
        if (!selectedCropKey || !equipRecEl) {
            if (equipRecEl) equipRecEl.innerHTML = `<p style="color:#555;padding:10px;">फसल का चयन करें (Step 2).</p>`;
            return;
        }

        const crop = crops[selectedCropKey];
        const recommendedEquipment = getEquipmentForCrop(crop.name); 

        const equipHTML = recommendedEquipment.map(e => {
            const usageNote = e.uses; 
            const safetyNote = (e.category === "Heavy Machinery" || e.category === "Plant Protection") 
                               ? "⚠️ सुरक्षा: उपयोग से पहले ऑपरेटर मैनुअल पढ़ें, सुरक्षा गियर पहनें, और बच्चों को दूर रखें।"
                               : "⚠️ सुरक्षा: उपयोग के बाद उपकरण को साफ करें और सूखी जगह पर रखें। नियमित रूप से निरीक्षण करें।";
            
            return `
                <div class="equipment-card" data-equip-id="${e.id}">
                    <div class="card-top-bar">
                        <img src="./images/${e.image || 'placeholder.png'}" alt="${e.name}" class ="equip-image">
                        <i class="fas fa-info-circle info-icon-equip" 
                           title="How to Use"
                           data-usage="${usageNote}" 
                           data-safety="${safetyNote}">
                        </i>
                    </div>
                    <h4>${e.hindi} (${e.name})</h4>
                    <p style="font-size:0.8em; color:#777; margin-bottom:5px;">${usageNote}</p>
                    <span class="equip-tag">${e.category}</span>
                </div>
            `;
        }).join("");

        equipRecEl.innerHTML = `
            <h3>Recommended Equipment for ${crop.hindiName} (${crop.name})</h3>
            <div class="equipment-grid">
                ${equipHTML || '<p>No specific equipment recommendations available.</p>'}
            </div>
            <div id="equipment-tooltip-popup" class="equip-popup-tooltip"></div>
        `;

        const popupEl = document.getElementById('equipment-tooltip-popup');
        document.querySelectorAll('.info-icon-equip').forEach(icon => {
            icon.addEventListener('mouseenter', (e) => showEquipmentPopup(e.currentTarget, popupEl));
            icon.addEventListener('mouseleave', () => { if (popupEl) popupEl.style.display = 'none'; });
        });
    }

    function showEquipmentPopup(target, popupEl) {
        if (!popupEl) return;

        const usage = target.dataset.usage;
        const safety = target.dataset.safety;
        const equipName = target.closest('.equipment-card').querySelector('h4').textContent;

        popupEl.innerHTML = `
            <strong>${equipName}</strong><hr style="margin: 5px 0;">
            <p><strong>उपयोग:</strong> ${usage}</p>
            <p style="color: darkred; margin-top: 5px;"><strong>सुरक्षा:</strong> ${safety}</p>
            <p style="margin-top: 5px; font-size: 0.8em; color: #555;">*यह सुझाव शैक्षिक हैं। कृपया स्थानीय सुरक्षा मानकों का पालन करें।</p>
        `;

        const rect = target.getBoundingClientRect();
        popupEl.style.top = `${rect.bottom + window.scrollY + 10}px`;
        popupEl.style.left = `${rect.left + window.scrollX}px`;
        popupEl.style.display = 'block';
    }


    // Season Tab Listener setup
    function attachSeasonListeners() {
        document.querySelectorAll("#season-tabs .season-tab").forEach(t => {
            t.addEventListener("click", () => {
                document.querySelectorAll("#season-tabs .season-tab").forEach(x => x.classList.remove("active"));
                t.classList.add("active");
                selectedSeason = t.dataset.season;
                selectedCropKey = null; 
                
                // Disable Steps 3, 4, & 5
                fertSectionEl?.classList.add("disabled");
                fertDisplaySectionEl?.classList.add("disabled");
                equipSectionEl?.classList.add("disabled");
                
                updateCropList();
                updateFertilizerSection();
                updateFertilizerDisplaySection();
                updateEquipmentSection();
            });
        });
    }

    // --- Modal Logic (For Full Details Button) ---
    function openModal(cropKey) {
        const crop = crops[cropKey];
        if (!crop || !modal) return;

        modalBody.innerHTML = "";
        const html = document.createElement("div");
        html.className = "crop-process-details";
        
        const getFertilizersList = (fertilizersList) => {
             return (fertilizersList || []).map(f => {
                const name = getL(f, 'name') || getL(f, 'type');
                let details = [];
                if (getL(f, 'recommendation')) details.push(getL(f, 'recommendation'));
                if (getL(f, 'dosage')) details.push(`Dosage: ${getL(f, 'dosage')}`);
                if (getL(f, 'timing')) details.push(`Timing: ${getL(f, 'timing')}`);
                if (getL(f, 'method')) details.push(`Method: ${getL(f, 'method')}`);
                return `<li><b>${name}:</b><br>${details.join("<br>")}</li>`;
            }).join("");
        };

        const getPesticidesList = (pesticidesList) => {
             return (pesticidesList || []).map(p => {
                let details = [];
                if (getL(p, 'use')) details.push(getL(p, 'use'));
                if (getL(p, 'dosage')) details.push(`Dosage: ${getL(p, 'dosage')}`);
                if (getL(p, 'timing')) details.push(`Timing: ${getL(p, 'timing')}`);
                if (getL(p, 'method')) details.push(`Method: ${getL(p, 'method')}`);
                return `<li><b>${p.active}:</b><br>${details.join("<br>")}</li>`;
            }).join("");
        };
        
        const equipmentList = getArrayL(crop, 'equipment').join(", ");

        html.innerHTML = `
        <div class="modal-header">
            <h2>${crop.hindiName || crop.name} (${crop.name})</h2>
            <p class="modal-subtitle"><strong>Seasons:</strong> ${crop.seasons.map(cap).join(", ")} • <strong>Soils:</strong> ${crop.soils.map(cap).join(", ")}</p>
        </div>

        <section class="process-section">
            <h3><i class="fas fa-tools"></i> Full Process / पूरी प्रक्रिया</h3>
            <ol>${(crop.process || []).map(s => `<li><b>${getL(s, 'step')}:</b><br>${getL(s, 'detail')}</li>`).join("")}</ol>
        </section>

        <section class="process-section">
            <h3><i class="fas fa-flask"></i> Fertilizers / उर्वरक</h3>
            <ul>${getFertilizersList(crop.fertilizersList)}</ul>
        </section>

        <section class="process-section">
            <h3><i class="fas fa-bug"></i> Pests / कीट</h3>
            <ul>${getPesticidesList(crop.pesticides)}</ul>
        </section>

        <section class="process-section">
            <h3><i class="fas fa-tractor"></i> Equipment / उपकरण</h3>
            <p>${equipmentList}</p>
        </section>
        
        <section class="process-section">
            <h3><i class="fas fa-chart-line"></i> Economics / अर्थशास्त्र</h3>
            <ul>
                <li><strong>Cost of Cultivation/खेती की लागत:</strong> ₹${crop.economics?.costPerAcre?.toLocaleString() || 'Varies'}/acre</li>
                <li><strong>Expected Yield/संभावित उपज:</strong> ${crop.economics?.expectedYield || 'Varies'}</li>
                <li><strong>Approx. Market Price/लगभग बाज़ार भाव:</strong> ₹${crop.economics?.marketPrice || 'Varies'}</li>
                <li><strong>ROI/निवेश पर लाभ:</strong> ${crop.economics?.roi || 'Varies'}</li>
            </ul>
        </section>

        <p class="note">⚠️ Note: Prefer local extension & soil test before applying chemicals. यह सुझाव शैक्षिक उद्देश्य के लिए हैं।</p>
        `;

        modalBody.appendChild(html);
        modal.style.display = "flex";
    }
    
    closeModalBtn?.addEventListener("click", () => modal.style.display = "none");
    modal?.addEventListener("click", e => { if (e.target === modal) modal.style.display = "none"; });
    document.addEventListener("keydown", e => { if (e.key === "Escape") modal.style.display = "none"; });


    // --- Main Initializer ---
    function init() {
        renderSoils();
        attachSeasonListeners();
        
        updateCropList();
        
        if(fertSectionEl) fertSectionEl.classList.add("disabled");
        if(fertDisplaySectionEl) fertDisplaySectionEl.classList.add("disabled");
        if(equipSectionEl) equipSectionEl.classList.add("disabled");

        console.log("Advisory components initialized.");
    }

    init();
});