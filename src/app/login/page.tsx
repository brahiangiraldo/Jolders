import './login.scss'
import React from 'react'
import Form from './presentation/organism/form/Form'
import HeaderWaves from '@/components/molecules/header-waves/HeaderWaves'

const page = () => {
	return (
		<div className="container-login-page">
			<div className="containerHwaves">
				<HeaderWaves />
			</div>
			<div className="login">
				<Form />
			</div>
		</div>
	)
}

export default page
