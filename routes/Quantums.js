const router = require('express').Router();
let Quantums = require('../mongodb/models/quantums.model')

router.route('/').get((req, res)=>{
    Quantums.find().then(Quantums => res.json(Quantums)).catch(err => res.status(400).json('Error: ' + err)) ;
})

router.route('/add').post((req, res) => {
    const subjectName = req.body.subjectName;
    const subjectCode = req.body.subjectCode;
    const quantumsUrl = req.body.quantumsUrl
    const newQuantum = new Quantums({subjectName, subjectCode, quantumsUrl})
    newQuantum.save().then(()=> res.json('Quantum Added!'))
    .catch(err => res.status(400).json('Error: '+ err))
})

module.exports = router