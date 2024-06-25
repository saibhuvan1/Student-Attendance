document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('attendance-form');
    const studentNameInput = document.getElementById('student-name');
    const attendanceTable = document.getElementById('attendance-table').querySelector('tbody');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const studentName = studentNameInput.value.trim();
        if (studentName !== '') {
            addStudentToAttendance(studentName);
            studentNameInput.value = '';
            studentNameInput.focus();
        }
    });

    function addStudentToAttendance(name) {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        const presentCell = document.createElement('td');
        const absentCell = document.createElement('td');

        nameCell.textContent = name;
        presentCell.innerHTML = '<button class="present btn btn-success">Present</button>';
        absentCell.innerHTML = '<button class="absent btn btn-danger">Absent</button>';

        row.appendChild(nameCell);
        row.appendChild(presentCell);
        row.appendChild(absentCell);
        row.classList.add('fade-in');
        attendanceTable.appendChild(row);

        presentCell.querySelector('button').addEventListener('click', function() {
            markAttendance(row, 'present');
        });

        absentCell.querySelector('button').addEventListener('click', function() {
            markAttendance(row, 'absent');
        });
    }

    function markAttendance(row, status) {
        row.classList.remove('present', 'absent', 'slide-in');
        row.classList.add(status, 'slide-in');
    }
});
