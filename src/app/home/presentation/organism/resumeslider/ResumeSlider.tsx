import { ResumeSliderProps } from './ResumeSliderProps'
import './resumeSlider.scss'


const ResumeSlider = ({ title, name, flag, head }: ResumeSliderProps) => {
	return (
		<section className='containertResumeSlider'>
			<span className='resumetTitle'>{ title }</span>
			<div className='resumetname'>{ name }{flag}</div>
			<div className='resumehead'>{head}</div>
		</section>
	)
}

export default ResumeSlider