import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import HText from "@/shared/HText";
import Class from "./Class";
import { useEffect, useRef, useState } from 'react';


const OurClasses = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const topShown = rect.top >= 0 && rect.top < window.innerHeight;
      const bottomShown = rect.bottom >= 0 && rect.bottom <= window.innerHeight;
      if (topShown || bottomShown) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="ourclasses" className="w-full bg-pink-50 py-40">
      <div ref={ref} className={`px-20 py-5 ${isVisible ? 'animate-fade-right animate-once animate-duration-1000' : 'opacity-0'}`}>
        <HText>Our Classes</HText> 
        <p className="my-5 md:w-3/5 pb-5">
          Discover a variety of classes tailored to every fitness level and interest. 
          From intense HIIT and strength training to soothing yoga and pilates, 
          our expert instructors provide personalized guidance to help you reach your fitness goals in a supportive environment.
        </p>
      </div>
      <div className="mt-10 w-full h-96 overflow-x-auto overflow-y-hidden flex space-x-4">
        <Class image={image1} title="Yoga" description="Find balance and peace with our calming yoga classes. Enhance your flexibility and mental clarity."/>
        <Class image={image2} title= "HIIT" description="High-Intensity Interval Training for maximum results. Burn more calories in less time and boost your metabolism."/>
        <Class image={image3} title="Pilates" description= "Strengthen your core with our pilates sessions.  Improve your posture and build lean muscle."/>
        <Class image={image4} title= "Strength Training" description="Build muscle and strength with our expert trainers. Tailored programs to help you achieve your fitness goals."/>
        <Class image={image5} title= "Cardio" description= "Get your heart pumping with our cardio classes. Increase your stamina and enjoy a variety of fun workouts."/>
        <Class image={image6} title="Dance" description= "Have fun and burn calories with our dance workouts."/>
      </div>
    </div>
  );
}

export default OurClasses;
