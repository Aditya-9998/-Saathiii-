// C:\Users\Aditya Kumar\...\Kissan Saktiii\data\equipment.js
// Master list of equipment with image filenames added for easy update.

export const equipment = [
    // General Tillage
    { 
        id: "tractor", 
        name: "Tractor", 
        hindi: "ट्रैक्टर", 
        category: "Heavy Machinery", 
        uses: "Ploughing, harrowing, seeding, hauling.", 
        crops: ["Wheat", "Sugarcane", "Potato", "Maize", "Soybean", "Wheat_Peaty"],
        image: "Tractor.webp" 
    },
    { 
        id: "plough", 
        name: "Plough(Hal)", 
        hindi: "हल", 
        category: "Tillage", 
        uses: "Turning over the soil and seedbed preparation.", 
        crops: ["All major crops"],
        image: "Plough(Hal).webp" // Assuming a generic plough image
    },
    { 
        id: "harrow", 
        name: "Harrow", 
        hindi: "हैरो", 
        category: "Tillage", 
        uses: "Leveling and breaking clods.", 
        crops: ["Wheat"],
        image: "Harrow.webp" // Assuming a harrow image
    },
    { 
        id: "ridger", 
        name: "Ridger", 
        hindi: "रिज्जर", 
        category: "Tillage", 
        uses: "Making ridges and furrows (e.g., for Potato, Groundnut).", 
        crops: ["Potato", "Groundnut"],
        image: "Ridger.webp" // Assuming a ridger image
    },
    
    // Sowing & Planting
    { 
        id: "seed_drill", 
        name: "Seed Drill", 
        hindi: "सीड ड्रिल", 
        category: "Sowing", 
        uses: "Uniform sowing of seeds and fertilizer.", 
        crops: ["Wheat", "Mustard", "Barley", "Maize", "GreenGram", "BlackGram", "Okra", "Cowpea", "PearlMillet", "Lentil", "Khesari", "Berseem", "Wheat_Peaty"],
        image: "SeedDril.webp" 
    },
    { 
        id: "paddy_transplanter", 
        name: "Paddy Transplanter", 
        hindi: "धान रोपाई मशीन", 
        category: "Sowing", 
        uses: "Transplanting rice seedlings in the puddled fields.", 
        crops: ["Rice"],
        image: "PaddyTransplanter.webp" 
    },
    { 
        id: "planter", 
        name: "Planter", 
        hindi: "प्लांटर", 
        category: "Sowing", 
        uses: "Precision planting.", 
        crops: ["Cotton", "Sugarcane", "Potato", "Soybean", "Groundnut"],
        image: "Planter.webp" 
    },
    
    // Irrigation & Sprayer
    { 
        id: "sprayer", 
        name: "Sprayer", 
        hindi: "स्प्रेयर (छिड़काव मशीन)", 
        category: "Plant Protection", 
        uses: "Applying liquid chemicals/fertilizers.", 
        crops: ["All crops"],
        image: "Sprayer.webp" 
    },
    { 
        id: "drip_irrigation", 
        name: "Drip Irrigation System", 
        hindi: "ड्रिप सिंचाई प्रणाली", 
        category: "Irrigation", 
        uses: "Efficient water application.", 
        crops: ["Watermelon", "Muskmelon", "ClusterBean"],
        image: "Drip.webp" 
    },
    { 
        id: "irrigation_pump", 
        name: "Irrigation Pump", 
        hindi: "सिंचाई पंप", 
        category: "Irrigation", 
        uses: "Lifting water from a source.", 
        crops: ["All crops"],
        image: "pump.webp" 
    },
    
    // Harvesting & Post-Harvest
    { 
        id: "combine_harvester", 
        name: "Combine Harvester", 
        hindi: "कंबाइन हार्वेस्टर", 
        category: "Harvesting", 
        uses: "Harvests, threshes, and cleans grain.", 
        crops: ["Wheat", "Maize"],
        image: "CombineHarvester.webp" 
    },
    { 
        id: "sickle", 
        name: "Sickle (Hansia)", 
        hindi: "हंसिया", 
        category: "Hand Tool", 
        uses: "Manual harvesting.", 
        crops: ["Rice", "Wheat", "Jute"],
        image: "Sickle.webp" 
    },
    { 
        id: "digger", 
        name: "Digger", 
        hindi: "डिगर", 
        category: "Harvesting", 
        uses: "Unearthing root/tuber crops.", 
        crops: ["Potato", "Groundnut"],
        image: "Digger.webp" 
    },
    
    // Hand Tools
    { 
        id: "hand_hoe", 
        name: "Hand Hoe (Kudal)", 
        hindi: "कुदाल", 
        category: "Hand Tool", 
        uses: "Weeding and light soil breaking.", 
        crops: ["Cucumber", "BottleGourd", "WaterSpinach"],
        image: "HandHoe.webp" 
    },

    // Plantation & Horticulture
    { 
        id: "pruners", 
        name: "Pruners", 
        hindi: "छंटाई कैंची", 
        category: "Horticulture", 
        uses: "Cutting branches for maintenance.", 
        crops: ["Tea", "Coffee", "Cashew", "Apple", "Orange", "Rubber"],
        image: "Pruners.webp" 
    },
    { 
        id: "tapping_knives", 
        name: "Tapping Knives", 
        hindi: "टैपिंग चाकू", 
        category: "Horticulture", 
        uses: "Cutting bark to collect latex.", 
        crops: ["Rubber"],
        image: "TappingKnife.webp" 
    }
];

export function getEquipmentForCrop(cropName) {
    const recommended = equipment.filter(e => e.crops.includes(cropName) || e.crops.includes("All major crops") || e.crops.includes("All crops"));
    return recommended;
}