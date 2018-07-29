const {Router} = require('express')
const router = Router()


const region = require('./region')
router.use(region);
const login = require('./login')
router.use(login)
const swiper = require('./swiper')
router.use(swiper)

module.exports = router;