document.addEventListener('DOMContentLoaded', () => {
    let members = [];

    function renderMembers() {
        const membersTable = document.getElementById('membersTable').getElementsByTagName('tbody')[0];
        membersTable.innerHTML = ''; // Clear existing rows
        members.forEach((member, index) => {
            const row = membersTable.insertRow();
            row.innerHTML = `
                <td>${member.name}</td>
                <td>${member.address}</td>
                <td>${member.phone}</td>
                <td>
                    <button class="btn btn-warning" onclick="editMember(${index})">Edit</button>
                    <button class="btn btn-danger" onclick="deleteMember(${index})">Delete</button>
                </td>
            `;
        });
    }

    // Event listener for the member form submission
    document.getElementById('memberForm').addEventListener('submit', (event) => {
        event.preventDefault();
        const memberId = document.getElementById('memberId').value;
        const memberName = document.getElementById('memberName').value;
        const memberAddress = document.getElementById('memberAddress').value;
        const memberPhone = document.getElementById('memberPhone').value;

        if (memberId) {
            // Update existing member
            members[memberId] = { name: memberName, address: memberAddress, phone: memberPhone };
        } else {
            // Add new member
            members.push({ name: memberName, address: memberAddress, phone: memberPhone });
        }

        document.getElementById('memberForm').reset();
        renderMembers();
    });

    window.editMember = (index) => {
        const member = members[index];
        document.getElementById('memberId').value = index;
        document.getElementById('memberName').value = member.name;
        document.getElementById('memberAddress').value = member.address;
        document.getElementById('memberPhone').value = member.phone;
    };

    window.deleteMember = (index) => {
        members.splice(index, 1);
        renderMembers();
    };

    // Initial example data for members
    members = [
        { name: 'Arun', address: 'Coimbatore', phone: '9876543210' },
        { name: 'Priya', address: 'Madurai', phone: '9567432109' },
        { name: 'Karthik', address: 'Trichy', phone: '9845321098' },
        { name: 'Divya', address: 'Salem', phone: '9447532107' },
        { name: 'Ravi', address: 'Tirunelveli', phone: '9176532106' },
        { name: 'Vijay', address: 'Vellore', phone: '9365432105' },
        { name: 'Lakshmi', address: 'Erode', phone: '9567432104' },
        { name: 'Suresh', address: 'Thanjavur', phone: '9785432103' },
        { name: 'Gayathri', address: 'Kanyakumari', phone: '9876532102' },
        { name: 'Vimal', address: 'Tiruppur', phone: '9543432101' }
    ];

    renderMembers();
});
