// data/fertilizers.js

export const fertilizers = [
    {
        id: "urea",
        name: "Urea",
        hindi: "यूरिया",
        image: "urea.webp", // Ensure this image exists in your /images/ folder
        type: "Nitrogen Fertilizer",
        primaryUse: "Promotes vegetative growth, leaf and stem development.",
        application: "Generally applied in split doses during planting and active growth phases. Can be broadcast or banded.",
        dosageNotes: "Dosage varies greatly by crop and soil test. E.g., for cereals: 60-120 kg/acre.",
        safetyNotes: "Handle with gloves. Avoid contact with eyes/skin. Do not inhale dust. Store in a cool, dry place away from direct sunlight and moisture. Keep out of reach of children and animals."
    },
    {
        id: "dap",
        name: "Di-Ammonium Phosphate (DAP)",
        hindi: "डीएपी (डाय-अमोनियम फास्फेट)",
        image: "dap.webp", // Ensure this image exists
        type: "NP Fertilizer",
        primaryUse: "Provides Nitrogen and Phosphorus, crucial for root development, flowering, and fruiting.",
        application: "Typically applied as a basal dose during planting/sowing, placed near the seed zone. Less mobile in soil.",
        dosageNotes: "Dosage varies by crop and soil. E.g., for pulses: 25-50 kg/acre.",
        safetyNotes: "Handle with gloves. Avoid contact with eyes/skin. Do not inhale dust. Can cause irritation. Store in a cool, dry place. Keep away from alkaline materials. Keep out of reach of children and animals."
    },
    {
        id: "mop",
        name: "Muriate of Potash (MOP)",
        hindi: "एमओपी (म्यूरिएट ऑफ पोटाश)",
        image: "mop.webp", // Ensure this image exists
        type: "Potassium Fertilizer",
        primaryUse: "Enhances water regulation, disease resistance, and fruit quality/size.",
        application: "Applied at sowing or in split doses during vegetative and reproductive stages. Broadcast or banded.",
        dosageNotes: "Dosage varies by crop and soil. E.g., for fruits: 30-60 kg/acre.",
        safetyNotes: "Handle with gloves. Avoid direct contact. Do not inhale dust. Store in a cool, dry, well-ventilated area. Highly soluble, can affect salinity. Keep out of reach of children and animals."
    },
    {
        id: "ssp",
        name: "Single Super Phosphate (SSP)",
        hindi: "एसएसपी (सिंगल सुपर फास्फेट)",
        image: "ssp.png", // Ensure this image exists
        type: "P Fertilizer",
        primaryUse: "Provides Phosphorus and Sulfur, important for root development, energy transfer, and oilseed crops.",
        application: "Applied as a basal dose before sowing or planting. Mix well with soil.",
        dosageNotes: "Dosage varies, e.g., for oilseeds: 50-100 kg/acre.",
        safetyNotes: "Handle with gloves. Avoid dust inhalation. Can cause eye/skin irritation. Store in a dry place. Keep out of reach of children and animals."
    },
    // You can add more fertilizers here as needed
    // Example: Compost, Micronutrient mixes, etc.
];