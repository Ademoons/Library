const addBookBtn = document.getElementById("addBookBtn").addEventListener("click", addBookToLibrary);

let myLibrary = [];

class Book {
    constructor (title, author, pages, status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
        this.info = function() {
            return title + ' by ' + author + ', ' + pages + ' pages.';        
        }
    }
    get title() {
        return this._title;
    }
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
    get status() {
        return this._status;
    }    
    set title(value1) {
        this._title = value1;
    }
    set author(value2) {
        this._author = value2;
    }
    set pages(value3) {
        this._pages = value3;
    }
    set status(value4) {
        this._status = value4;
    }
}

// adds to library array

function addBookToLibrary() {
    checkForm()
    let title = document.getElementById("name").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let status;
    if (document.getElementById("status").checked) {
        status = true;
    } else {
        status = false;
    }
    let newBook = new Book(title, author, pages, status);
    myLibrary.push(newBook);
    renderBook(newBook);
}

// creates extra div and adds text onto library

function renderBook(newBook) {
    let newBookContainer = document.createElement('div');
//    newBookContainer.className = "newBooks";
    newBookContainer.id = "newBooks";
    newBookContainer.setAttribute('class', myLibrary.indexOf(newBook));
    document.getElementById("library").appendChild(newBookContainer);
    newBookContainer.innerHTML = myLibrary[myLibrary.indexOf(newBook)].info();
 //   newBookContainer.innerHTML = newBook.info();

//    let statusToggleContainer = document.createElement('div');
    let statusToggle = document.createElement('button');
    newBookContainer.appendChild(statusToggle);

//    document.getElementById("newBooks").appendChild(statusToggleContainer);

    statusToggle.className = "btn";
    if (newBook.status === false) {
        statusToggle.textContent = 'Not Read';
        statusToggle.style.backgroundColor = 'crimson';
    } else {
        statusToggle.textContent = 'Read';
        statusToggle.style.backgroundColor = 'green';
        console.log('klang?');
    }

    statusToggle.addEventListener("click", () => {
        newBook.status = !newBook.status;
        if (newBook.status === false) {
            statusToggle.textContent = 'Not Read';
            statusToggle.style.backgroundColor = 'crimson';
        } else {
            statusToggle.textContent = 'Read';
            statusToggle.style.backgroundColor = 'green';
            console.log('klang?');
        }
        
        console.log('klang?');

    });

//    let deleteBtnContainer = document.createElement('TD');
//    document.getElementById("newBooks").appendChild(deleteBtnContainer);
    let deleteBtn = document.createElement('button');
    newBookContainer.appendChild(deleteBtn);
    deleteBtn.className = "btn";
    deleteBtn.appendChild(document.createTextNode("Delete Book"));
    deleteBtn.addEventListener("click", () => {
        myLibrary.splice(myLibrary.indexOf(newBook), 1);
        clearLibrary();
        displayLibrary();
    });


    newBookContainer.appendChild(statusToggle);
    newBookContainer.appendChild(deleteBtn);
}

function clearLibrary() {
    const library = document.getElementById("library");
    library.innerHTML = "";
}

// renders library looping through array

function displayLibrary() {
    myLibrary.forEach(book => {
        console.log(book);
        renderBook(book);
    });
}

// checks if true or false and turn to read or unread

function checkStatus(status) {
    if (status.checked === true) {
        status = 'read';
    } else {
        status = 'unread';
    }
    return status;
}

function checkForm() {
    if (
        document.getElementById("name").value == "" ||
        document.getElementById("author").value == "" ||
        document.getElementById("pages").value == ""
        )
    {
        alert('Please fill out all fields');
        return false;
    }

    return true;
}

// HOW DO I PASS THE PARAMETER

function toggleRead(newBook) {
    if (status.checked == true) {
        status = 'unread';
    } 
    else if (status.checked == false) {
        status = 'read';
    }
    return status;    
}

// how to select which one
/*
function removeBook(){
    const books = document.getElementById("newBooks");
    books.remove();
    newBookContainer.innerHTML = myLibrary[myLibrary.indexOf(newBook)].info();

    console.log('klang?');
}


function removeBook(thisBook){
    myLibrary.splice(thisBook, thisBook + 1);
    console.log('klang?');
}*/




let test = new Book('The Hobbit', 'JRR Tolkien', 295, false);
let test2 = new Book('Status YES working', 'JRR Tolkien', 123, true);
let test3 = new Book('The Hobbit', 'JRR Tolkien', 333, false);

myLibrary.push(test);
myLibrary.push(test2);
myLibrary.push(test3);

displayLibrary();