const searchInput = document.getElementById("searchCandidate");
const candidates = document.querySelectorAll(".candidate-card");

searchInput.addEventListener("input", function () {

    const searchText = searchInput.value.toLowerCase();

    candidates.forEach(function (candidate) {

        const candidateText = candidate.innerText.toLowerCase();

        if (candidateText.includes(searchText)) {
            candidate.style.display = "flex";
        } else {
            candidate.style.display = "none";
        }

    });

});
function viewProfile(name) {
    if (name === "Arun Kumar") {
        window.location.href = "candidate-profile.html";
    }
}