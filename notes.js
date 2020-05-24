const noteList = document.querySelector(".sidenav");
const newBtn = document.querySelector(".btn");
const titleBox = document.querySelector("input");
const textBox = document.querySelector("textarea");
const date = document.querySelector("h6");
const noteForm = document.querySelector("form");
const modalElem = document.querySelector(".modal");
const yesBtn = document.querySelector("#yes");

newBtn.addEventListener("click", createNote);
document.addEventListener("DOMContentLoaded", loadSidebar);
document.addEventListener("DOMContentLoaded", function() {
    M.Modal.init(modalElem);
});
noteList.addEventListener("click", selectNote);
noteList.addEventListener("click", deletionPrompt);
titleBox.addEventListener("input", modifyTitle);
textBox.addEventListener("input", modifyText);
yesBtn.addEventListener("click", deleteNote);


function createNote() {
    const time = (new Date()).getTime();
    const newNote = {
        title: "New Note",
        text: null,
        modified: time,
        created: time
    };

    const notes = loadNotesFromLS();
    notes[newNote.created] = newNote;
    localStorage.setItem("notes", JSON.stringify(notes));

    addNoteToSidebar(newNote);
    displayNote(newNote);
}

function loadNotesFromLS() {
    if (localStorage.getItem("notes") === null) {
        return {};
    }
    return JSON.parse(localStorage.getItem("notes"));
}

function addNoteToSidebar(note) {
    const li = document.createElement("li");
    li.className = "collection-item";
    li.id = note.created;

    const div = document.createElement("div");
    div.className = "note-title";
    div.innerText = note.title;
 
    const i = document.createElement("i");
    i.className = "material-icons right delete-item";
    i.innerText = "clear";

    li.appendChild(div);
    li.appendChild(i);
    const children = noteList.children;
    noteList.insertBefore(li, children[children.length - 1]);

    if (div.offsetWidth >= 220) {
        div.innerText = note.title.substring(0, 12) + "...";
    }
}

function displayNote(note) {;
    localStorage.setItem("currentNote", JSON.stringify(note));
    if(note === null || note === undefined) {
        noteForm.style = "display:none;";
        return;
    }
    noteForm.style = "";

    localStorage.setItem("currentNote", JSON.stringify(note));
    
    titleBox.value = note.title;
    textBox.value = note.text;
    updateDate(note);

    M.textareaAutoResize(textBox);
}

function updateDate(note) {
    const modified = new Date(note.modified);
    const created = new Date(note.created);

    const modifiedText = `${modified.getMonth()+1}.${modified.getDate()}.${modified.getFullYear()}`;
    const createdText = `${created.getMonth()+1}.${created.getDate()}.${created.getFullYear()}`;
    const dateText = `Modified: ${modifiedText} Created: ${createdText}`;

    date.innerText = dateText;
}

function loadSidebar() {
    const notes = loadNotesFromLS();
    for (note in notes) {
        addNoteToSidebar(notes[note]);
    }
    let currentNote = localStorage.getItem("currentNote");
    if (currentNote !== "undefined") {
        currentNote = JSON.parse(currentNote);
    } else {
        currentNote = undefined;
    }
    displayNote(currentNote);
}

function selectNote(event) {
    if(event.target.classList.contains("note-title")) {
        const id = event.target.parentElement.id;
        const notes = loadNotesFromLS();
        displayNote(notes[id]);
    }
}

let noteKey;

function deletionPrompt(event) {
    if(event.target.classList.contains("delete-item")) {
        const modalInstance = M.Modal.getInstance(modalElem);
        modalInstance.open();
        const id = event.target.parentElement.id;
        noteKey = id;
    }
}

function deleteNote() {
    const notes = loadNotesFromLS();
    delete notes[noteKey];
    localStorage.setItem("notes", JSON.stringify(notes));

    let deletedNoteLi = document.getElementById(noteKey);
    deletedNoteLi.remove();

    const currentNote = JSON.parse(localStorage.getItem("currentNote"));
    if(noteKey == currentNote.created) {
        const lastNoteKey = Math.max(...Object.keys(notes));
        displayNote(notes[lastNoteKey]);
    }
}

function modifyTitle() {
    const currentNote = JSON.parse(localStorage.getItem("currentNote"));
    if (titleBox.value !== "") {
        currentNote.title = titleBox.value;
    }
    currentNote.modified = (new Date).getTime();
    localStorage.setItem("currentNote", JSON.stringify(currentNote));
    saveNote(currentNote);

    updateDate(currentNote);

    noteLi = document.getElementById(currentNote.created);
    noteLiDiv = noteLi.querySelector(".note-title");
    noteLiDiv.innerText = currentNote.title;
    if (noteLiDiv.offsetWidth >= 220) {
        noteLiDiv.innerText = currentNote.title.substring(0, 12) + "...";
    }
}

function modifyText() {
    const currentNote = JSON.parse(localStorage.getItem("currentNote"));
    currentNote.text = textBox.value;
    currentNote.modified = (new Date).getTime();
    localStorage.setItem("currentNote", JSON.stringify(currentNote));
    saveNote(currentNote);

    updateDate(currentNote);
}

function saveNote(note) {
    const notes = loadNotesFromLS();
    notes[note.created] = note;
    localStorage.setItem("notes", JSON.stringify(notes));
}
