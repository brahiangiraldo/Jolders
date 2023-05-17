'use client'
// import { Header } from './presentation/organism/header/Header';
import './home.scss';
import PersonIntro from './presentation/molecules/personintro/PersonIntro';
import { Investor } from './presentation/organism/investor/Investor';
import StartUpSections from './presentation/organism/startup-sections/StartUpSections';
import PersonIntroTwo from './presentation/molecules/personintrotwo/PersonIntroTwo';
import ImputFolder from './presentation/organism/input-folder/ImputFolder';
import FaqComponent from './presentation/organism/faqcomponent/FaqComponent';
import Market from './presentation/organism/Market/Market';
import FooterJolders from './presentation/organism/footer/FooterJolders';
import EventStart from './presentation/organism/events-start/EventStart';
import MenuTab from './presentation/organism/menu-tab/MenuTab';
import { useEffect, useState } from 'react';
import { ItemMenuTab } from './presentation/organism/menu-tab/MenuTabProps';
import Header from './presentation/organism/header/Header';

const initItems: ItemMenuTab[] = [
  { iconDefault: 'IconHome', iconActive: 'IconHomeFill', text: 'IconHome', onClick: () => console.log('hola') },
  { iconDefault: 'IconInversores', iconActive: 'IconInversoresFill', text: 'IconInversores', onClick: () => console.log('hola') },
  { iconDefault: 'IconStartUp', iconActive: 'IconStartUpFill', text: 'IconStartUp', onClick: () => console.log('hola') },
  { iconDefault: 'IconMarket', iconActive: 'IconMarketFill', text: 'IconMarket', onClick: () => console.log('hola') },
];

const Page = () => {
  const [items, setItems] = useState<ItemMenuTab[]>(initItems);

  useEffect(() => {
    
  }, []);

  

  return (
    <div className="container-login-page">
      <section>
        <Header id="header" /> {/* Home */}
      </section>
      <section className="section-global">
        <section>
          <Investor />
        </section>
        <PersonIntro />
        <StartUpSections id="StartUpSections" /> {/* StartUp */}
        <PersonIntroTwo />
        <ImputFolder />
        <section>
          <FaqComponent id="FaqComponent" /> {/* Inversor */}
        </section>
        <section>
          <Market id="Market" /> {/* Mercado */}
        </section>
        <EventStart image="https://jolders.com/wp-content/uploads/2023/02/4yfn.png" name="Javier" />
        <FooterJolders image="https://jolders.com/wp-content/uploads/2023/03/jolders-logo-new.png" name="Jolders" />
        <MenuTab items={items} />
      </section>
    </div>
  );
};

export default Page;

























// 'use client'
// import { Header } from "./presentation/organism/header/Header"
// import './home.scss'
// import PersonIntro from "./presentation/molecules/personintro/PersonIntro"
// import { Investor } from "./presentation/organism/investor/Investor"
// import StartUpSections from "./presentation/organism/startup-sections/StartUpSections";
// import PersonIntroTwo from "./presentation/molecules/personintrotwo/PersonIntroTwo";
// import ImputFolder from "./presentation/organism/input-folder/ImputFolder";
// import FaqComponent from "./presentation/organism/faqcomponent/FaqComponent";
// import Market from "./presentation/organism/Market/Market";
// import FooterJolders from "./presentation/organism/footer/FooterJolders";
// import EventStart from "./presentation/organism/events-start/EventStart";
// import MenuTab from "./presentation/organism/menu-tab/MenuTab";
// import { useEffect, useState } from "react";
// import { ItemMenuTab } from "./presentation/organism/menu-tab/MenuTabProps";

// const initItem:ItemMenuTab[] = [
// {iconDefault:'IconHome',iconActive:'IconHomeFill',text:'cuenta',onClick:()=>console.log('hola')},
// {iconDefault:'IconInversores',iconActive:'IconInversoresFill',text:'cuenta',onClick:()=>console.log('hola')},
// {iconDefault:'IconStartUp',iconActive:'IconStartUpFill',text:'cuenta',onClick:()=>console.log('hola')},
// {iconDefault:'IconMarket',iconActive:'IconMarketFill',text:'cuenta',onClick:()=>console.log('hola')}]

// const page = () => {
// 	const [items, seTitems] = useState<ItemMenuTab[]>(initItem)

// 	useEffect(() => {
	  
// 	}, [])
	
// 	const handleHome= ()=>{} //redireccion // manejador de eventos 

// 	return (
	 
// 	  <div className="container-login-page">
// 	   <section>
// 	   <Header />  {/* Home */}
// 	   </section>
// 	   <section className="section-global">
// 	   <section>
// 	   <Investor/>
// 	   </section>
//        <PersonIntro/>
// 	   <section>
// 	   <StartUpSections/>  {/*  StartUp */}
// 	   </section>
// 	   <PersonIntroTwo/>
// 	   <ImputFolder/>
// 	   <section>
// 	   <FaqComponent/> {/*  inversor */}
// 	   </section>
// 	   <section>
// 	   <Market/>  {/* mercado */}
// 	   </section>
// 	   <EventStart image="https://jolders.com/wp-content/uploads/2023/02/4yfn.png" name="Javier"/>
//        <FooterJolders image="https://jolders.com/wp-content/uploads/2023/03/jolders-logo-new.png "name="Jolders"/>
// 	   <MenuTab items={items}/>
// 	   </section>
//     </div> 
// 	)
//   }  

// export default page;




// {iconDefault:'IconAccount',iconActive:'IconAccountFill',text:'cuenta',onClick:()=>console.log('hola')}