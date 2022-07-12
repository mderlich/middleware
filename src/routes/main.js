// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Middleware Require ************
const adminMiddleware = require("../middlewares/adminMiddleware");

// ************ Controller Require ************
const {
    index,
    index2,
    index3,
    login
    
} = require('../controllers/mainController');

// middleware de apliacion global pero no se indica la global
router.get('/', index); 
router.get('/services', index2); 
router.get('/services/design', index3); 

// middleware de apliacion local (se indica middleware)
router.get("/admin", adminMiddleware, login);

module.exports = router;