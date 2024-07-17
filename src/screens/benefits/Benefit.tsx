import { SelectedPage } from '@/shared/types';
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    icon: React.ReactNode;
    title: string,
    description: string,
    setSelectedPage: (value: SelectedPage) => void
}

const Benefit = ({icon, title, description, setSelectedPage}: Props) => {
  return (
    <div className="border-2 border-gray-200 rounded-md text-center mb-6">
        <div className='mb-4 flex justify-center'>
            <div className="rounded-full border-2 border-gray-200 bg-red-200 p-2">
              {icon}
            </div>
        </div>  
            <h4 className="text-xl font-bold">{title}</h4>
            <p className='mt-3'>{description}</p>
            <AnchorLink
                className='text-sm font-bold text-red-500 underline hover:text-yellow-400 px-4'
                onClick= {() => setSelectedPage(SelectedPage.ContactUs)}
                href={`#${SelectedPage.ContactUs}`}>
                <p className='px-4'>Learn More</p>
            </AnchorLink>
        </div>
  )
}

export default Benefit;