// =========================================
// JOBFINDER - POST JOB
// =========================================

const jobForm = document.getElementById("jobForm");

jobForm.addEventListener("submit", function (e) {

    e.preventDefault();

    // Get job details
    const job = {
        title: document.getElementById("jobTitle").value,
        location: document.getElementById("location").value,
        type: document.getElementById("jobType").value,
        salary: document.getElementById("salary").value,
        description: document.getElementById("description").value,
        postedDate: new Date().toLocaleDateString()
    };

    // Get existing jobs
    let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

    // Add new job
    jobs.push(job);

    // Save jobs
    localStorage.setItem("jobs", JSON.stringify(jobs));

    // Success message
    alert("Job posted successfully!");

});