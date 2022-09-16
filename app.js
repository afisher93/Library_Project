class Book {
    
    constructor(title, author, read ){
        this.title = title,
        this.author = author,
        this.read = read
    }
    
}

class Library {
    
    constructor(bookCount, books){
        this.bookCount = bookCount,
        this.books = books
    }

    markRead(id) {

        // If the box is not checked, then disable it
        document.getElementById('checkbox-' + id).disabled = true;
    }

    addBook(){

        // Get the input values
        var titleValue = document.getElementById('title').value;
        var authorValue = document.getElementById('author').value;
        var readValue = document.getElementById('checkbox').checked;
        
        // Make a new book using the values
        var newBook = new Book(titleValue, authorValue, readValue);

        // Select the table
        var table = document.getElementById('table').getElementsByTagName('tbody')[0];

        // Increase the bookCount by 1
        this.bookCount++;

        // Insert a row at the end of table
        var newRow = table.insertRow(-1);
        newRow.id = 'row-' + this.bookCount;

        // Insert new cells
        var titleCell = newRow.insertCell(0);
        var authorCell = newRow.insertCell(1);
        var readCell = newRow.insertCell(2);
        var removeCell = newRow.insertCell(3);

        // Add book information to cells
        titleCell.innerHTML = newBook.title;
        authorCell.innerHTML = newBook.author;
        removeCell.innerHTML = '<button onclick="new Library().removeBook(' + this.bookCount + ')">Remove</button>';

        // If checkbox is checked
        if ( newBook.read == true ){
            readCell.innerHTML = '<input onclick="new Library().markRead(' + this.bookCount + ')" type="checkbox" name="read" id="checkbox-' + this.bookCount + '" checked disabled  />';
        } else {
            readCell.innerHTML = '<input onclick="new Library().markRead(' + this.bookCount + ')" type="checkbox" name="read" id="checkbox-' + this.bookCount + '"/>'
        }

    }

    removeBook(id){
        document.getElementById('row-' + id).remove();
    }

}

// Set button to variable
const addBookBtn = document.getElementById('addBookBtn');

// Add event listener on addBookBtn
addBookBtn.addEventListener('click', function(){
    
    // Stop page from submitting
    event.preventDefault();

    // Get current book count
    var table = document.getElementById('table');

    // Count the number of rows
    var tbodyRowCount = table.tBodies[0].rows.length;
    
    // Run the addBook method
    new Library(tbodyRowCount).addBook();

});