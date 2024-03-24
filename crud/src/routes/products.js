// ************ Require's ************
const express = require('express');
const router = express.Router();
const path = require('path');

const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/products/')
    },
    filename: function (req, file, cb) {
    //   cb(null, 'img-' + file.originalname)
        cb(null, 'img-' + req.body.name + path.extname(file.originalname))
    }
  })
const upload = multer({ storage: storage })


// ************ Controller Require ************
const productsController = require('../controllers/productsController');


/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

// /*** CREATE ONE PRODUCT ***/ 
router.get('/create', productsController.create); 
router.post('/', upload.single('imageFile'), productsController.store); 


// /*** GET ONE PRODUCT ***/ 
router.get('/:id/', productsController.detail); 

// /*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productsController.edit); 
router.put('/', productsController.update); 


// /*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productsController.destroy); 


module.exports = router;
