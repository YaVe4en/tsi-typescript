import type { FC, HTMLAttributes } from "react"

interface IInputProps extends HTMLAttributes<HTMLInputElement> {
	label?: string
}

export const Input: FC<IInputProps> = ({ label = "", ...rest }) => {
	return (
		<div className="flex flex-col gap-1">
			<div className="font-semibold">{label}</div>

			<input
				className="p-2 rounded-md border border-gray bg-transparent w-full"
				{...rest}
			/>
		</div>
	)
}
