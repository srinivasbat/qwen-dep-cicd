document.addEventListener('DOMContentLoaded', function() {
    const fetchDataBtn = document.getElementById('fetchData');
    const apiDataDiv = document.getElementById('apiData');

    fetchDataBtn.addEventListener('click', async function() {
        try {
            fetchDataBtn.disabled = true;
            fetchDataBtn.textContent = 'Loading...';
            
            const response = await fetch('/api/data');
            const data = await response.json();
            
            apiDataDiv.innerHTML = `
                <h3>Sample Data:</h3>
                <pre>${JSON.stringify(data, null, 2)}</pre>
            `;
        } catch (error) {
            console.error('Error fetching data:', error);
            apiDataDiv.innerHTML = '<p style="color: red;">Error fetching data</p>';
        } finally {
            fetchDataBtn.disabled = false;
            fetchDataBtn.textContent = 'Fetch Sample Data';
        }
    });

    // Simple animation for features
    const features = document.querySelectorAll('.feature');
    features.forEach((feature, index) => {
        setTimeout(() => {
            feature.style.opacity = '1';
            feature.style.transform = 'translateY(0)';
        }, index * 200);
    });
}); 
