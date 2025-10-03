// js/news_dashboard.js

document.addEventListener('DOMContentLoaded', () => {
    const chartCanvas = document.getElementById('production-chart');
    const graphMessage = document.getElementById('graph-message');
    const stateSelect = document.getElementById('graph-state-select');
    const cropSelect = document.getElementById('graph-crop-select');

    // --- EXPANDED PLACEHOLDER DATA ---
    // Production figures are simulated (in Million Tonnes or similar units)
    const historicalData = {
        // North Indian States
        'UP': {
            'Wheat': [15, 16, 17, 16.5, 18], 
            'Rice': [10, 11, 10.5, 12, 11.5],
            'Sugarcane': [150, 155, 148, 160, 165]
        },
        'PB': {
            'Wheat': [14, 13.5, 14.5, 15, 14.8], 
            'Rice': [11, 11.2, 11.5, 10.9, 11.8],
            'Cotton': [1.2, 1.0, 1.3, 1.1, 1.4]
        },
        'HR': {
            'Wheat': [5.5, 5.6, 5.8, 5.7, 6.0], 
            'Mustard': [0.8, 0.9, 1.0, 1.1, 1.2]
        },

        // Central/Western States
        'MH': {
            'Cotton': [3.5, 4.0, 3.8, 4.2, 4.5],
            'Soybean': [2.1, 2.5, 2.3, 2.6, 2.8],
            'Sugarcane': [85, 90, 82, 95, 98]
        },
        'MP': {
            'Soybean': [5.0, 5.5, 6.0, 5.8, 6.2],
            'Wheat': [6.5, 6.8, 7.0, 7.1, 7.5],
            'Pulses': [3.0, 3.2, 3.5, 3.4, 3.7]
        },
        'GJ': {
            'Cotton': [2.0, 2.2, 2.1, 2.3, 2.5],
            'Groundnut': [1.8, 2.0, 1.9, 2.1, 2.2]
        },

        // Eastern/Southern States
        'WB': {
            'Rice': [14, 14.5, 15, 14.8, 15.2],
            'Pulses': [0.5, 0.6, 0.7, 0.75, 0.8]
        },
        'KA': {
            'Maize': [2.5, 2.8, 3.0, 3.1, 3.3],
            'Coffee': [0.05, 0.06, 0.06, 0.07, 0.07]
        },
        'TN': {
            'Rice': [5.0, 5.2, 5.5, 5.3, 5.6],
            'Sugarcane': [35, 38, 32, 40, 42]
        },
        'AS': {
            'Tea': [0.6, 0.62, 0.65, 0.64, 0.66]
        }
    };
    // ------------------------------------

    function updateProductionGraph() {
        const selectedState = stateSelect.value;
        const selectedCrop = cropSelect.value;

        if (!selectedState || !selectedCrop) {
            graphMessage.textContent = 'Please select both a State and a Crop to view the production trend.';
            if (chartCanvas) chartCanvas.style.display = 'none';
            return;
        }

        const dataPoints = historicalData[selectedState] ? historicalData[selectedState][selectedCrop] : null;

        if (dataPoints) {
            
            // This is where you would call Chart.js to render the graph.
            // Since this is a placeholder, we just update the message with real data:
            graphMessage.textContent = `Data found for ${selectedCrop} in ${selectedState} (2021-2025): [${dataPoints.join(', ')} MT]. Graph visualization is ready once Chart.js is added.`;
            
            // To demonstrate growth/decline (as requested earlier):
            const change = dataPoints[dataPoints.length - 1] - dataPoints[0];
            const trend = change > 0 
                ? `(Overall growth of +${change.toFixed(1)} MT over 5 years. Great!)`
                : `(Overall decline of ${change.toFixed(1)} MT over 5 years. Action needed.)`;
            
            graphMessage.textContent += ' ' + trend;
            if (chartCanvas) chartCanvas.style.display = 'block';

        } else {
            graphMessage.textContent = `No historical data found for ${selectedCrop} in ${selectedState}. Please try another combination.`;
            if (chartCanvas) chartCanvas.style.display = 'none';
        }
    }

    // Attach listeners to controls
    if (stateSelect) stateSelect.addEventListener('change', updateProductionGraph);
    if (cropSelect) cropSelect.addEventListener('change', updateProductionGraph);

    // Initial message display
    updateProductionGraph();
});