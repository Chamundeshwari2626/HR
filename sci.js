document.getElementById('resumeForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const name = document.getElementById('applicantName').value;
    const applicantEmail = document.getElementById('applicantEmail').value;
    const opportunityId = document.getElementById('opportunityId').value;
    const resume = document.getElementById('resume').files[0];

    if (opportunityId && applicantEmail && resume) {
        alert(`Resume submitted successfully!\nName: ${applicantName}\nApplicant Email: ${applicantEmail}\nOpportunity ID: ${opportunityId}`);
        document.getElementById('resumeForm').reset(); // Reset the form
    } else {
        alert('Please fill all the fields and upload a resume.');
    }
});
document.getElementById('generateReport').addEventListener('click', function () {
    const reportOutput = document.getElementById('reportOutput');
    const data = [
        { name: 'Alice', email: 'alice@example.com', status: 'Shortlisted' },
        { name: 'Bob', email: 'bob@example.com', status: 'Rejected' },
        { name: 'Charlie', email: 'charlie@example.com', status: 'Selected' }
    ];
    let reportHTML = '<h3>Applicant Report</h3><table><tr><th>Name</th><th>Email</th><th>Status</th></tr>';
    data.forEach(item => {
        reportHTML += `<tr><td>${item.name}</td><td>${item.email}</td><td>${item.status}</td></tr>`;
    });
    reportHTML += '</table>';

    reportOutput.innerHTML = reportHTML;
});
