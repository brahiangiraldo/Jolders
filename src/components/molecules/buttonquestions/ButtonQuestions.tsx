import { ButtonQuestionsProps } from './ButtonQuestion.Props'
import './buttonQuestions.scss'

const ButtonQuestions = ({ text, txtColor, bgColor }: ButtonQuestionsProps) => {
	const buttonStyle = {
		backgroundColor: bgColor,
		color: txtColor
	}

	return <button className="buttonquestions">{text}</button>
}

export default ButtonQuestions
