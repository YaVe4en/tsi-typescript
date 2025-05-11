import { useState } from "react"
import { Button } from "../components/Button"
import { Modal } from "../components/Modal"
import { Input } from "../components/Input"

const initData = [
	{ title: "Пост 1", body: "Содержание поста 1" },
	{ title: "Пост 2", body: "Содержание поста 2" },
	{ title: "Пост 3", body: "Содержание поста 3" },
	{ title: "Пост 4", body: "Содержание поста 4" },
	{ title: "Пост 5", body: "Содержание поста 5" },
]

const Blog = () => {
	const [newPost, setNewPost] = useState({ title: "", body: "" })
	const [data, setData] = useState(initData)
	const [isModalOpen, setIsModalOpen] = useState(false)

	const addPost = () => {
		setData([...data, newPost])
	}

	return (
		<>
			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
				<div className="flex flex-col gap-3">
					<div className="text-2xl font-semibold">Создание поста</div>

					<Input
						value={newPost.title}
						onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
						placeholder="Название поста"
						label="Название поста"
					/>

					<Input
						value={newPost.body}
						onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
						placeholder="Содержание поста"
						label="Содержание поста"
					/>

					<Button
						onClick={() => {
							addPost()
							setIsModalOpen(false)
							setNewPost({ title: "", body: "" })
						}}
					>
						Создать
					</Button>
				</div>
			</Modal>
			<div className="flex flex-col gap-6">
				<div className="flex flex-row justify-between">
					<div className="text-2xl font-bold">Блог</div>

					<Button
						onClick={() => {
							setIsModalOpen(true)
						}}
					>
						Добавить
					</Button>
				</div>

				<div className="grid grid-cols-1 gap-5">
					{data.map((post, index) => (
						<div
							key={index}
							className="p-2 border rounded-lg flex flex-col gap-3"
						>
							<div className="font-semibold">{post.title}</div>
							<div className="">{post.body}</div>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default Blog
