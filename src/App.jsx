import Nav from "./components/Nav";
import Blog from "./pages/Blog";
import FinalSection from "./pages/FinalSection";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Idea from "./pages/Idea";
import Portfolio from "./pages/Portfolio";
import Process from "./pages/Process";
import What from "./pages/What";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect } from "react";

function App() {
 
  return (
    <div className="dark:bg-[#111827]">
      <Nav></Nav>
      <Header />
      <Process></Process>
      <Portfolio></Portfolio>
      <Idea></Idea>
      <What></What>
      <FinalSection></FinalSection>
      <Footer></Footer>
    </div>
  );
}

export default App;
