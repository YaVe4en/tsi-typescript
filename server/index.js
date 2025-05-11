import express from "express"
import cors from "cors"

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

const posts = [
	{ title: "Пост 1", body: "Содержание поста 1" },
	{ title: "Пост 2", body: "Содержание поста 2" },
	{ title: "Пост 3", body: "Содержание поста 3" },
	{ title: "Пост 4", body: "Содержание поста 4" },
	{ title: "Пост 5", body: "Содержание поста 5" },
]

//Метод GET
app.get("/api/data", (req, res) => {
	res.json({ data: posts })
})

app.post("/api/data", (req, res) => {
	let body = req.body

	if (body.title === "") {
		res.status(400)
		res.json({ message: "Название поста обязательно" })
		return
	}
	if (body.body === "") {
		res.status(400)
		res.json({ message: "Содержимое поста обязательно" })
		return
	}

	posts.push(body)
	res.status(201)
	res.json({ message: "Успешно" })
})

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`)
})
