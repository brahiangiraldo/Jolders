'use client'
import './form.scss'
import Input from '@/components/atoms/input/Input'
import Button from '@/components/atoms/button/Button'
import Image from 'next/image'
import logo from '@/assets/logo_login.png'
import { FormEvent } from 'react'

const Form = () => {
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log(e)
	}

	return (
		<div className="card">
			<Image src={logo} alt="logo tirgy" width={180} height={160} />
			<form onSubmit={handleSubmit}>
				<div className="container-inputs-login">
					<Input onChange={(e) => {}} placeholder="email here..." />
					<Input onChange={(e) => {}} placeholder="password here..." />
				</div>
				<Button type="submit">Log In</Button>
			</form>
		</div>
	)
}

export default Form
