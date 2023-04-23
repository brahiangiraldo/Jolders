import { Header } from "./presentation/organism/header/Header"
import './home.scss'
import PersonIntro from "./presentation/molecules/personintro/PersonIntro"
import { Investor } from "./presentation/organism/investor/Investor"
import StartUpSections from "./presentation/organism/startup-sections/StartUpSections";
import PersonIntroTwo from "./presentation/molecules/personintrotwo/PersonIntroTwo";
import ImputFolder from "./presentation/organism/input-folder/ImputFolder";
import FaqComponent from "./presentation/organism/faqcomponent/FaqComponent";
import Market from "./presentation/organism/Market/Market";
import FooterJolders from "./presentation/organism/footer/FooterJolders";
import EventStart from "./presentation/organism/events-start/EventStart";

const page = () => {
	return (
	 
	  <div className="container-login-page">
       <Header />
	   <section className="section-global">
	   <Investor/>
       <PersonIntro/>
	   <StartUpSections/>
	   <PersonIntroTwo/>
	   <ImputFolder/>
	   <FaqComponent/>
	   <Market/>
	   <EventStart image="https://jolders.com/wp-content/uploads/2023/02/4yfn.png" name="Javier"/>
       <FooterJolders image="https://jolders.com/wp-content/uploads/2023/03/jolders-logo-new.png "name="Jolders"/>
	   </section>



    </div> 
		
	
	
	)
}

export default page

