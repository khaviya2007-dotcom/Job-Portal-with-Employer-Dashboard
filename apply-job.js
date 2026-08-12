
const urlParams = new URLSearchParams(window.location.search);
const index = parseInt(urlParams.get("index"));

let jobs = JSON.parse(localStorage.getItem("jobs")) || [];
let applications = JSON.parse(localStorage.getItem("applications")) || [];

const job = jobs[index];

if (job) {

    const application = {
        title: job.title,
        location: job.location,
        type: job.type,
        salary: job.salary,
        description: job.description,
        appliedDate: new Date().toLocaleDateString(),
        status: "Pending"
    };

    applications.push(application);

    localStorage.setItem(
        "applications",
        JSON.stringify(applications)
    );

    alert("Application submitted successfully!");

    window.location.href = "applications.html";

} else {

    alert("Job not found!");

    window.location.href = "find-jobs.html";
}