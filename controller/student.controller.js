const Student  =  require("../model/student.model")

const postStudent = async (req, res) => {
    const student = new Student(req.body)
    let data = await student.save()
    if (data) {
        return res.json({ statusCode: 200, data, message: 'success' });
    }
    next(data)
}

const getStudents = async (req, res) => {
    let data = await Student.find({})
    if (data) {
        return res.json({ statusCode: 200, data, message: 'success' });
    }
    next(data)
}

module.exports =  { postStudent, getStudents }