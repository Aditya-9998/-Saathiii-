// C:\Users\Aditya Kumar\...\Kissan Saktiii\data\crops.js
// Complete crop dataset merged from original advisory.js

export const crops = {
    // ----- Rice -----
    Rice: {
        name: "Rice",
        hindiName: "चावल (धान)",
        seasons: ["kharif", "zaid"],
        soils: ["alluvial", "red", "laterite", "mountain", "peaty", "saline"],
        profitable: true,
        highYield: true,
        profitAreaHa: 0.8,
        avgYield_t_per_ha: 4.0,
        picture: "images/rice.webp",
        economics: { costPerAcre: 18000, expectedYield: "25-30 q/acre", marketPrice: "₹2200/q", roi: "2.0x to 2.5x" },
        fertilizersPerAcre: { urea: 120, dap: 60, mop: 50 },
        fertilizersList: [
            { type: "NPK (kg/ha)", recommendation: { en: "100–150 N : 60 P2O5 : 40 K2O", hi: "100–150 N : 60 P2O5 : 40 K2O" } },
            { name: "Urea", dosage: { en: "60kg/acre", hi: "60 किग्रा/एकड़" }, timing: { en: "Split: basal, tillering, panicle initiation", hi: "3 किस्तों में: रोपाई, कल्ले फूटने पर, बाली निकलने पर" }, method: { en: "Broadcast in standing water", hi: "खड़े पानी में बिखेरें" } },
            { name: "DAP", dosage: { en: "60kg/acre", hi: "60 किग्रा/एकड़" }, timing: { en: "Basal at transplanting", hi: "रोपाई के समय" }, method: { en: "Place near root zone", hi: "जड़ के पास रखें" } }
        ],
        pesticides: [
            { active: "Chlorpyrifos", use: { en: "Stem borer, leaf folder", hi: "तना छेदक, पत्ती मोड़क" }, timing: { en: "When threshold reached", hi: "लक्षण दिखते ही" }, dosage: { en: "As per label", hi: "लेबल के अनुसार" }, method: { en: "Foliar spray", hi: "पत्तियों पर छिड़काव" } }
        ],
        equipment: { en: ["Paddy transplanter", "Puddler", "Sprayer", "Threshing floor / machine"], hi: ["धान रोपाई मशीन", "पडलर", "स्प्रेयर", "थ्रेशिंग मशीन"] },
        process: [
            { step: { en: "Nursery Preparation", hi: "नर्सरी की तैयारी" }, detail: { en: "Raise seedlings in nursery and transplant 20–30 days after sowing.", hi: "नर्सरी में पौध तैयार करें, 20–30 दिन बाद रोपाई करें।" } },
            { step: { en: "Land Prep", hi: "खेत की तैयारी" }, detail: { en: "Level field, puddle for transplanting to reduce percolation.", hi: "खेत समतल करें, रोपाई के लिए पानी रोकने हेतु पडलिंग करें।" } },
            { step: { en: "Transplanting / Sowing", hi: "रोपाई/बुवाई" }, detail: { en: "Transplant healthy seedlings at recommended spacing.", hi: "स्वस्थ पौधे उचित दूरी पर लगाएं।" } },
            { step: { en: "Water Management", hi: "जल प्रबंधन" }, detail: { en: "Maintain 5–10 cm standing water depending on stage.", hi: "विकास चरण के अनुसार 5–10 सेमी पानी रखें।" } },
            { step: { en: "Weed & Pest Control", hi: "खरपतवार एवं कीट नियंत्रण" }, detail: { en: "Use appropriate herbicides and monitor pests; spray fungicides on disease appearance.", hi: "उपयुक्त खरपतवारनाशक व कीटनाशक का प्रयोग करें; रोग दिखे तो फफूंदनाशक छिड़कें।" } },
            { step: { en: "Harvest", hi: "कटाई" }, detail: { en: "Drain field 7–10 days before harvest and harvest when grains mature.", hi: "कटाई से 7–10 दिन पहले पानी निकालें; दाने पकने पर कटाई करें।" } }
        ]
    },

    // ----- Wheat -----
    Wheat: {
        name: "Wheat",
        hindiName: "गेहूं",
        seasons: ["rabi"],
        soils: ["alluvial", "black", "red", "mountain", "saline"],
        profitable: true,
        highYield: true,
        profitAreaHa: 0.5,
        avgYield_t_per_ha: 3.0,
        picture: "images/wheat.jpg",
        economics: { costPerAcre: 15000, expectedYield: "20-25 q/acre", marketPrice: "₹2000/q", roi: "1.8x to 2.2x" },
        fertilizersPerAcre: { urea: 120, dap: 60, mop: 40 },
        fertilizersList: [
            { type: "NPK (kg/ha)", recommendation: { en: "120 N : 60 P2O5 : 40 K2O", hi: "120 N : 60 P2O5 : 40 K2O" } },
            { name: "Urea (46% N)", dosage: { en: "50kg/acre", hi: "50 किग्रा/एकड़" }, timing: { en: "50% basal, 25% tillering, 25% stem extension", hi: "50% बुवाई के समय, 25% कल्ले फूटने पर, 25% तने की वृद्धि पर" }, method: { en: "Broadcast evenly and irrigate", hi: "समान रूप से बिखेर कर सिंचाई करें" } },
            { name: "DAP (18:46:0)", dosage: { en: "60kg/acre", hi: "60 किग्रा/एकड़" }, timing: { en: "Basal at sowing", hi: "बुवाई के समय" }, method: { en: "Place below seed at drilling", hi: "ड्रिलिंग के समय बीज के नीचे रखें" } },
            { name: "MOP (0:0:60)", dosage: { en: "40kg/acre", hi: "40 किग्रा/एकड़" }, timing: { en: "Basal at sowing", hi: "बुवाई के समय" }, method: { en: "Mix in soil during field prep", hi: "खेत की तैयारी के दौरान मिट्टी में मिलाएं" } }
        ],
        pesticides: [
            { active: "Propiconazole", use: { en: "Rust disease", hi: "रतुआ रोग" }, dosage: { en: "200ml/acre", hi: "200 मिलीलीटर/एकड़" }, timing: { en: "At first symptoms", hi: "लक्षण दिखते ही" }, method: { en: "Spray with 200L water/acre", hi: "200 लीटर पानी के साथ स्प्रे करें" } }
        ],
        equipment: { en: ["Plough", "Seed drill", "Harrow", "Combine harvester"], hi: ["हल", "सीड ड्रिल", "हैरो", "कंबाइन हार्वेस्टर"] },
        process: [
            { step: { en: "Seed Selection", hi: "बीज का चयन" }, detail: { en: "Choose certified HYV seeds like HD2967 or local recommended varieties.", hi: "प्रमाणित एचवाईवी बीज जैसे HD2967 या स्थानीय सुझाई गई किस्में चुनें।" } },
            { step: { en: "Seed Treatment", hi: "बीज उपचार" }, detail: { en: "Treat with fungicide (e.g., Carbendazim) before sowing.", hi: "बुवाई से पहले फफूंदनाशक (जैसे कार्बेन्डाजिम) से उपचार करें।" } },
            { step: { en: "Sowing", hi: "बुवाई" }, detail: { en: "Nov–Dec using seed drill, spacing ~20 cm rows.", hi: "नवंबर-दिसंबर में सीड ड्रिल से बुवाई, लगभग 20 सेमी पंक्तियों में।" } },
            { step: { en: "Irrigation", hi: "सिंचाई" }, detail: { en: "First irrigation 20-25 DAS; critical at crown root initiation.", hi: "पहली सिंचाई 20-25 दिन बाद; क्राउन रूट स्थिति में महत्वपूर्ण।" } },
            { step: { en: "Top dressing", hi: "टॉप ड्रेसिंग" }, detail: { en: "Apply remaining N in splits at tillering and stem extension.", hi: "बचे हुए N को कल्ले व तने की वृद्धि पर किस्तों में दें।" } },
            { step: { en: "Harvest", hi: "कटाई" }, detail: { en: "Apr–May when grains hard; use combine or manual methods.", hi: "अप्रैल-मई में जब दाने सख्त हों तो कटाई करें।" } }
        ]
    },

    // ----- Sugarcane -----
    Sugarcane: {
        name: "Sugarcane",
        hindiName: "गन्ना",
        seasons: ["rabi", "kharif"],
        soils: ["alluvial", "black"],
        profitable: true,
        highYield: true,
        profitAreaHa: 1.5,
        avgYield_t_per_ha: 70,
        picture: "images/Sugarcan.webp",
        economics: { costPerAcre: 40000, expectedYield: "300-400 q/acre", marketPrice: "₹350/q", roi: "3.0x to 3.5x" },
        fertilizersPerAcre: { urea: 180, dap: 90, mop: 60 },
        fertilizersList: [
            { type: "NPK (kg/ha)", recommendation: { en: "180 N : 90 P2O5 : 60 K2O", hi: "180 N : 90 P2O5 : 60 K2O" } }
        ],
        pesticides: [
            { active: "Cartap hydrochloride", use: { en: "Stem borer", hi: "तना छेदक" }, timing: { en: "At planting/early stage", hi: "रोपाई के समय/प्रारम्भिक अवस्था" }, method: { en: "Soil application", hi: "मिट्टी में दीजिए" } }
        ],
        equipment: { en: ["Tractor", "Planter", "Harvester"], hi: ["ट्रैक्टर", "प्लांटर", "हार्वेस्टर"] },
        process: [
            { step: { en: "Field Preparation", hi: "खेत की तैयारी" }, detail: { en: "Deep ploughing and leveling.", hi: "गहरी जुताई व समतल करें।" } },
            { step: { en: "Planting", hi: "रोपण" }, detail: { en: "Plant two- or three-bud setts in furrows.", hi: "क्यारियों में दो या तीन कली वाले टुकड़े बोएं।" } },
            { step: { en: "Irrigation & Nutrition", hi: "सिंचाई व पोषण" }, detail: { en: "Flood initially then as needed; split fertilizer applications.", hi: "शुरू में भरपूर पानी, फिर आवश्यकता अनुसार; उर्वरक दो या तीन किस्तों में दें।" } },
            { step: { en: "Harvest", hi: "कटाई" }, detail: { en: "12–16 months after planting when sugar content peaks.", hi: "रोपाई के 12-16 महीने बाद जब चीनी अधिक हो तब कटाई करें।" } }
        ]
    },

    // ----- Cotton -----
    Cotton: {
        name: "Cotton",
        hindiName: "कपास",
        seasons: ["kharif"],
        soils: ["black", "alluvial"],
        profitable: true,
        highYield: true,
        profitAreaHa: 1.0,
        avgYield_t_per_ha: 2.0,
        picture: "images/cotton.webp",
        economics: { costPerAcre: 25000, expectedYield: "10-12 q/acre", marketPrice: "₹6500/q", roi: "2.0x to 2.5x" },
        fertilizersPerAcre: { urea: 110, dap: 55, mop: 35 },
        fertilizersList: [
            { type: "NPK", recommendation: { en: "Split N; adequate P & K for boll formation", hi: "बोले के निर्माण के लिए N किस्तों में, P & K पर्याप्त" } }
        ],
        pesticides: [
            { active: "Imidacloprid / Neem oil", use: { en: "Sucking pests (aphids, jassids)", hi: "रस चूसने वाले कीट" }, timing: { en: "On detection", hi: "कीट दिखने पर" }, method: { en: "Foliar spray/seed treatment", hi: "पत्तियों पर छिड़काव/बीज उपचार" } }
        ],
        equipment: { en: ["Planter", "Sprayer", "Cotton picker or manual picking"], hi: ["प्लांटर", "स्प्रेयर", "कपास बीनने वाली मशीन"] },
        process: [
            { step: { en: "Sowing", hi: "बुवाई" }, detail: { en: "Sow BT hybrid seeds at recommended spacing.", hi: "BT हाइब्रिड बीज उचित दूरी पर बोएं।" } },
            { step: { en: "Irrigation", hi: "सिंचाई" }, detail: { en: "Alternate furrow irrigation recommended.", hi: "एक-एक खड्ड छोड़कर सिंचाई की सलाह।" } },
            { step: { en: "Pest Management", hi: "कीट प्रबंधन" }, detail: { en: "Monitor pink bollworm & whitefly; use IPM.", hi: "गुलाबी सुंडी और सफेद मक्खी की निगरानी; IPM अपनाएं।" } },
            { step: { en: "Harvest", hi: "कटाई" }, detail: { en: "Pick bolls when open; machine or hand pick.", hi: "जब डोडे खुल जाएं तो हाथ या मशीन से चुनें।" } }
        ]
    },

    // ----- Jute -----
    Jute: {
        name: "Jute",
        hindiName: "जूट",
        seasons: ["kharif"],
        soils: ["peaty", "alluvial"],
        profitable: true,
        highYield: false,
        profitAreaHa: 0.7,
        avgYield_t_per_ha: 2.0,
        picture: "images/jute.webp",
        economics: { costPerAcre: 9000, expectedYield: "8-10 q/acre", marketPrice: "₹2000/q", roi: "1.8x to 2.2x" },
        fertilizersPerAcre: { urea: 60, dap: 40, mop: 20 },
        fertilizersList: [
            { name: "Urea", dosage: { en: "30-60 kg/acre split", hi: "30-60 किग्रा/एकड़" }, timing: { en: "Split application", hi: "किस्तों में" } }
        ],
        pesticides: [
            { active: "Carbaryl", use: { en: "Defoliators, stem borer", hi: "पत्ती खाने वाले, तना छेदक" }, timing: { en: "On pest detection", hi: "कीट दिखने पर" } }
        ],
        equipment: { en: ["Plough", "Seeder", "Retting pit / retting tanks"], hi: ["हल", "बीजक", "गलाने के गड्ढे"] },
        process: [
            { step: { en: "Sowing", hi: "बुवाई" }, detail: { en: "May–June in moist, well-prepared land.", hi: "मई-जून में नमी युक्त तैयार खेत में बुवाई करें।" } },
            { step: { en: "Growth & Harvest", hi: "विकास व कटाई" }, detail: { en: "Harvest before flowering for best fibre quality; retting in water needed.", hi: "रंगने से पहले कटाई करें; रेटिंग के लिए पानी में रखें।" } }
        ]
    },

    // ----- Soybean -----
    Soybean: {
        name: "Soybean",
        hindiName: "सोयाबीन",
        seasons: ["kharif"],
        soils: ["black", "alluvial", "red"],
        profitable: true,
        highYield: true,
        profitAreaHa: 0.6,
        avgYield_t_per_ha: 2.5,
        picture: "images/Soyabean.webp",
        economics: { costPerAcre: 12000, expectedYield: "10-12 q/acre", marketPrice: "₹3800/q", roi: "2.0x to 2.8x" },
        fertilizersPerAcre: { urea: 20, dap: 40, mop: 10 },
        fertilizersList: [
            { type: "Rhizobium inoculation", recommendation: { en: "Use Rhizobium seeds inoculant to boost N fixation", hi: "राइजोबियम उपचार से N फिक्सेशन बढ़ता है" } }
        ],
        pesticides: [
            { active: "Quinalphos", use: { en: "Defoliators, pod borers", hi: "पत्ती व फली छेदक" }, timing: { en: "As needed", hi: "आवश्यकतानुसार" } }
        ],
        equipment: { en: ["Tractor", "Planter", "Sprayer"], hi: ["ट्रैक्टर", "प्लांटर", "स्प्रेयर"] },
        process: [
            { step: { en: "Land Prep & Sowing", hi: "खेत की तैयारी व बुवाई" }, detail: { en: "Sow after monsoon onset; ensure good seedbed.", hi: "मानसून के बाद बुवाई करें; बीज का बेड अच्छा रखें।" } },
            { step: { en: "Nutrient Management", hi: "उर्वरक प्रबंधन" }, detail: { en: "Inoculate seeds and apply P & K as per soil test.", hi: "बीज राइजोबियम से उपचारित करें; मिट्टी जांच के अनुसार P & K दें।" } }
        ]
    },

    // ----- Groundnut (Peanut) -----
    Groundnut: {
        name: "Groundnut",
        hindiName: "मूंगफली",
        seasons: ["kharif"],
        soils: ["red", "black", "alluvial"],
        profitable: true,
        highYield: false,
        profitAreaHa: 0.6,
        avgYield_t_per_ha: 2.2,
        picture: "images/groundnut.jpg",
        economics: { costPerAcre: 10000, expectedYield: "8-10 q/acre", marketPrice: "₹6000/q", roi: "2.5x to 3.0x" },
        fertilizersPerAcre: { urea: 80, dap: 40, mop: 20 },
        fertilizersList: [
            { type: "NPK", recommendation: { en: "Apply Rhizobium biofertilizer and gypsum for pod development", hi: "राइजोबियम व जिप्सम का प्रयोग फली विकास हेतु" } }
        ],
        pesticides: [
            { active: "Profenofos", use: { en: "Pod borer", hi: "फली छेदक" }, timing: { en: "At first sign of damage", hi: "नुकसान के पहले संकेत पर" } }
        ],
        equipment: { en: ["Plough", "Ridger", "Planter", "Peanut digger", "Sprayer"], hi: ["हल", "रिज्जर", "प्लांटर", "मूंगफली खोदने वाला", "स्प्रेयर"] },
        process: [
            { step: { en: "Sowing", hi: "बुवाई" }, detail: { en: "Sow after monsoon onset; maintain spacing for variety.", hi: "मानसून के बाद बुवाई करें; किस्म के अनुसार दूरी रखें।" } },
            { step: { en: "Irrigation", hi: "सिंचाई" }, detail: { en: "Light irrigation weekly; critical during pegging.", hi: "साप्ताहिक हल्की सिंचाई; पेगिंग में महत्वपूर्ण।" } },
            { step: { en: "Harvest", hi: "कटाई" }, detail: { en: "Use digger after pods mature and foliage yellows.", hi: "जब फली पकी और पत्तियाँ पीली हों तो खोदें।" } }
        ]
    },

    // ----- Potato -----
    Potato: {
        name: "Potato",
        hindiName: "आलू",
        seasons: ["rabi"],
        soils: ["alluvial", "loamy", "sandy", "red"],
        profitable: true,
        highYield: true,
        profitAreaHa: 0.7,
        avgYield_t_per_ha: 20.0,
        picture: "images/potato.png",
        economics: { costPerAcre: 30000, expectedYield: "80-100 q/acre", marketPrice: "₹1200/q", roi: "2.5x to 3.0x" },
        fertilizersPerAcre: { urea: 100, dap: 50, mop: 80 },
        fertilizersList: [
            { type: "NPK", recommendation: { en: "100 N : 50 P2O5 : 80 K2O", hi: "100 N : 50 P2O5 : 80 K2O" } },
            { name: "Urea", dosage: { en: "45kg/acre", hi: "45 किग्रा/एकड़" }, timing: { en: "Half basal, half at tuber initiation", hi: "आधा बुवाई के समय, बाकी कंद शुरुआत पर" }, method: { en: "Soil incorporation", hi: "मिट्टी में मिलाएं" } }
        ],
        pesticides: [
            { active: "Mancozeb", use: { en: "Late blight", hi: "पिछेड़ा झुलसा" }, dosage: { en: "2.5g/L", hi: "2.5 ग्राम/लीटर" }, timing: { en: "Every 10-12 days during disease period", hi: "रोग के समय हर 10-12 दिन" }, method: { en: "Spray", hi: "स्प्रे" } }
        ],
        equipment: { en: ["Plough", "Ridger", "Planter", "Sprayer", "Digger"], hi: ["हल", "रिज्जर", "प्लांटर", "स्प्रेयर", "डिगर"] },
        process: [
            { step: { en: "Seed tuber selection", hi: "कंद का चयन" }, detail: { en: "Use healthy, 30-40g seed tubers; treat with fungicide.", hi: "स्वस्थ 30-40g कंद का प्रयोग; फफूंदनाशक से उपचार करें।" } },
            { step: { en: "Planting", hi: "रोपण" }, detail: { en: "Nov–Dec spacing 60×20 cm; hill system as per variety.", hi: "नवंबर-दिसंबर में 60×20 सेमी दूरी; किस्म अनुसार हिल सिस्टम।" } },
            { step: { en: "Irrigation & Fertility", hi: "सिंचाई व उर्वरक" }, detail: { en: "Irrigate immediately after planting then every 10–12 days; topdress N at tuber initiation.", hi: "रोपण के तुरंत बाद और फिर हर 10–12 दिन सिंचाई; कंद बनने पर N दें।" } }
        ]
    },

    // ----- Mustard -----
    Mustard: {
        name: "Mustard",
        hindiName: "सरसों",
        seasons: ["rabi"],
        soils: ["alluvial", "loamy", "sandy"],
        profitable: true,
        highYield: true,
        profitAreaHa: 0.6,
        avgYield_t_per_ha: 1.8,
        picture: "images/mustard.webp",
        economics: { costPerAcre: 10000, expectedYield: "8-10 q/acre", marketPrice: "₹5000/q", roi: "2.0x to 2.5x" },
        fertilizersPerAcre: { urea: 80, dap: 40, mop: 20 },
        fertilizersList: [
            { type: "NPK", recommendation: { en: "80 N : 40 P2O5 : 20 K2O", hi: "80 N : 40 P2O5 : 20 K2O" } },
            { name: "Urea", dosage: { en: "35kg/acre", hi: "35 किग्रा/एकड़" }, timing: { en: "Half basal, half at flowering", hi: "आधा बुवाई पर, आधा फूल आने पर" }, method: { en: "Broadcast", hi: "बिखेर कर" } }
        ],
        pesticides: [
            { active: "Chlorpyrifos", use: { en: "Aphids", hi: "एफिड्स" }, dosage: { en: "2ml/L", hi: "2 मिलीलीटर/लीटर" }, timing: { en: "At pest appearance", hi: "कीट दिखते ही" }, method: { en: "Spray with knapsack", hi: "नैपसैक से छिड़काव" } }
        ],
        equipment: { en: ["Plough", "Seed drill", "Sprayer", "Threshing machine"], hi: ["हल", "सीड ड्रिल", "स्प्रेयर", "थ्रेशिंग मशीन"] },
        process: [
            { step: { en: "Seed selection & treatment", hi: "बीज चयन व उपचार" }, detail: { en: "Use HYV seeds (Pusa Bold/Varuna) & treat with Thiram 3g/kg.", hi: "एचवाईवी जैसे पूसा बोल्ड/वरुण; थिरम 3g/kg से उपचार।" } },
            { step: { en: "Sowing", hi: "बुवाई" }, detail: { en: "Oct–Nov spacing 30 cm rows.", hi: "अक्टूबर-नवंबर 30 सेमी पंक्तियाँ।" } },
            { step: { en: "Harvest", hi: "कटाई" }, detail: { en: "Feb–Mar when pods turn yellow.", hi: "फरवरी-मार्च जब फलियाँ पीली हों।" } }
        ]
    },

    // ----- Barley -----
    Barley: {
        name: "Barley",
        hindiName: "जौ",
        seasons: ["rabi"],
        soils: ["alluvial", "sandy", "black", "desert", "saline"],
        profitable: true,
        highYield: false,
        profitAreaHa: 0.4,
        avgYield_t_per_ha: 2.5,
        picture: "images/Barley.webp",
        economics: { costPerAcre: 12000, expectedYield: "15-18 q/acre", marketPrice: "₹1800/q", roi: "1.6x to 2.0x" },
        fertilizersPerAcre: { urea: 100, dap: 50, mop: 30 },
        fertilizersList: [
            { type: "NPK", recommendation: { en: "100 N : 50 P2O5 : 30 K2O", hi: "100 N : 50 P2O5 : 30 K2O" } }
        ],
        pesticides: [
            { active: "Mancozeb", use: { en: "Leaf blight", hi: "पत्ती रोग" }, dosage: { en: "2.5g/L", hi: "2.5 ग्राम/लीटर" }, timing: { en: "At first symptoms", hi: "पहले लक्षण पर" } }
        ],
        equipment: { en: ["Plough", "Seed drill", "Sprayer", "Harvester"], hi: ["हल", "सीड ड्रिल", "स्प्रेयर", "हार्वेस्टर"] },
        process: [
            { step: { en: "Sowing", hi: "बुवाई" }, detail: { en: "Late Oct–Nov row spacing 22 cm.", hi: "अक्टूबर-नवंबर अंत में 22 सेमी।" } },
            { step: { en: "Harvest", hi: "कटाई" }, detail: { en: "March–April when grains golden.", hi: "मार्च-अप्रैल जब दाने सुनहरे हों।" } }
        ]
    },

    // ----- Bajra (Pearl Millet) -----
    Bajra: {
        name: "Bajra",
        hindiName: "बाजरा",
        seasons: ["kharif"],
        soils: ["desert", "red"],
        profitable: true,
        highYield: false,
        profitAreaHa: 0.5,
        avgYield_t_per_ha: 1.2,
        picture: "images/Bajra.webp",
        economics: { costPerAcre: 6000, expectedYield: "8-10 q/acre", marketPrice: "₹2000/q", roi: "1.8x to 2.2x" },
        fertilizersPerAcre: { urea: 40, dap: 30, mop: 10 },
        fertilizersList: [
            { type: "NPK", recommendation: { en: "Moderate N; adequate P & K", hi: "मध्यम N; पर्याप्त P व K" } }
        ],
        pesticides: [
            { active: "Carbaryl", use: { en: "Stem borers, leaf feeders", hi: "तना छेदक, पत्ती खाते कीट" }, timing: { en: "When infestation starts", hi: "संक्रमण पर" } }
        ],
        equipment: { en: ["Seed drill", "Plough", "Sprayer"], hi: ["सीड ड्रिल", "हल", "स्प्रेयर"] },
        process: [
            { step: { en: "Sowing", hi: "बुवाई" }, detail: { en: "Sow soon after monsoon onset; shallow sowing.", hi: "मानसून के तुरंत बाद हल्की गहराई में बुवाई।" } }
        ]
    },

    // ----- Millets (General: Sorghum / Small millets) -----
    Millets: {
        name: "Millets",
        hindiName: "मिलेट्स / बाजरा / ज्वार",
        seasons: ["kharif"],
        soils: ["red", "black", "alluvial"],
        profitable: true,
        highYield: false,
        profitAreaHa: 0.4,
        avgYield_t_per_ha: 1.0,
        picture: "images/Millets.webp",
        economics: { costPerAcre: 5000, expectedYield: "6-10 q/acre", marketPrice: "₹2000/q", roi: "1.5x to 2.2x" },
        fertilizersPerAcre: { urea: 30, dap: 20, mop: 10 },
        fertilizersList: [
            { type: "NPK", recommendation: { en: "Low to moderate N; apply P & K as needed", hi: "कम/मध्यम N; P व K आवश्यकता अनुसार" } }
        ],
        pesticides: [
            { active: "Emamectin", use: { en: "Fall armyworm in maize/sorghum", hi: "फॉल आर्मीवर्म" }, timing: { en: "At first sign", hi: "पहले संकेत पर" } }
        ],
        equipment: { en: ["Seed drill", "Harvester"], hi: ["सीड ड्रिल", "हार्वेस्टर"] },
        process: [
            { step: { en: "Sowing", hi: "बुवाई" }, detail: { en: "Sow in well-prepared beds; minimal fertilizer requirement.", hi: "अच्छे तैयारी वाले बेड में बुवाई; कम उर्वरक की आवश्यकता।" } }
        ]
    },

    // ----- Pulses (General: Gram, Moong, Urad ...) -----
    Pulses: {
        name: "Pulses",
        hindiName: "दालें (चना, मूंग, उड़द आदि)",
        seasons: ["rabi", "kharif"],
        soils: ["red", "black", "alluvial", "desert"],
        profitable: true,
        highYield: false,
        profitAreaHa: 0.3,
        avgYield_t_per_ha: 0.8,
        picture: "images/Arhar.webp",
        economics: { costPerAcre: 8000, expectedYield: "6-10 q/acre depending on crop", marketPrice: "Varies", roi: "1.5x to 2.5x" },
        fertilizersPerAcre: { urea: 10, dap: 20, mop: 10 },
        fertilizersList: [
            { type: "Rhizobium", recommendation: { en: "Inoculate seeds to boost N fixation", hi: "राइजोबियम से बीज उपचार करें" } }
        ],
        pesticides: [
            { active: "Quinalphos", use: { en: "Pod borers", hi: "फली छेदक" }, timing: { en: "At damage onset", hi: "नुकसान पर" } }
        ],
        equipment: { en: ["Seeder", "Plough", "Sprayer"], hi: ["बीजक", "हल", "स्प्रेयर"] },
        process: [
            { step: { en: "Seed Treatment & Sowing", hi: "बीज उपचार व बुवाई" }, detail: { en: "Treat seeds & sow at recommended spacing.", hi: "बीज उपचार कर उचित दूरी पर बुवाई करें।" } },
            { step: { en: "Weed Control", hi: "निराई" }, detail: { en: "Manual or chemical as per recommendations.", hi: "हाथ से या रासायनिक नियंत्रण।" } }
        ]
    },

    // ----- Tea -----
    Tea: {
        name: "Tea",
        hindiName: "चाय",
        seasons: ["kharif", "zaid"],
        soils: ["laterite", "mountain", "peaty"],
        profitable: true,
        highYield: true,
        profitAreaHa: 0.3,
        avgYield_t_per_ha: null,
        picture: "images/Tea.webp",
        economics: { costPerAcre: 60000, expectedYield: "Variable by plucking; premium prices for quality", marketPrice: "Varies", roi: "Long term (perennial)" },
        fertilizersPerAcre: { urea: 200, dap: 150, mop: 80 },
        fertilizersList: [
            { type: "Balanced feed", recommendation: { en: "Apply NPK & trace elements as per soil test", hi: "मिट्टी जांच अनुसार NPK व ट्रेस तत्व" } }
        ],
        pesticides: [
            { active: "Quinalphos", use: { en: "Looper caterpillars, thrips", hi: "लूपर, थ्रिप्स" }, timing: { en: "On scouting", hi: "निगरानी पर" } }
        ],
        equipment: { en: ["Pruning shears", "Plucking baskets", "Sprayer"], hi: ["छंटाई कैंची", "तोड़ाई की टोकरियाँ", "स्प्रेयर"] },
        process: [
            { step: { en: "Plantation & Maintenance", hi: "रोपण व रखरखाव" }, detail: { en: "Establish on terraces with shade and drainage; regular pruning & plucking.", hi: "टेरेस व जलनिकासी वाली जगह; नियमित छंटाई व तोड़ाई।" } }
        ]
    },

    // ----- Coffee -----
    Coffee: {
        name: "Coffee",
        hindiName: "कॉफ़ी",
        seasons: ["kharif", "zaid"],
        soils: ["laterite", "mountain"],
        profitable: true,
        highYield: true,
        profitAreaHa: 0.4,
        avgYield_t_per_ha: null,
        picture: "images/Coffee.webp",
        economics: { costPerAcre: 50000, expectedYield: "Varies (perennial)", marketPrice: "Varies", roi: "Long term (perennial)" },
        fertilizersPerAcre: { urea: 150, dap: 100, mop: 60 },
        fertilizersList: [
            { type: "NPK & organic", recommendation: { en: "Apply organic manures & NPK per soil test", hi: "ऑर्गेनिक व NPK मिट्टी जांच के अनुसार" } }
        ],
        pesticides: [
            { active: "Copper oxychloride", use: { en: "Blight & fungal diseases", hi: "फफूंद रोग" }, timing: { en: "On symptoms", hi: "लक्षण पर" } }
        ],
        equipment: { en: ["Shade nets", "Pruning tools", "Sprayer"], hi: ["छाया जाल", "छंटाई उपकरण", "स्प्रेयर"] },
        process: [
            { step: { en: "Shade & Irrigation", hi: "छाँव व सिंचाई" }, detail: { en: "Grow under shade; maintain mulching & regular irrigation.", hi: "छाया में उगाएं; मल्चिंग व नियमित सिंचाई रखें।" } }
        ]
    },

    // ----- Cashew -----
    Cashew: {
        name: "Cashew",
        hindiName: "काजू",
        seasons: ["kharif", "rabi"],
        soils: ["laterite", "red"],
        profitable: true,
        highYield: false,
        profitAreaHa: 0.5,
        avgYield_t_per_ha: null,
        picture: "images/kaju.webp",
        economics: { costPerAcre: 30000, expectedYield: "Varies (perennial)", marketPrice: "Varies", roi: "Long term" },
        fertilizersPerAcre: { urea: 60, dap: 50, mop: 40 },
        fertilizersList: [
            { type: "NPK & FYM", recommendation: { en: "Apply FYM and balanced fertilizers", hi: "जैविक खाद व संतुलित उर्वरक" } }
        ],
        pesticides: [
            { active: "Endosulfan (restricted)", use: { en: "Thrips & tea mosquito bug", hi: "थ्रिप्स व टी मुनी आनंद" }, timing: { en: "Apply as per IPM", hi: "IPM अनुसार" } }
        ],
        equipment: { en: ["Pruners", "Sprayers", "Mulching tools"], hi: ["प्रूनर", "स्प्रेयर", "मल्चिंग उपकरण"] },
        process: [
            { step: { en: "Plantation", hi: "रोपण" }, detail: { en: "Plant on well-drained slopes; grafting for high yielding varieties.", hi: "अच्छी जल निकासी वाली जगह; उच्च उपज के लिए ग्राफ्टिंग।" } }
        ]
    },

    // ----- Rubber -----
    Rubber: {
        name: "Rubber",
        hindiName: "रबर",
        seasons: ["kharif"],
        soils: ["laterite", "mountain"],
        profitable: true,
        highYield: true,
        profitAreaHa: 2.0,
        avgYield_t_per_ha: null,
        picture: "images/Rubber.webp",
        economics: { costPerAcre: 70000, expectedYield: "Perennial tapping yields", marketPrice: "Varies", roi: "Long term" },
        fertilizersPerAcre: { urea: 200, dap: 150, mop: 100 },
        fertilizersList: [
            { type: "NPK", recommendation: { en: "Apply NPK & organic manures as per schedule", hi: "NPK व जैविक खाद दें" } }
        ],
        pesticides: [
            { active: "Fungicides", use: { en: "Phytophthora & fungal diseases", hi: "फफूंद रोग" }, timing: { en: "On detection", hi: "निगरानी पर" } }
        ],
        equipment: { en: ["Tapping knives", "Collection cups", "Pruning tools"], hi: ["टैपिंग चाकू", "संग्रहण कप", "छंटाई उपकरण"] },
        process: [
            { step: { en: "Plantation & Tapping", hi: "रोपण व टैपिंग" }, detail: { en: "Plant in shaded, well-drained land; begin tapping after maturity.", hi: "छाया व जलनिकासी वाली जगह; परिपक्वता पर टैपिंग शुरू करें।" } }
        ]
    },

    // ----- Apple (Temperate Fruit) -----
    Apple: {
        name: "Apple",
        hindiName: "सेब",
        seasons: ["rabi"],
        soils: ["mountain"],
        profitable: true,
        highYield: true,
        profitAreaHa: 0.2,
        avgYield_t_per_ha: null,
        picture: "images/apple.webp",
        economics: { costPerAcre: 80000, expectedYield: "Perennial orchard yields", marketPrice: "Varies (quality dependent)", roi: "Long term" },
        fertilizersPerAcre: { urea: 100, dap: 80, mop: 50 },
        fertilizersList: [
            { type: "Orchard nutrition", recommendation: { en: "Apply macro & micro nutrients per soil test", hi: "मिट्टी जांच अनुसार पोषक तत्व" } }
        ],
        pesticides: [
            { active: "Horticultural oils / fungicides", use: { en: "Scab, aphids, codling moth", hi: "स्कैब, एफिड्स" }, timing: { en: "Seasonal applications", hi: "मौसमी अनुप्रयोग" } }
        ],
        equipment: { en: ["Pruning saws", "Sprayers", "Ladders"], hi: ["छंटाई आरी", "स्प्रेयर", "सीढ़ियाँ"] },
        process: [
            { step: { en: "Orchard establishment", hi: "बाग की स्थापना" }, detail: { en: "Select chill-suitable varieties; terrace slopes for drainage.", hi: "ठंड-सहनीय किस्मे चुनें; ढलान पर जल निकासी सुनिश्चित करें।" } }
        ]
    },

    // -------------------- Zaid Crops (Summer Season) --------------------
    Watermelon: {
        name: "Watermelon",
        hindiName: "तरबूज",
        seasons: ["zaid"],
        soils: ["black", "desert"],
        picture: "images/watermelon.png",
        description: "Popular Zaid crop needing hot dry climate with assured irrigation.",
        equipment: { en: ["Plough", "Seeder", "Irrigation Pump", "Drip Irrigation System"], hi: ["हल", "बीजक", "सिंचाई पंप", "ड्रिप सिस्टम"] },
        fertilizersPerAcre: { urea: 80, dap: 50, mop: 60 },
    },
    Muskmelon: {
        name: "Muskmelon",
        hindiName: "खरबूजा",
        seasons: ["zaid"],
        soils: ["black", "desert"],
        picture: "images/muskmelone.png",
        description: "Summer fruit crop, requires sandy loam or riverbed soils with irrigation.",
        equipment: { en: ["Plough", "Drip Irrigation", "Sprayer"], hi: ["हल", "ड्रिप सिंचाई", "स्प्रेयर"] },
        fertilizersPerAcre: { urea: 70, dap: 40, mop: 50 },
    },
    Cucumber: {
        name: "Cucumber",
        hindiName: "खीरा",
        seasons: ["zaid"],
        soils: ["black", "desert"],
        picture: "images/cucumber.webp",
        description: "Fast-growing summer vegetable, cultivated with proper irrigation.",
        equipment: { en: ["Hand Hoe", "Irrigation Pump", "Sprayer"], hi: ["कुदाल", "सिंचाई पंप", "स्प्रेयर"] },
        fertilizersPerAcre: { urea: 60, dap: 30, mop: 40 },
    },
    BottleGourd: {
        name: "Bottle Gourd",
        hindiName: "लौकी",
        seasons: ["zaid"],
        soils: ["black"],
        picture: "images/Pumpkin.png",
        description: "Common summer vegetable crop requiring fertile soil and irrigation.",
        equipment: { en: ["Hand Hoe", "Irrigation Pump"], hi: ["कुदाल", "सिंचाई पंप"] },
        fertilizersPerAcre: { urea: 50, dap: 30, mop: 30 },
    },
    GreenGram: {
        name: "Green Gram (Moong)",
        hindiName: "मूंग",
        seasons: ["zaid"],
        soils: ["black"],
        picture: "images/Green-Gram Moong.png",
        description: "Fast-growing pulse crop, grown in summer with irrigation.",
        equipment: { en: ["Seeder", "Sprayer"], hi: ["बीजक", "स्प्रेयर"] },
        fertilizersPerAcre: { urea: 10, dap: 30, mop: 10 },
    },
    BlackGram: {
        name: "Black Gram (Urad)",
        hindiName: "उड़द",
        seasons: ["zaid"],
        soils: ["black"],
        picture: "images/Gram.webp",
        description: "Summer pulse crop requiring moderate irrigation.",
        equipment: { en: ["Seeder", "Sprayer"], hi: ["बीजक", "स्प्रेयर"] },
        fertilizersPerAcre: { urea: 10, dap: 30, mop: 10 },
    },
    Okra: {
        name: "Okra / Lady’s Finger",
        hindiName: "भिंडी",
        seasons: ["zaid"],
        soils: ["black"],
        picture: "images/Lady-finger.webp",
        description: "Summer vegetable widely grown in India.",
        equipment: { en: ["Seeder", "Sprayer"], hi: ["बीजक", "स्प्रेयर"] },
        fertilizersPerAcre: { urea: 50, dap: 40, mop: 30 },
    },
    Cowpea: {
        name: "Cowpea",
        hindiName: "लोबिया",
        seasons: ["zaid"],
        soils: ["black"],
        picture: "images/cowpea.webp",
        description: "Summer vegetable and fodder crop, grows well in sandy loam and black soils with irrigation.",
        equipment: { en: ["Seeder", "Sprayer"], hi: ["बीजक", "स्प्रेयर"] },
        fertilizersPerAcre: { urea: 20, dap: 30, mop: 10 },
    },
    ClusterBean: {
        name: "Cluster Bean",
        hindiName: "ग्वार",
        seasons: ["zaid"],
        soils: ["desert"],
        picture: "images/Cluster.webp",
        description: "Drought tolerant summer crop, grown in arid regions with irrigation support.",
        equipment: { en: ["Plough", "Drip Irrigation"], hi: ["हल", "ड्रिप सिंचाई"] },
        fertilizersPerAcre: { urea: 20, dap: 30, mop: 10 },
    },
    PearlMillet: {
        name: "Pearl Millet (Bajra)",
        hindiName: "बाजरा",
        seasons: ["zaid"],
        soils: ["desert"],
        picture: "images/pear.webp",
        description: "Drought-resistant millet, often grown in arid and desert soils as summer fodder.",
        equipment: { en: ["Seeder", "Irrigation Pump"], hi: ["बीजक", "सिंचाई पंप"] },
        fertilizersPerAcre: { urea: 40, dap: 30, mop: 10 },
    },

    // -------------------- Peaty/Marshy Crops --------------------
    Lentil: {
        name: "Lentil",
        hindiName: "मसूर",
        seasons: ["rabi"],
        soils: ["peaty"],
        picture: "images/Lentils.webp",
        description: "Pulse crop suitable for peaty soils after monsoon water recedes.",
        equipment: { en: ["Seeder", "Sprayer"], hi: ["बीजक", "स्प्रेयर"] },
        fertilizersPerAcre: { urea: 10, dap: 30, mop: 10 },
    },
    Khesari: {
        name: "Khesari",
        hindiName: "खेसारी",
        seasons: ["rabi"],
        soils: ["peaty"],
        picture: "images/Khesari.webp",
        description: "Fast-growing pulse, tolerates moist soils.",
        equipment: { en: ["Seeder"], hi: ["बीजक"] },
        fertilizersPerAcre: { urea: 10, dap: 20, mop: 10 },
    },
    WaterSpinach: {
        name: "Water Spinach",
        hindiName: "कलमी साग",
        seasons: ["rabi"],
        soils: ["peaty"],
        picture: "images/waters.webp",
        description: "Leafy green vegetable tolerating wet soils.",
        equipment: { en: ["Hand Hoe"], hi: ["कुदाल"] },
        fertilizersPerAcre: { urea: 40, dap: 10, mop: 20 },
    },
    Berseem: {
        name: "Berseem",
        hindiName: "बरसीम",
        seasons: ["rabi"],
        soils: ["peaty"],
        picture: "images/Berseem.webp",
        description: "Fodder crop requiring moist soils.",
        equipment: { en: ["Seeder", "Irrigation Pump"], hi: ["बीजक", "सिंचाई पंप"] },
        fertilizersPerAcre: { urea: 20, dap: 60, mop: 30 },
    },
    Wheat_Peaty: {
        name: "Wheat (with drainage)",
        hindiName: "गेहूं (जल निकासी के साथ)",
        seasons: ["rabi"],
        soils: ["peaty"],
        picture: "images/wheat1.webp",
        description: "Wheat can be grown in peaty/marshy soil only with excellent drainage.",
        equipment: { en: ["Seeder", "Tractor", "Sprayer"], hi: ["बीजक", "ट्रैक्टर", "स्प्रेयर"] },
        fertilizersPerAcre: { urea: 100, dap: 50, mop: 40 },
    },

    // ----- Orange (Citrus) -----
    Orange: {
        name: "Orange",
        hindiName: "संतरा",
        seasons: ["kharif", "rabi"],
        soils: ["mountain", "alluvial"],
        profitable: true,
        highYield: true,
        profitAreaHa: 0.2,
        avgYield_t_per_ha: null,
        picture: "images/Orange.webp",
        economics: { costPerAcre: 40000, expectedYield: "Perennial orchard yields", marketPrice: "Varies", roi: "Long term" },
        fertilizersPerAcre: { urea: 120, dap: 80, mop: 60 },
        fertilizersList: [
            { type: "Citrus nutrition", recommendation: { en: "Balanced NPK with micronutrients", hi: "संतरा के लिए संतुलित NPK व सूक्ष्म तत्व" } }
        ],
        pesticides: [
            { active: "Imidacloprid / Horticultural oil", use: { en: "Aphids, mites", hi: "एफिड्स, माइट्स" }, timing: { en: "As needed", hi: "आवश्यकतानुसार" } }
        ],
        equipment: { en: ["Pruners", "Sprayers", "Mulchers"], hi: ["प्रूनर", "स्प्रेयर", "मल्चर"] },
        process: [
            { step: { en: "Planting & Care", hi: "रोपण व देखभाल" }, detail: { en: "Plant on slopes with good drainage; regular pruning & feeding.", hi: "जलनिकासी वाली जगह; नियमित छंटाई व पोषण।" } }
        ]
    },

    // ----- Maize (From your partial crop.js) -----
    Maize: {
        name: "Maize",
        hindiName: "मक्का",
        seasons: ["kharif", "zaid"],
        soils: ["alluvial", "black", "red", "mountain"],
        profitable: true,
        highYield: true,
        profitAreaHa: 0.7,
        avgYield_t_per_ha: 6.0,
        picture: "images/maize.jpeg",
        economics: {
            costPerAcre: 12000,
            expectedYield: "25-30 q/acre",
            marketPrice: "₹2500/q",
            roi: "2.5x to 3.0x"
        },
        fertilizersPerAcre: { urea: 90, dap: 45, mop: 30 },
        fertilizersList: [
            { type: "NPK (kg/ha)", recommendation: { en: "120 N : 60 P2O5 : 40 K2O", hi: "120 N : 60 P2O5 : 40 K2O" } },
            { name: "Urea", dosage: { en: "40kg/acre", hi: "40 किग्रा/एकड़" }, timing: { en: "Split doses at knee-high and tasseling stages", hi: "घुटने की ऊंचाई और फूल आने पर दो किस्तों में" } }
        ],
        pesticides: [
            { active: "Emamectin", use: { en: "For fall armyworm", hi: "फॉल आर्मीवर्म के लिए" }, timing: { en: "Spray at first sign of infestation", hi: "संक्रमण के पहले संकेत पर स्प्रे करें" } }
        ],
        equipment: { en: ["Seed drill", "Sheller"], hi: ["सीड ड्रिल", "शेलर"] },
        process: [
            { step: { en: "Sowing", hi: "बुवाई" }, detail: { en: "Sow seeds in well-prepared beds with a seed drill.", hi: "अच्छी तरह से तैयार किए गए खेतों में सीड ड्रिल से बीज बोएं।" } },
            { step: { en: "Irrigation", hi: "सिंचाई" }, detail: { en: "Light irrigation every 5–7 days, critical at flowering.", hi: "हर 5-7 दिन में हल्की सिंचाई, फूल आने पर महत्वपूर्ण।" } },
            { step: { en: "Weed Control", hi: "खरपतवार नियंत्रण" }, detail: { en: "Apply Atrazine pre-emergence.", hi: "एट्राजिन का अंकुरण-पूर्व प्रयोग करें।" } },
            { step: { en: "Harvesting", hi: "कटाई" }, detail: { en: "Use combine harvester when cobs mature and kernels are hard.", hi: "जब भुट्टे परिपक्व हो जाएं और दाने सख्त हों तो कंबाइन हार्वेस्टर का उपयोग करें।" } }
        ]
    }
};