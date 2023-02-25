import { Footer, MenuBar, InfoBar } from "../components";
import Header from "./header";
import {
  About,
  Philosophie,
  Wohin,
  GetStarted,
  Hero,
  Drinks,
  Team,
  WhatsNew,
  World,
} from "../sections";

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Header/>
    <MenuBar />
    <InfoBar/>
    
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0"></div>
      
      <Philosophie/>
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0"></div>
      <WhatsNew />
    </div>

    <World />

    <div className="relative">
      <Drinks />
      <Team/>
      <div className="gradient-04 z-0"></div>
      <Wohin />
    </div>
    <Footer />
  </div>
);

export default Page;
