// ==========================================
// FIND JOBS
// ==========================================


// Get HTML elements

const jobsList =
    document.getElementById("jobsList");

const searchInput =
    document.getElementById("searchInput");

const jobTypeFilter =
    document.getElementById("jobTypeFilter");


// Get jobs from localStorage

let jobs =
    JSON.parse(localStorage.getItem("jobs")) || [];


// Initially all jobs are shown

let filteredJobs = [...jobs];


// ==========================================
// DISPLAY JOBS
// ==========================================

function displayJobs() {

    // Clear old jobs

    jobsList.innerHTML = "";


    // If no jobs found

    if (filteredJobs.length === 0) {

        jobsList.innerHTML = `

            <div class="no-jobs">

                <h2>No Jobs Found</h2>

                <p>
                    Try another search or filter.
                </p>

            </div>

        `;

        return;
    }


    // Display every job

    filteredJobs.forEach(function (job, index) {

        const card =
            document.createElement("div");


        card.className =
            "job-card";


        card.innerHTML = `

            <h2>
                ${job.title}
            </h2>


            <span class="job-type">
                ${job.type || job.jobType || ""}
            </span>


            <p class="job-location">
                📍 ${job.location}
            </p>


            <p class="job-salary">
                💰 ${job.salary}
            </p>


            <p class="job-description">
                ${job.description}
            </p>


        
               <a href="job-details.html?index=${index}"
                class="view-btn">
            
                View Details
            </a>

        `;


        jobsList.appendChild(card);

    });

}


// ==========================================
// FILTER JOBS
// ==========================================

function filterJobs() {

    const searchText =
        searchInput.value
            .toLowerCase()
            .trim();


    const selectedType =
        jobTypeFilter.value;


    filteredJobs =
        jobs.filter(function (job) {


            const title =
                (job.title || "")
                    .toLowerCase();


            const location =
                (job.location || "")
                    .toLowerCase();


            const description =
                (job.description || "")
                    .toLowerCase();


            const jobType =
                job.type ||
                job.jobType ||
                "";


            const matchesSearch =

                title.includes(searchText)

                ||

                location.includes(searchText)

                ||

                description.includes(searchText);


            const matchesType =

                selectedType === ""

                ||

                jobType === selectedType;


            return (
                matchesSearch &&
                matchesType
            );

        });


    displayJobs();

}


// ==========================================
// SEARCH EVENT
// ==========================================

searchInput.addEventListener(
    "input",
    filterJobs
);


// ==========================================
// JOB TYPE EVENT
// ==========================================

jobTypeFilter.addEventListener(
    "change",
    filterJobs
);


// ==========================================
// INITIAL DISPLAY
// ==========================================

displayJobs();