document.getElementById('search-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const destination = document.getElementById('destination').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    const travelers = document.getElementById('travelers').value;

    // Use fetch to make an API call to the backend
    fetch('/api/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ destination, startDate, endDate, travelers })
    }).then(response => response.json()).then(data => {
        console.log(data);
        // Display search results
    }).catch(error => console.error('Error:', error));
});
