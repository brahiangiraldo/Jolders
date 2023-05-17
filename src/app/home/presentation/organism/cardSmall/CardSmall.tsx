import { CardSmallProps} from './CardSmallProps'
import './cardSmall.scss'

const CardSmall = ({imageSrc}: CardSmallProps) => {

	return (
		
		<section>
				<img
			className="cardSmall"
			src={imageSrc}
			alt={`image CardSmall`}
				/>	
		</section>
	)
}

export default CardSmall
