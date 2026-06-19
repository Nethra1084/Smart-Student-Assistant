function addAssignment() {

    let name =
        document.getElementById("assignmentName").value;

    let date =
        document.getElementById("dueDate").value;

    let list =
        document.getElementById("assignmentList");

    let item =
        document.createElement("p");

    item.innerText =
        name + " | Due: " + date + " | Pending";

    list.appendChild(item);

    document.getElementById("assignmentName").value = "";
    document.getElementById("dueDate").value = "";
}