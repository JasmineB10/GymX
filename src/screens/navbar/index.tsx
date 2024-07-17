import { useState } from "react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import Logo from "@/assets/Logomin.png"

import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage : (value :SelectedPage) => void;
  isTopOfPage : boolean;
}

const Navbar = ({selectedPage, setSelectedPage, isTopOfPage}: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navBarBg  = isTopOfPage ? "" : "bg-red-100";
  return (
    <div>
      <div className={`flex items-center justify-between fixed top:0 z-30 w-full py-6 ${navBarBg}`}>
          <div className="flex items-center justify-between gap-16 w-full">
            {/* LEFT SIDE */}
            <img alt="logo" src={Logo}
            className="w-32 px-8"></img>

            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
            <div className="flex items-center justify-between w-full">

              <div className="flex items-center justify-between gap-8 text-sm px-">
                <Link page="Home" 
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}/>
                <Link page="Benefits"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}/>
                <Link page="Our Classes"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}/>
                <Link page="Contact Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}/>
              </div>
              <div className="flex items-center justify-between gap-8 px-12">
              <p>Sign In</p>
              <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
              </div>
            </div>
            ) : (
              <div className="pr-6">
              <button
              className="rounded-full bg-yellow-500 p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <Bars3Icon className="h-6 w-6 text-white"></Bars3Icon>
              </button>
              </div>
            )}
          </div>
        </div>

        {/* MOBILE MENU MODAL */}
        {!isAboveMediumScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 z-40 h-full w-72 bg-yellow-50 drop-shadow-xl">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <XMarkIcon className="h-6 w-6 text-gray-400"></XMarkIcon>
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                <Link page="Home" 
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}/>
                <Link page="Benefits"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}/>
                <Link page="Our Classes"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}/>
                <Link page="Contact Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}/>
              </div>
          </div>
        )}
    </div>
  )
}

export default Navbar;