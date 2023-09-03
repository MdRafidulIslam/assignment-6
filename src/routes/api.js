const express = require('express')
const router = express.Router();

const titleController = require('../controllers/titleController')
const blogController = require('../controllers/blogController')
const blogDetailsController = require('../controllers/blogDetailsController')
const commentController = require('../controllers/commentController')
const messageController = require('../controllers/messageController')
const portfolioController = require('../controllers/portfolioController')
const productController = require('../controllers/productController')
const profitController = require('../controllers/profitController')
const projectController = require('../controllers/projectController')
const serviceController = require('../controllers/serviceController')




router.get('/create', titleController.create)
router.get('/read', titleController.read)
router.get('/delete', titleController.delete)
router.get('/update', titleController.update)

router.get('/create', blogController.create)
router.get('/read', blogController.read)
router.get('/delete', blogController.delete)
router.get('/update', blogController.update)

router.get('/create', blogDetailsController.create)
router.get('/read', blogDetailsController.read)
router.get('/delete', blogDetailsController.delete)
router.get('/update', blogDetailsController.update)

router.get('/create', commentController.create)
router.get('/read', commentController.read)
router.get('/delete', commentController.delete)
router.get('/update', commentController.update)

router.get('/create', portfolioController.create)
router.get('/read', portfolioController.read)
router.get('/delete', portfolioController.delete)
router.get('/update', portfolioController.update)

router.get('/create', productController.create)
router.get('/read', productController.read)
router.get('/delete', productController.delete)
router.get('/update', productController.update)

router.get('/create', profitController.create)
router.get('/read', profitController.read)
router.get('/delete', profitController.delete)
router.get('/update', profitController.update)

router.get('/create', projectController.create)
router.get('/read', projectController.read)
router.get('/delete', projectController.delete)
router.get('/update', projectController.update)

router.get('/create', serviceController.create)
router.get('/read', serviceController.read)
router.get('/delete', serviceController.delete)
router.get('/update', serviceController.update)



module.exports = router