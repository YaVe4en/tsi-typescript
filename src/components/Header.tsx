import { Link } from "react-router-dom"
import { Logo } from "./Logo"

export const Header = () => {
	return (
		<header className="w-full h-16 px-8 py-4 bg-slate-300 items-center flex flex-row gap-6 justify-between">
			<Link to="/">
				<Logo />
			</Link>

			<div className="flex flex-row gap-3 items-center">
				<Link to="/">Главная</Link>
				<Link to="/about">О нас</Link>
				<Link to="/blog">Блог</Link>
			</div>
		</header>
	)
}
