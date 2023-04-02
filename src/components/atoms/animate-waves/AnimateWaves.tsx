import './animateWaves.scss'
import { AnimateWavesProps } from './AnimateWavesProps'

const AnimateWaves = ({
	bgColor,
	colorTransparent_1,
	colorTransparent_2,
	colorTransparent_3
}: AnimateWavesProps) => {
	return (
		<svg
			className="animate-waves"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			viewBox="0 24 150 28"
			preserveAspectRatio="none"
			shapeRendering="auto"
		>
			<defs>
				<path
					id="gentle-wave"
					d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
				/>
			</defs>
			<g className="parallax">
				<use xlinkHref="#gentle-wave" x="48" y="0" fill={colorTransparent_1} />
				<use xlinkHref="#gentle-wave" x="48" y="3" fill={colorTransparent_2} />
				<use xlinkHref="#gentle-wave" x="48" y="5" fill={colorTransparent_3} />
				<use xlinkHref="#gentle-wave" x="48" y="7" fill={bgColor} />
			</g>
		</svg>
	)
}

export default AnimateWaves
