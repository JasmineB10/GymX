import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon
} from "@heroicons/react/24/solid";

import { SelectedPage } from "@/shared/types";
import HText from "@/shared/HText";
import Benefit from "./Benefit";
import { useEffect, useRef, useState } from 'react';
import BodyBuilderGraphic from "@/assets/BodyBuilderGraphic.png";
import ActionButton from "@/shared/ActionButton";

type Props = {
  setSelectedPage: (val: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [benefitsVisible, setBenefitsVisible] = useState<boolean[]>([]);
  const [graphicVisible, setGraphicVisible] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<(HTMLDivElement | null)[]>([]);
  const graphicRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (headerRef.current) {
      const rect = headerRef.current.getBoundingClientRect();
      setHeaderVisible(rect.top < window.innerHeight && rect.bottom >= 0);
    }

    const newBenefitsVisible = benefitsRef.current.map((ref) => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom >= 0;
      }
      return false;
    });
    setBenefitsVisible(newBenefitsVisible);

    if (graphicRef.current) {
      const rect = graphicRef.current.getBoundingClientRect();
      setGraphicVisible(rect.top < window.innerHeight && rect.bottom >= 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="benefits" className="mx-auto min-h-full w-5/6 py-5">
      <div
        className={`md:w-3/5 transition-opacity duration-1000 ${headerVisible ? 'opacity-100 animate-fade-right' : 'opacity-0'}`}
        ref={headerRef}
      >
        <HText>MORE THAN JUST A GYM</HText>
        <p className="my-5 text-sm">
          We provide world class fitness equipment, trainers and classes to
          get you to your ultimate fitness goals with ease. We provide true
          care into each and every member.
        </p>
      </div>
      {/* BENEFITS */}
      <div className="pt-10 items-center justify-between gap-8 md:flex">
        {[
          {
            icon: <HomeModernIcon className="h-6 w-6" />,
            title: "State Of Art Facilities",
            description: "Our modern facilities are equipped with the latest technology, providing an optimal environment for learning, training, and development."
          },
          {
            icon: <UserGroupIcon className="h-6 w-6" />,
            title: "100s of Diverse Classes",
            description: "We offer a wide range of classes for all interests and skill levels, from fitness and yoga to academic courses and creative workshops."
          },
          {
            icon: <AcademicCapIcon className="h-6 w-6" />,
            title: "Expert And Pro Trainers",
            description: "Our team of expert trainers are highly qualified and passionate, dedicated to helping you achieve your goals with personalized support and advice."
          }
        ].map((benefit, index) => (
          <div
            key={index}
            className={`transition-opacity duration-500 ${benefitsVisible[index] ? 'opacity-100 animate-fade-up' : 'opacity-0'}`}
            ref={el => benefitsRef.current[index] = el}
          >
            <Benefit
              icon={benefit.icon}
              setSelectedPage={setSelectedPage}
              title={benefit.title}
              description={benefit.description}
            />
          </div>
        ))}
      </div>
      {/* GRAPHICS AND DESCRIPTION */}
      <div className={`mt-5 items-center justify-between gap-20 md:mt-5 md:flex transition-opacity duration-500 ${graphicVisible ? 'opacity-100 animate-fade-right' : 'opacity-0'}`} ref={graphicRef}>
        {/* GRAPHIC */}
        <div className="mb-5">
          <img
            alt="fitness-image"
            src={BodyBuilderGraphic}
            className="mx-auto w-5/6 md:w-3/4"
          />
        </div>
        <div className="pt-10">
          {/* TITLE */}
          <HText>MILLIONS OF HAPPY MEMBERS GETTING{" "}
            <span className="text-red-400 animate-wiggle animate-infinite animate-duration-1000 animate-delay-[5000ms]">FIT</span>
          </HText>
          {/* DESCRIPTION */}
          <p className="my-3 pb-2">
            Join a thriving community of fitness enthusiasts who have transformed their lives with our world-class facilities,
            expert trainers, and diverse classes. Whether you're just starting your fitness journey or you're a seasoned athlete,
            our supportive environment and comprehensive resources will help you reach your goals. Experience the joy of achieving
            your personal best alongside millions of satisfied members who have found their fit with us. Let's get fit together and
            celebrate every milestone on the path to a healthier, happier you!
          </p>
          {/* BUTTON */}
          <ActionButton setSelectedPage={setSelectedPage}>
            Join Now
          </ActionButton>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
