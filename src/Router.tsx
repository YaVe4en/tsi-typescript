import Home from "./pages/Home"
import About from "./pages/About"
import Blog from "./pages/Blog"
import Layout from "./Layout"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<Home />}></Route>
					<Route path="/about" element={<About />}></Route>
					<Route path="/blog" element={<Blog />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default Router
