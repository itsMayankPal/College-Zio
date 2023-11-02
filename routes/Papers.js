const router = require('express').Router();
let Papers = require('../mongodb/models/papers.model')

router.route('/').get((req, res)=>{
    Papers.find().then(Papers => res.json(Papers)).catch(err => res.status(400).json('Error: ' + err)) ;
})

router.route('/add').post((req, res) => {
    const subjectName = req.body.subjectName;
    const subjectCode = req.body.subjectCode;
    const papersUrl = req.body.papersUrl
    const newPaper = new Papers({subjectName, subjectCode, papersUrl})
    newPaper.save().then(()=> res.json('Paper Added!'))
    .catch(err => res.status(400).json('Error: '+ err))
})

module.exports = router