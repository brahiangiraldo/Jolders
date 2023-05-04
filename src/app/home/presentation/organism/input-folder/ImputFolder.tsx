import Founder from '../founder/Founder'
import { Folder } from './Data'
import './imputFolder.scss'
import ButtonInversores from '@/components/molecules/butto-inversores/ButtonInversores'

const ImputFolder = () => {
	return (
		<section className="imput-folder-container">
			<section className="container-grid">
				<section className="imput-folder-content-container">
					<h2 className="imput-folder-title">¿Qué aporta Jolders?</h2>

					<section className="container-titlep">
						<p className="imput-folder-paragraph ">
							Jolders permite invertir en participaciones digitalizadas de
							startups de manera ágil y simple, desde cualquier parte del mundo.
							🌍 ✅ Elimina intermediarios. ✅ Costos de transacción más bajos.
							✅ Ahorro de tiempos. ✅ No requiere ir a notario. ✅ No requiere
							NIE.
						</p>
						{/* <div className='ButtonInversores'>
          <ButtonInversores 
            bgColor='#000'
            text="Conoce cómo lo hacemos"
            txtColor="#EAC500"
			searchIcon=''
			cartIcon='🪄'
           />
		  </div> */}
					</section>
				</section>

				<section className="container-image">
					<img
						src="https://jolders.com/wp-content/uploads/2023/03/Mockup6.png"
						alt="Imagen de Jolders"
						className="imput-folder-image"
					/>
				</section>
			</section>

			<section className="sectionFolder">
				{Folder.map((item) => (
					<Founder
						key={item.name}
						paragraph={item.paragraph}
						image={item.image}
						name={item.name}
						role={item.role}
					/>
				))}
			</section>
		</section>
	)
}

export default ImputFolder
