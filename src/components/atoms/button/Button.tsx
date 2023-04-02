import './button.scss'
import { ButtonProps } from './ButtonProps'

const Button = ({ children, type }: ButtonProps) => {
	return (
		<button className="button" type={type}>
			{children}
		</button>
	)
}

export default Button
