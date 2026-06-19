function saveNote() {

    let note = document.getElementById("noteInput").value;

    let notesList = document.getElementById("notesList");

    let newNote = document.createElement("p");

    newNote.innerText = note;

    notesList.appendChild(newNote);

    document.getElementById("noteInput").value = "";
}