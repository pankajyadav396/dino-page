import React from 'react'
import mover from "../assets/images/footerdino.webp"
import { Discord2, Instagram2, Twitter2 } from './Icon'
const Footer = () => {
    return (
        <>
            <div className=' max-sm:mt-[-120px] '>
                <div className="px-3 mb-[-76px]">
                    <h2 className='text-center mb-[13px] w-full'><span className='ff_lucky text-[50px] lg:text-[80px] md:text-[69.67px]'><span className='text-[#FBA11D] ff_lucky'>D</span><span className='text-[#23AAAC]'>i</span><span className=' text-[#D45B07]'>n</span><span className=' text-[#8EC627]'>o</span><span className=' text-[#FCCA2B]'>L</span><span className=' text-[#8F78D2]'>F</span><span className=' text-[#8EC627]'>G</span></span></h2>
                    <p className='text-[14px] font-normal text-white max-w-[376px] mx-auto ff_Balsamiq leading-[16.8px] text-center mb-[33px]'>Sed tempus pretium est, vestibulum dapibus mauris viverra id. Curabitur feugiat porta lorem,  </p>
                    <div className='flex gap-2 justify-center relative z-[1]'>
                        <a href="https://twitter.com/?lang=en" target='_blank' className='group'>
                            <Twitter2 />
                        </a>
                        <a href="https://discord.com/" target='_blank' className='group'>
                            <Discord2 />
                        </a>
                        <a className='group' href="https://www.instagram.com/" target='_blank'>
                            <Instagram2 />
                        </a>
                    </div>
                </div>
                <div className='bg-[url(./assets/images/footerbg.webp)] min-h-[345px] lg:bg-full bg-cover bg-center bg-repeat pt-7 z-2 relative'>
                    <img src={mover} alt="image" className='absolute bottom-0 right-0 up-down-anime max-sm:max-w-[170px]' />
                </div>
            </div >
        </>
    )
}

export default Footer