import useMediaQuery from '@/hooks/useMediaQuery';
import { SelectedPage } from '@/shared/types'
import LogoNameImg from "@/assets/LogoNameImg.png"
import ActionButton from '@/shared/ActionButton';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import HomePageGraphic from '@/assets/HomePageGraphic.png';
import SponsorRedBull from '@/assets/SponsorRedBull.png';
import SponsorForbes from '@/assets/SponsorForbes.png';
import SponsorFortune from '@/assets/SponsorFortune.png';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};
const Home = ({setSelectedPage}: Props) => {

  const isAboveMediumScreens = useMediaQuery("(min-width:768px)")  
  return (
    // HOME PAGE
    <div
    id="home"
    className='bg-gray-50 py-10'>
      <div className='flex flex-col items-center justify-center md:flex-row'>   
      {/* lOGO-IMG+ MOTTO + BUTTONS   */}

         <div className='bg-gray-50 flex flex-col justify-center items-center py-8 md:w-1/2 md:h-3/4 animate-fade-right animate-once animate-duration-1000 animate-ease-linear'> 
              <div className=''>
                <img alt="home-page-text" src={LogoNameImg}></img>
              </div>
              <div className='px-6'>
                Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios To Get The Body Shapes You Dream Of.. Get Your Dream
                Body Now.
              </div>
              <div className='flex items-center py-6'>

                <ActionButton
                setSelectedPage={setSelectedPage}>
                Join Now
               </ActionButton>

              <AnchorLink
                className='text-sm font-bold text-red-500 underline hover:text-yellow-400 px-4'
                onClick= {() => setSelectedPage(SelectedPage.ContactUs)}
                href={`#${SelectedPage.ContactUs}`}>
               <p className='px-4'>Learn More</p>
              </AnchorLink>
           </div>
       </div>
    
      {/* HOME PAGE GRAPHIC */}
      <div className='w-5/6 md:w-1/3 md:pr-8'>
      <img alt='home-pageGraphic' src={HomePageGraphic}></img>
     </div>

    </div>
    <div>
    {/* SPONSORS */}
    {isAboveMediumScreens && (
            <div className='flex justify-center gap-28 p-2'>
                <div className='animate-fade-up animate-once animate-duration-500 animate-delay-1500 animate-ease-in'>
                    <img alt="redbull-sponsor" src={SponsorRedBull}></img>
                </div>
                <div className='animate-fade-up animate-once animate-duration-500 animate-delay-500 animate-ease-in'>
                    <img alt="forbes-sponsor" src={SponsorForbes}></img>
                </div>
                <div className='animate-fade-up animate-once animate-duration-500 animate-delay-1000 animate-ease-in'>
                    <img alt="fortune-sponsor" src={SponsorFortune}></img>
                </div>
            </div>    
    )}
    </div>
    </div>
  )
}

export default Home