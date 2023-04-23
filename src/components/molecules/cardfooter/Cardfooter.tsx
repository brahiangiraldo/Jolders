import { CardfooterProps } from './CardfooterProps'
import './cardfooter.scss'

const Cardfooter = ({ daysRemain, investors, founded }: CardfooterProps) => {
  return (
	<section className='cardsfooter'>
	<section>
	<div className='headCard'>{daysRemain}</div>
	<div className='cardbody'>Days Remain</div>
	</section>

	<section>
	<div className='headCard'>{investors}</div>
    <div className='cardbody'>Inversores</div>
	</section>

	<section>
	<div className='headCard'>{founded}</div>
	<div className='cardbody'>Funded</div>
	</section>
	</section>
  )
}

export default Cardfooter