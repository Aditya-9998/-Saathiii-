// C:\Users\Aditya Kumar\...\Kissan Saktiii\data\soils.js

export const soils = [
    {
        id: "alluvial",
        name: "Alluvial",
        hindi: "जलोढ़",
        regions: "Northern Plains, River Valleys (Indus, Ganga, Brahmaputra); States: UP, Bihar, Punjab, Haryana, WB",
        color: "Light grey to ash grey",
        features: "Fertile, rich in potash & lime, poor in nitrogen",
        crops: ["Rice", "Wheat", "Sugarcane", "Cotton", "Jute", "Groundnut", "Soybean", "Millets", "Pulses", "Orange", "Mustard", "Barley", "Maize"],
        emoji: "🌊",
        note: "Fertile river plains; good for a wide range of crops"
    },
    {
        id: "black",
        name: "Black (Regur)",
        hindi: "काली/रेगुर",
        regions: "Deccan Plateau (Maharashtra, MP, Gujarat, AP, TN)",
        color: "Deep black to grey",
        features: "High clay content, moisture-retentive, rich in lime & iron; poor in N & P",
        crops: ["Cotton", "Soybean", "Wheat", "Groundnut", "Sugarcane", "Millets", "Pulses", "Watermelon", "Muskmelon", "Cucumber", "BottleGourd", "GreenGram", "BlackGram", "Okra", "Cowpea", "Barley", "Maize"],
        emoji: "🖤",
        note: "Excellent moisture retention; good for cotton and soybean"
    },
    {
        id: "red",
        name: "Red",
        hindi: "लाल",
        regions: "TN, Karnataka, Odisha, Chhattisgarh, Jharkhand, AP",
        color: "Reddish due to iron oxide",
        features: "Porous, less fertile, poor in nitrogen, humus, phosphorus",
        crops: ["Millets", "Pulses", "Groundnut", "Potato", "Rice", "Soybean", "Bajra", "Cashew", "Maize"],
        emoji: "🧱",
        note: "Needs organic matter & fertilizers for better yields"
    },
    {
        id: "laterite",
        name: "Laterite",
        hindi: "लेटराइट",
        regions: "Western Ghats, Eastern Ghats, Meghalaya",
        color: "Red; hardens in sun",
        features: "Poor fertility, acidic, low humus",
        crops: ["Tea", "Coffee", "Cashew", "Rubber", "Rice"],
        emoji: "⛰️",
        note: "Acidic soils — suited for plantation crops"
    },
    {
        id: "desert",
        name: "Desert/Arid",
        hindi: "रेगिस्तानी",
        regions: "Rajasthan, parts of Gujarat, Haryana, Punjab (arid)",
        color: "Sandy to yellowish-brown",
        features: "Low organic matter, poor moisture retention, sometimes saline",
        crops: ["Barley", "Bajra", "Pulses", "Watermelon", "Muskmelon", "Cucumber", "ClusterBean", "PearlMillet"],
        emoji: "🏜️",
        note: "Irrigation and soil amendments needed"
    },
    {
        id: "mountain",
        name: "Mountain/Hill",
        hindi: "पर्वतीय",
        regions: "Himalayan regions, North-East states",
        color: "Varies with altitude",
        features: "Rich in humus but thin; slopes require terraces",
        crops: ["Tea", "Coffee", "Spices", "Apple", "Orange", "Wheat", "Rice", "Maize", "Rubber"],
        emoji: "🌲",
        note: "Good for horticulture and plantation crops"
    },
    {
        id: "saline",
        name: "Saline/Alkaline",
        hindi: "लवणीय/क्षारीय",
        regions: "Drier parts of UP, Bihar, Rajasthan, Punjab, Haryana, Maharashtra",
        color: "White crust in severe cases",
        features: "Infertile due to salts; reclamation required",
        crops: ["Rice", "Wheat", "Barley"],
        emoji: "🧂",
        note: "Requires reclamation and gypsum application"
    },
    {
        id: "peaty",
        name: "Peaty/Marshy",
        hindi: "पीटी/दलदली",
        regions: "Kerala, West Bengal, Odisha, coastal areas",
        color: "Dark blackish",
        features: "High moisture & humus, acidic",
        crops: ["Rice", "Jute", "Lentil", "Khesari", "WaterSpinach", "Berseem", "Wheat_Peaty"],
        emoji: "💧",
        note: "High organic matter — good for rice, jute"
    }
];

export const seasonsInfo = {
    kharif: { months: "June - October", hindi: "खरीफ (जून - अक्टूबर)" },
    rabi: { months: "November - April", hindi: "रबी (नवंबर - अप्रैल)" },
    zaid: { months: "March - June", hindi: "जायद (मार्च - जून)" }
};

export function getSoilRegions(soilId) {
    const soil = soils.find(s => s.id === soilId);
    return soil ? soil.regions : "Regions not specified.";
}