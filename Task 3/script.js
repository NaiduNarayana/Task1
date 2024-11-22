let salesReps = ["Alice", "Bob", "Charlie"];
let repIndex = 0;

document.getElementById("leadForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let comments = document.getElementById("comments").value;

    let assignedRep = salesReps[repIndex];
    repIndex = (repIndex + 1) % salesReps.length;

    let keywords = extractKeywords(comments);

    let followUpReminder = getFollowUpDate(comments);\

    displayLeadDetails(name, email, phone, assignedRep, keywords, followUpReminder);
});

function displayLeadDetails(name, email, phone, assignedRep, keywords, followUpReminder) {
    document.getElementById("leadDetails").innerHTML = `
        <h3>Lead Details</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Assigned Sales Rep:</strong> ${assignedRep}</p>
        <p><strong>Keywords Extracted:</strong> ${keywords.join(", ")}</p>
    `;

    document.getElementById("followUpReminder").innerHTML = `
        <h3>Follow-Up Reminder</h3>
        <p><strong>Follow-up scheduled for:</strong> ${followUpReminder}</p>
    `;
}

function extractKeywords(comments) {
    const predefinedKeywords = ["urgent", "pricing", "high-value", "premium"];
    let keywordsFound = [];

    predefinedKeywords.forEach(keyword => {
        if (comments.toLowerCase().includes(keyword)) {
            keywordsFound.push(keyword);
        }
    });

    return keywordsFound;
}

function getFollowUpDate(comments) {
    const today = new Date();
    let followUpDate = new Date(today);

    if (comments.toLowerCase().includes("urgent")) {
        followUpDate.setDate(today.getDate() + 1); 
    } else if (comments.toLowerCase().includes("premium")) {
        followUpDate.setDate(today.getDate() + 3); 
    } else {
        followUpDate.setDate(today.getDate() + 7); 
    }

    return followUpDate.toLocaleDateString();
}
