import { InputProps } from './InputProps'
import './input.scss'

const Input = ({ onChange, value, placeholder }: InputProps) => {
	return (
		<input
			className="input"
			onChange={onChange}
			value={value}
			placeholder={placeholder}
		/>
	)
}

export default Input
