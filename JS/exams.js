const Exams = document.querySelectorAll("header nav .links .divider a")[2];
Exams.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "../HTML/main.html";
});