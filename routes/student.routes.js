const express = require('express');
const router = express.Router();
const {postStudent,getStudents} = require('../controller/student.controller.js');

router.post('/', function(req,res){
    postStudent(req,res);
});

router.get('/', (req,res)=>{
    getStudents(req,res);
});




module.exports = router;