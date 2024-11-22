document.getElementById('leadCaptureForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const companySize = document.getElementById('companySize').value;
    const annualBudget = document.getElementById('annualBudget').value;
    const industry = document.getElementById('industry').value;
    const urgency = document.getElementById('urgency').value;

    // Calculate lead score
    const leadScore = calculateLeadScore(companySize, annualBudget, industry, urgency);

    // Display result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = Your Lead Score: ${leadScore};
});

// Function to calculate lead score based on input criteria
function calculateLeadScore(companySize, annualBudget, industry, urgency) {
    let score = 0;

    // Scoring based on Company Size
    switch (companySize) {
        case '1-50 employees':
            score += 10;
            break;
        case '51-200 employees':
            score += 20;
            break;
        case '201-1000 employees':
            score += 30;
            break;
        case '1000+ employees':
            score += 40;
            break;
    }

    // Scoring based on Annual Budget
    switch (annualBudget) {
        case 'Less than $10,000':
            score += 10;
            break;
        case '$10,000 - $50,000':
            score += 20;
            break;
        case '$50,001 - $100,000':
            score += 30;
            break;
        case 'More than $100,000':
            score += 40;
            break;
    }

    // Scoring based on Industry
    switch (industry) {
        case 'Technology':
            score += 40;
            break;
        case 'Finance':
            score += 30;
            break;
        case 'Healthcare':
            score += 20;
            break;
        case 'Retail':
            score += 10;
            break;
        case 'Other':
            score += 5;
            break;
    }

    // Scoring based on Urgency of Need
    switch (urgency) {
        case 'Immediate (within 1 month)':
            score += 40;
            break;
        case 'Short-term (1-3 months)':
            score += 30;
            break;
        case 'Medium-term (3-6 months)':
            score += 20;
            break;
        case 'Long-term (6+ months)':
            score += 10;
            break;
    }

    return score; // Return the total lead score
}