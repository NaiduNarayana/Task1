document.getElementById('lead-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to handle validation first

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const dealSize = parseFloat(document.getElementById('deal-size').value);
    const location = document.getElementById('location').value;

    // Check for incomplete fields
    if (!name || !email || !phone || isNaN(dealSize) || !location) {
        document.getElementById('error-message').classList.remove('hidden');
        document.getElementById('success-message').classList.add('hidden');
        return; // Stop the process if fields are incomplete
    }

    // Hide error message if all fields are filled
    document.getElementById('error-message').classList.add('hidden');

    // Determine if it's a high-value lead (e.g., deal size > 100000)
    const isHighValue = dealSize > 100000;
    
    if (isHighValue) {
        alert("High-value lead! Prioritize follow-up.");
    }

    // Simulate time zone handling (assuming the location provided is a city)
    const leadTimeZone = getTimeZone(location);
    if (leadTimeZone === 'After Hours') {
        alert("This lead is outside business hours. Follow up tomorrow.");
    } else {
        alert("Lead submitted successfully! A follow-up will be sent soon.");
    }

    // Show success message
    document.getElementById('success-message').classList.remove('hidden');
});

// A simple function to simulate getting the time zone based on location (city).
// In a real-world case, you would use a geolocation API to determine this.
function getTimeZone(location) {
    const cityTimeZones = {
        'New York': 'Eastern Time',
        'Los Angeles': 'Pacific Time',
        'London': 'GMT',
        'Tokyo': 'Japan Standard Time'
    };

    // Check if city is in our list (simulate time zone logic)
    const timeZone = cityTimeZones[location];
    const currentHour = new Date().getHours();

    // Simulate "after hours" check (e.g., 9 AM to 6 PM are business hours)
    if (currentHour < 9 || currentHour > 18) {
        return 'After Hours';
    }

    return timeZone || 'Unknown Time Zone';
}