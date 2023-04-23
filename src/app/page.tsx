import { Inter } from 'next/font/google'
import HomeJolder from './home/page'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<main>
			<HomeJolder/>
		</main>
	)
}
