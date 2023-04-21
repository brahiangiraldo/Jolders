import { ButtonAnswerProps } from './ButtonAnswer.Props';
import './buttonAnswer.scss'


const ButtonAnswer = ({ text, txtColor, bgColor,}: ButtonAnswerProps) => {
	const buttonStyle = {

		backgroundColor: bgColor,
		color: txtColor,
	};

	return (
		<button className='buttonAnswer'>{ text }</button>
	);
}

export default ButtonAnswer;
