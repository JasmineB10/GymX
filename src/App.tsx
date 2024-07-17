import Navbar from "@/screens/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";
import Home from "@/screens/home";
import Benefits from "@/screens/benefits";
import OurClasses from "@/screens/ourClasses";
import ContactUs from "@/screens/contactUs";
function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home); 

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0)
      {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if(window.scrollY !== 0)
      setIsTopOfPage(false);
    }
      window.addEventListener("scroll",handleScroll);
      return () => window.removeEventListener("scroll", handleScroll)
  },[]);

  return (
     <div className="app bg-gray-50">
      <Navbar
      isTopOfPage = {isTopOfPage}
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
      ></Navbar>
      <Home setSelectedPage={setSelectedPage}/> 
      <Benefits setSelectedPage={setSelectedPage}/>
      <OurClasses/> 
      <ContactUs/>
     </div>
  )
}

export default App
