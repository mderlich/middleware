// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Middleware Require ************
const logMiddleware = require("../middlewares/userLogs");
const adminMiddleware = require("../middlewares/adminMiddleware");

// ************ Controller Require ************
const {
    index,
    index2,
    index3,
    login
    
} = require('../controllers/mainController');


router.get('/', logMiddleware, index); 
router.get('/services', logMiddleware, index2); 
router.get('/services/design', logMiddleware, index3); 
router.get("/admin", adminMiddleware, login);

module.exports = router;