const mongoose = require('mongoose');

const Student = mongoose.model('student', {
    name: String,
    email:String,
    course: String,
    country: String,
    currentAdreess: String,
    studentId: String
});

module.exports =  Student