function calculateGPA() {
    let s1 = Number(document.getElementById("sub1").value);
    let s2 = Number(document.getElementById("sub2").value);
    let s3 = Number(document.getElementById("sub3").value);

    let average = (s1 + s2 + s3) / 3;

    let gpa = (average / 10).toFixed(2);

    document.getElementById("result").innerText =
        "Your GPA is: " + gpa;
}
function calculateAttendance() {

    let total = Number(document.getElementById("totalClasses").value);

    let attended = Number(document.getElementById("attendedClasses").value);

    let percentage = (attended / total) * 100;

    let message = "";

    if (percentage >= 75) {
        message = "✅ Eligible for Exam";
    } else {
        message = "❌ Attendance Below 75%";
    }

    document.getElementById("attendanceResult").innerText =
        "Attendance: " + percentage.toFixed(2) + "%\n" + message;

}