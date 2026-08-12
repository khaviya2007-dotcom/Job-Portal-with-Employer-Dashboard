
const applicationList =
    document.getElementById("applicationList");

const searchInput =
    document.getElementById("searchApplication");

const filterButtons =
    document.querySelectorAll(".filter-btn");


let applications =
    JSON.parse(localStorage.getItem("applications")) || [];

let currentFilter = "All";


// Display applications
function displayApplications() {

    applicationList.innerHTML = "";

    const searchText =
        searchInput.value.toLowerCase();


    const filteredApplications =
        applications.filter(function (application) {

            const matchesSearch =
                (application.title || "")
                    .toLowerCase()
                    .includes(searchText) ||

                (application.location || "")
                    .toLowerCase()
                    .includes(searchText);


            const status =
                application.status || "Pending";

            const matchesFilter =
                currentFilter === "All" ||
                status === currentFilter;


            return matchesSearch && matchesFilter;
        });


    if (filteredApplications.length === 0) {

        applicationList.innerHTML = `
            <div class="no-applications">
                <h3>No applications found</h3>
                <p>You have not applied for any jobs yet.</p>
            </div>
        `;

        return;
    }


    filteredApplications.forEach(function (application) {

        const card =
            document.createElement("div");

        card.className = "application-card";


        card.innerHTML = `
            <div class="application-info">

                <h3>
                    ${application.title || "Job"}
                </h3>

                <p class="job-name">
                    ${application.type || "Job"}
                </p>

                <p class="location">
                    📍 ${application.location || "Location not available"}
                </p>

                <p class="salary">
                    💰 ${application.salary || "Salary not specified"}
                </p>

                <p class="applied-date">
                    Applied: ${application.appliedDate || "Today"}
                </p>

            </div>


            <div class="status ${(
                application.status || "Pending"
            ).toLowerCase()}">

                ${application.status || "Pending"}

            </div>


            <button class="view-btn">
                View
            </button>
        `;


        applicationList.appendChild(card);

    });

}


// Search
searchInput.addEventListener(
    "input",
    displayApplications
);


// Filter buttons
filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        currentFilter =
            button.dataset.status;

        displayApplications();

    });

});


// First load
displayApplications();