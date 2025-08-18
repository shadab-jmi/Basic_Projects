const notesContainer = document.querySelector('.notes-container');
const addNoteButton = document.querySelector('.add-note');
const deleteBtn = document.querySelector('.delete')

let notes = document.querySelectorAll('.input-box')

function loadNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || '';
}

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML)
}

addNoteButton.addEventListener('click', () => {
    let p = document.createElement('p')
    let img = document.createElement('img')
    p.classList.add('input-box')
    p.setAttribute('contenteditable', 'true')
    img.src = 'images/delete.png'
    notesContainer.appendChild(p).appendChild(img);
})

notesContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove()
        updateStorage()
    }
    else
        if (e.target.tagName === 'P') {
            let notes = document.querySelectorAll('.input-box')
            notes.forEach(note => {
                note.addEventListener('input', updateStorage)
            })
        }
})

loadNotes();