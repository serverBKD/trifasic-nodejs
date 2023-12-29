/* eslint-disable no-unused-vars */
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import ejs from 'ejs'
import path from 'node:path'
import multer from 'multer'

//. Start Server
const app = express()

//.Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//. Config
dotenv.config({
	path: '.env.local',
})

//. Multer

const storage = multer.diskStorage({
	storage: '/src/public/upload'
})

//. Setting
app.set('PORT', process.env.PORT || 3000)
app.set('view engine', 'ejs')
const __dirname = path.resolve()
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'views')))

//. Routings
app.get('/', (req, res) => {
	return res.json({message:'funciona...'})
})

//. Server Listen
app.listen(app.get('PORT'), () => {
	console.log(
		'Server running on: ',
		'http://127.0.0.1:' +
        app.get('PORT'))
})