let express = require('express');
let router = express.Router();

const { models } = require('orm');
const { callHunter } = require('esb_hunter');

router.get('/',(req,res)=>{
    res.send({
        message:'success'
    })
});

router.get('/hunter',async(req,res)=>{
    console.debug('calling hunter service');
    let result  = await models.customer_info.findAll({});
    res.send(result);
})

module.exports = router;