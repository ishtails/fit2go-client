'use client'
import Image from 'next/image'
import gallery_image from '@/assets/gallery_image.png'
import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css'
import { useEffect, useRef, useState } from "react"
import { PiHandSwipeLeftLight } from 'react-icons/pi'
import { LiaAngleRightSolid, LiaAngleLeftSolid } from "react-icons/lia"

type Props = {}

const Gallery = ({}: Props) => {
  const [device, setDevice] = useState<deviceType>("iPhone 8");
  const [landscape, setLandscape] = useState(true);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const handleWindowResize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 1024) {
      setDevice("MacBook Pro");
    } else {
      setDevice("iPhone 8");
    }

    if (screenWidth < 768) {
      setLandscape(false);
    } else {
      setLandscape(true);
    }
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div className="flex flex-col items-center h-full mx-auto mt-24">
      <div className="flex flex-col items-center justify-center -mb-12 md:-mb-0 lg:-mb-8">
        <h2 className="text-5xl font-bold text-center font-lexend xl:text-6xl">
          Picture Gallery
        </h2>
        <span className="flex items-center justify-center mt-2 text-sm text-body lg:text-md xl:text-lg space-x-1">
          <p>Swipe to see more </p>
          <PiHandSwipeLeftLight className="w-5 h-5" />
        </span>
      </div>

      <DeviceFrameset device={device} color="black" landscape={landscape} zoom={0.8}>
        <div ref={testimonialsRef} className="flex flex-col max-h-screen mb-5 overflow-x-scroll md:flex-row scrollbar-hide scroll-smooth snap-x snap-mandatory">
          <Image src={gallery_image} alt="picture" className="flex-shrink-0 object-cover w-[150%] border-8 border-Slate-darker snap-center" />
          <Image src={gallery_image} alt="picture" className="flex-shrink-0 object-cover w-[150%] border-8 border-Slate-darker snap-center" />
          <Image src={gallery_image} alt="picture" className="flex-shrink-0 object-cover w-[150%] border-8 border-Slate-darker snap-center" />
          <Image src={gallery_image} alt="picture" className="flex-shrink-0 object-cover w-[150%] border-8 border-Slate-darker snap-center" />
          <Image src={gallery_image} alt="picture" className="flex-shrink-0 object-cover w-[150%] border-8 border-Slate-darker snap-center" />
          <Image src={gallery_image} alt="picture" className="flex-shrink-0 object-cover w-[150%] border-8 border-Slate-darker snap-center" />
        </div>
      </DeviceFrameset>
      <div className="space-x-10 hidden md:flex md:-mt-0 lg:-mt-10">
                <button className="bg-primary p-2 rounded-full shadow-md hover:bg-white transition-all" onClick={() => {
                    if (testimonialsRef.current) {
                        testimonialsRef.current.scrollLeft -= 500;
                    }
                }} >
                    <LiaAngleLeftSolid className="transition-all hover:text-primary" />
                </button>
                <button className="bg-primary p-2 shadow-md rounded-full hover:bg-white transition-all" onClick={() => {
                    if (testimonialsRef.current) {
                        testimonialsRef.current.scrollLeft += 500;
                    }
                }} >
                    <LiaAngleRightSolid className="transition-all hover:text-primary" />
                </button>
            </div>
    </div >
  )
}

export default Gallery