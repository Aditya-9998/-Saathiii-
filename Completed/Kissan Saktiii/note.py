print('Adi')

#for Shutdown

import os
os.system("shutdown /s /t 0");



'''


Based on our conversation and the code you've provided, I've understood the following about your "Kisan Saathii" advisory page:
🔹 Next Steps According to Pending Work
1. Expand Dataset (crops.js)

Goal: Har crop ke liye wheat jaisa full structured data likhna.

Action:

Copy wheat ka template.

Dusre crops (Paddy, Maize, Mustard, Cotton, Sugarcane, etc.) ke liye fertilizers, pesticides, process, yield, profitability add karo.

Abhi partial hai (⏳), tumhe gradually fill karna hai.

📍 Location:
C:\Users\Aditya Kumar\Acadimic\Program\Projects\Completed\Kissan Saktiii\Js\crops.js

2. Step-by-Step Process (Narrative Expansion)

Abhi simple steps likhe ho jaise “Sowing → Irrigation → Harvest”.

Tumhe ise narrative guide banana hai:

👉 Example (Wheat):

Seed Preparation: Treat seeds with Carbendazim 2g/kg.

Sowing: Use seed drill, spacing 20cm.

Weeding: Apply pendimethalin 1L/acre after sowing.

Irrigation: First irrigation at 21 days, then every 20 days.

Harvesting: When grains turn golden yellow.

Storage: Dry properly, store in gunny bags.

Ye detail tum crops.js me process array ke andar line by line daaloge.

3. Profitability & Yield (More Data-Driven)

Abhi bas ₹2000 per quintal ya “20–25 q/acre” likha hai.

Tumhe aur refine karna hai:

Cost of cultivation (₹ per acre).

Gross return (Yield × Market Price).

Net profit.

Isko 2–3 crops pe add karo, baaki later expand karna.

4. Fertilizer Calculator (Future Feature)

Abhi advisory.js me nahi hai.

Tumhe ek form banana hoga jisme user area (acre/hectare) input kare → fertilizer requirement calculate ho.

Example:

If Urea = 50kg/acre
User enters 2 acres
→ Output = 100kg Urea required

5. Localization (Hindi + English Toggle)

Tumne soil aur crop name Hindi me add kiya hai (✅).

Pending = poora content bilingual banana.

Tumko har dataset entry me Hindi field add karna hoga.

Example:

name: "Wheat (गेहूँ)",
hindiName: "गेहूँ",
process: ["भूमि की तैयारी...", "बुवाई...", "सिंचाई..."]

✅ Roadmap Order

Dataset expansion → Wheat ke template use karke dusre crops likhna.

Process steps ko narrative banana.

Yield & Profitability refine karna.

Fertilizer Calculator implement karna.

Localization toggle add karna.





'''