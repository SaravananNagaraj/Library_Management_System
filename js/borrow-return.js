document.addEventListener('DOMContentLoaded', () => {
    let members = [];
    let books = [];
    let borrowedBooks = [];

    function renderBorrowedBooks() {
        const borrowedBooksTable = document.getElementById('borrowedBooksTable').getElementsByTagName('tbody')[0];
        borrowedBooksTable.innerHTML = ''; // Clear existing rows
        borrowedBooks.forEach((entry) => {
            const row = borrowedBooksTable.insertRow();
            row.innerHTML = `
                <td>${entry.memberName}</td>
                <td>${entry.bookTitle}</td>
                <td>Borrowed</td>
            `;
        });
    }

    function populateDropdowns() {
        const memberSelects = document.querySelectorAll('select[id$="Member"]');
        const bookSelects = document.querySelectorAll('select[id$="Book"]');

        memberSelects.forEach(select => {
            members.forEach(member => {
                const option = new Option(member.name, member.name);
                select.add(option);
            });
        });

        bookSelects.forEach(select => {
            books.forEach(book => {
                const option = new Option(book.title, book.title);
                select.add(option);
            });
        });
    }

    // Event listener for borrow form submission
    document.getElementById('borrowForm').addEventListener('submit', (event) => {
        event.preventDefault();
        const memberName = document.getElementById('borrowMember').value;
        const bookTitle = document.getElementById('borrowBook').value;

        borrowedBooks.push({ memberName, bookTitle });
        document.getElementById('borrowForm').reset();
        renderBorrowedBooks();
    });

    // Event listener for return form submission
    document.getElementById('returnForm').addEventListener('submit', (event) => {
        event.preventDefault();
        const memberName = document.getElementById('returnMember').value;
        const bookTitle = document.getElementById('returnBook').value;

        borrowedBooks = borrowedBooks.filter(entry => !(entry.memberName === memberName && entry.bookTitle === bookTitle));
        document.getElementById('returnForm').reset();
        renderBorrowedBooks();
    });

    // Initial example data for members and books
    members = [
        { name: 'Arun' },
        { name: 'Priya' },
        { name: 'Karthik' },
        { name: 'Ravi' },
        { name: 'Lakshmi' }
    ];
    books = [
        { title: 'Ponniyin Selvan ' },
        { title: 'Sivagamiyin Sabatham' },
        { title: 'Parthiban Kanavu' },
        { title: 'Kadal Pura' },
        { title: 'Mannan Magal' },
        { title: 'Yavana Rani' },
        { title: 'Kaneerum Kinavum' },
        { title: 'Sila Nerangalil Sila Manithargal' },
        { title: 'Mogamul' },
        { title: 'Marappasu' }
    ];

    // Populate dropdowns and render initial borrowed books
    populateDropdowns();
    renderBorrowedBooks();
});
