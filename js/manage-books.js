document.addEventListener('DOMContentLoaded', () => {
    let books = [];

    function renderBooks() {
        const booksTable = document.getElementById('booksTable').getElementsByTagName('tbody')[0];
        booksTable.innerHTML = ''; // Clear existing rows
        books.forEach((book, index) => {
            const row = booksTable.insertRow();
            row.innerHTML = `
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.genre}</td>
                <td>
                    <button class="btn btn-warning" onclick="editBook(${index})">Edit</button>
                    <button class="btn btn-danger" onclick="deleteBook(${index})">Delete</button>
                </td>
            `;
        });
    }

    // Event listener for the book form submission
    document.getElementById('bookForm').addEventListener('submit', (event) => {
        event.preventDefault();
        const bookId = document.getElementById('bookId').value;
        const bookTitle = document.getElementById('bookTitle').value;
        const bookAuthor = document.getElementById('bookAuthor').value;
        const bookGenre = document.getElementById('bookGenre').value;

        if (bookId) {
            // Update existing book
            books[bookId] = { title: bookTitle, author: bookAuthor, genre: bookGenre };
        } else {
            // Add new book
            books.push({ title: bookTitle, author: bookAuthor, genre: bookGenre });
        }

        document.getElementById('bookForm').reset();
        renderBooks();
    });

    window.editBook = (index) => {
        const book = books[index];
        document.getElementById('bookId').value = index;
        document.getElementById('bookTitle').value = book.title;
        document.getElementById('bookAuthor').value = book.author;
        document.getElementById('bookGenre').value = book.genre;
    };

    window.deleteBook = (index) => {
        books.splice(index, 1);
        renderBooks();
    };

    // Initial example data for books
    books = [
        { title: 'Ponniyin Selvan ', author: 'Kalki Krishnamurthy', genre: 'Historical Fiction' },
        { title: 'Sivagamiyin Sabatham', author: 'Kalki Krishnamurthy', genre: 'Historical Fiction' },
        { title: 'Parthiban Kanavu', author: 'Kalki Krishnamurthy', genre: 'Historical Fiction' },
        { title: 'Kadal Pura', author: 'Sandilyan', genre: 'Historical Fiction' },
        { title: 'Mannan Magal', author: 'Sandilyan', genre: 'Historical Fiction' },
        { title: 'Yavana Rani', author: 'Sandilyan', genre: 'Historical Fiction' },
        { title: 'Kaneerum Kinavum', author: 'Jayakanthan', genre: 'Literary Fiction' },
        { title: 'Sila Nerangalil Sila Manithargal', author: 'Jayakanthan', genre: 'Realistic Fiction' },
        { title: 'Mogamul', author: 'Thi. Janakiraman', genre: 'Literary Fiction' },
        { title: 'Marappasu', author: 'Thi. Janakiraman', genre: 'Literary Fiction' }

    ];

    renderBooks();
});
