// Handle Resume Submission
document.getElementById('resume-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const opportunityId = document.getElementById('opportunity-id').value;
    const applicantEmail = document.getElementById('applicant-email').value;
    const resume = document.getElementById('resume').files[0];

    if (opportunityId && applicantEmail && resume) {
        alert(`Resume submitted successfully!\nOpportunity ID: ${opportunityId}\nApplicant Email: ${applicantEmail}`);
        document.getElementById('resume-form').reset(); // Reset the form
    } else {
        alert('Please fill all the fields and upload a resume.');
    }
});

// HR Shortlist Action
document.getElementById('shortlist-btn').addEventListener('click', () => {
    alert('Resume shortlisted! Forwarding to the respective Manager...');
});

// HR Rejection Action
document.getElementById('reject-btn').addEventListener('click', () => {
    const reason = prompt('Please provide a reason for rejection:');
    if (reason) {
        alert(`Applicant rejected. Reason: ${reason}`);
    } else {
        alert('Rejection reason is required!');
    }
});

// Manager Scheduling Interview
document.getElementById('schedule-interview').addEventListener('click', () => {
    const interviewDate = prompt('Enter the interview date (YYYY-MM-DD):');
    if (interviewDate) {
        alert(`Interview scheduled successfully for ${interviewDate}!`);
    } else {
        alert('Interview date is required!');
    }
});

// Manager Assign Interviewer
document.getElementById('assign-interviewer').addEventListener('click', () => {
    const interviewerName = prompt('Enter the name of the interviewer:');
    if (interviewerName) {
        alert(`Interviewer assigned successfully: ${interviewerName}`);
    } else {
        alert('Interviewer name is required!');
    }
});

// Generate Excel Report
document.getElementById('download-excel').addEventListener('click', () => {
    alert('Excel report generated and downloaded!');
});

// Display Graphs
document.getElementById('view-graphs').addEventListener('click', () => {
    const graphContainer = document.getElementById('graph-container');
    graphContainer.innerHTML = `
        <p><strong>Graphical Data</strong></p>
        <canvas id="data-chart" width="400" height="200"></canvas>
    `;
    alert('Graphical data displayed!');
});

