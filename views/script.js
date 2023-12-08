function postStudent(student) {
    $.ajax({
        url: '/api/student',
        type: 'POST',
        data: student,
        success: (result) => {
            if (result.statusCode === 200) {
                alert('student posted');
                location.reload();
            }
        }
    });
}

const formSumitted = () => {
    let formData = {};
    formData.name = $('#name').val();
    formData.email = $('#email').val();
    formData.course = $('#course').val();
    formData.country = $('#country').val();
    formData.currentAdreess = $('#currentAdreess').val();
    formData.studentId = $('#studentId').val();


    console.log(formData);
    postStudent(formData);
}
const addStudents = (items) => {
    items.forEach((item,i) => {
        let itemToAppend = `<tr>
        <th scope="row">${i+1}</th>
        <td>${item.name}</td>
        <td>${item.studentId}</td>
        <td>${item.email}</td>
        <td>${item.course}</td>
        <td>${item.country}</td>
        <td>${item.currentAdreess}</td>
    </tr>`;
        $("#table-section").append(itemToAppend)
    });
}
function getAllStudents() {
    $.get('/api/student',(result)=>{
        if (result.statusCode === 200) {
            console.log(result)
            addStudents(result.data);
        }
    });
}
$(document).ready(function () {
    $('#formSubmit').click((e) => {
        e.preventDefault()
        formSumitted();
    });
    getAllStudents();

});


