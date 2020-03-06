const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
   res.status(200).json({
       message : 'Handling GET requests to /products'
   });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message : 'Handling POST requests to /products'
    });
 });

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if(id === 'special'){
        res.status(200).json({
            message : 'You discovered the special ID',
            productId : id
        });
    }else{
        res.status(200).json({
            message : 'You passed an ID'
        });
    }
});

router.patch('/:produectId', (req, res, next) => {
    res.status(200).json({
        message : 'Update product!'
    });
 });

router.delete('/:produectId', (req, res, next) => {
    res.status(200).json({
        message : 'Deleted product!'
    });
});
 
module.exports = router;