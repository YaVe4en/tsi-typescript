import { Button } from "../components/Button"
import { Input } from "../components/Input"

const Home = () => {
	return (
		<div>
			<div className="">Button</div>
			<div className="">Size</div>
			<Button size="small">Small</Button>
			<Button size="medium">Medium</Button>
			<Button size="large">Large</Button>
			<div className="">Color</div>
			<Button color="primary">Primary</Button>
			<Button color="secondary">Secondary</Button>

			<div className="">Input</div>
			<Input placeholder="Input" />
		</div>
	)
}

export default Home
