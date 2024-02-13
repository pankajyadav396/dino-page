import React from 'react'
import Navbar from './Navbar'
import DinoWithPlane from '../assets/images/helicopter.webp'
import DinoOnSkate from '../assets/images/scooterdino.webp'
import DinoOnCycle from '../assets/images/cycledino.webp'


const HeroSection = () => {
    return (
        <div>
            <div
                className="bg-herosec lg:bg-full overflow-hidden bg-cover bg-center bg-repeat xl:min-h-screen sm:h-[730px] md:h-[874px] lg:h-[930px] h-[600px] relative pt-7 z-20">
                <img src={DinoOnSkate} alt="Dino-on-skate"
                    className="absolute right-[8.5%] bottom-[12%] lg:max-w-[211px] sm:max-w-[140px] max-w-[80px] dino-walking w-full z-[1] aos-init aos-animate"
                    data-aos="zoom-in" />
                <img src={DinoOnCycle} alt="Dino-on-cycle"
                    className="absolute left-[49.5%] bottom-[19%] dino-animation md:max-w-[131px] sm:max-w-[65px] max-w-[40px] w-full z-0 aos-init aos-animate"
                    data-aos="zoom-in" />
                <div className="max-w-[1156px] mx-auto px-3">
                    <Navbar />
                    <div className="flex sm:flex-row flex-col-reverse items-end flex-wrap">
                        <div
                            className="sm:w-5/12 w-full sm:mt-0 mt-5 flex items-end justify-center sm:justify-end xl:ps-10 aos-init aos-animate"
                            data-aos="zoom-in"><img src={DinoWithPlane} alt="Dino-with-plane"
                                className="sm:max-w-[395px] w-full max-w-[250px] plane-animation plane" /></div>
                        <div className="sm:w-7/12 w-full flex justify-center aos-init aos-animate" >
                            <h1 data-aos="zoom-in" data-aos-delay="2500"
                                className="ff_lucky font-normal lg:text-[175.64px] md:text-[130px] sm:text-[110px] text-[75px] leading-[91%] text-center drop-shadow-[0px_6px_0px_#000]">
                                <span className="text-[#FBA11D]">D</span><span className="text-[#23AAAC]">I</span><span
                                    className="text-[#D45B07]">N</span><span className="text-[#8EC627]">O</span><br className="sm:block hidden" /><span
                                        className="text-[#8EC627]">L</span><span className="text-[#FCCA2B]">F</span><span className="text-[#8F78D2]">G</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection