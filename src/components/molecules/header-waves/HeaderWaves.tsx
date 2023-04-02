import { HeaderWavesProps } from './HeaderWavesProps'
import './headerWaves.scss'
import AnimateWaves from '@/components/atoms/animate-waves/AnimateWaves'

const HeaderWaves = ({ children }: HeaderWavesProps) => {
	return (
		<div className="header-waves">
			<div className="inner-header flex">{children}</div>
			<div>
				<AnimateWaves
					bgColor="#ffffff"
					colorTransparent_1="rgba(255,255,255,0.7)"
					colorTransparent_2="rgba(255,255,255,0.5)"
					colorTransparent_3="rgba(255,255,255,0.3)"
				/>
			</div>
		</div>
	)
}

export default HeaderWaves
