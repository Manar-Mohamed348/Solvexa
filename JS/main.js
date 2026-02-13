const Exams = document.querySelectorAll("header nav .links .divider a")[0];
const ExamResult = document.querySelectorAll("main .container2 .notification .notifi .description p span")[0];
const teacherDetails = document.querySelectorAll("main .teachersDetails .teachers .teacher .details button")[1];
Exams.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "../HTML/exams.html";
});
ExamResult.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "../HTML/examResult.html";
})
teacherDetails.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "../HTML/teacher.html";
})