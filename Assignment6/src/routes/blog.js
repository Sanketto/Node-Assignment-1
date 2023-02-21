const router = require('express').Router();
const { Schema } = require('mongoose');
const Blog = require('../models/Blog')

// Your routing code goes here


router.get('/blog',(req,res)=>{
    const {page, search} = req.query;
   Blog.find({topic: search},(err, foundBlog)=>{    
    if(err) console.log(err);
    else  {
        res.send({
        status: (foundBlog.length>0)?"success" : 'failed',
        result: (foundBlog.length>0)? foundBlog : 'not found'
    });
}
   }).limit(5).skip((page-1) * 5)
})

router.post('/blog', (req, res)=>{
    const {topic, description, posted_at, posted_by} = req.body;
    Blog.create({
        topic: topic,
        description: description,
        posted_at: posted_at,
        posted_by: posted_by
    },(err, newBlog)=>{
        if(err) console.log(err);
        else {
            newBlog.save();
            res.json({status: 'success',
                result: newBlog
            })
        }
    })
    
})

router.put('/blog/:topic',(req, res)=>{
    const {description, posted_at, posted_by} = req.body;
    Blog.findOneAndUpdate({topic: req.params.topic},
        {
            description: description,
            posted_at: posted_at,
            posted_by: posted_by
        },{returnOriginal: false},(err, updBlog)=>{
            if(err) {
                console.log(err);
            return
        }
            
            res.send({
                status: (updBlog)?'success' : 'failed',
                result: (updBlog)?updBlog : 'not found'
            })})
})

router.delete('/blog/:topic',(req, res)=>{
    const {topic} = req.params;
    Blog.findOneAndDelete({topic: topic},(err, deletedBlog)=>{
        if(err) console.log(err);
        else{
            res.send({
                status: (deletedBlog)? 'success' : 'failed',
                result: (deletedBlog)? deletedBlog : 'not found'
            })
        }
    })
})


module.exports = router;