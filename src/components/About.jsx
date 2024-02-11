import React from 'react'
import Lefttree from "../assets/images/aboutrighttree.webp"
import Rightttree from "../assets/images/aboutlefttree.webp"
import Dogimg from "../assets/images/aboutdino.webp"
const About = () => {
    return (
        <>
            <div className='bg-100-100 bg-no-repeat bg-[#09655a] pt-[76px] bg-center pb-[17px] max-lg:pb-[50px]' id='about'>
                <div className='relative z-10'>
                    <img className=' absolute left-0 top-[-24%] z-[-1]' src={Lefttree} alt="Lefttree" />
                    <img className=' absolute right-0 top-[-20%] z-[-1] hidden sm:block' src={Rightttree} alt="Rightttree" />
                    <img className='absolute max-w-[169px] min-h-[205px] right-0 bottom-[-20%] z-[-1] hidden md:block' src={Dogimg} alt="Dogimg" />
                    <div className=' max-w-[1000px] mx-auto px-2 sm:px-3'>
                        <div className=' flex justify-center items-center flex-col'>
                            <h2 className=' sm:text-[50px] text-[40px] md:text-[64px] font-normal ff_chewy text-[#FFFFFF]'>About <span className=' ff_lucky sm:text-[50px] text-[40px] md:text-[69.67px]'><span className='text-[#FBA11D] ff_lucky'>D</span><span className='text-[#23AAAC]'>i</span><span className=' text-[#D45B07]'>n</span><span className=' text-[#8EC627]'>o</span><span className='text-[#FCCA2B]'>L</span><span className=' text-[#8F78D2]'>F</span><span className=' text-[#8EC627]'>G</span></span></h2>
                            <p className=' text-[#FFFFFF] font-normal sm:leading-7 leading-5 text-center ff_Balsamiq mt-[34px] sm:text-[20px] text-[15px] md:text-[24px] '>$DINO is a meme coin with very strong utility.</p>
                            <p className=' text-[#FFFFFF] font-normal sm:leading-7 leading-5 text-center max-w-[560px] mt-[14px] ff_Balsamiq  sm:text-[20px] text-[15px] md:text-[24px]'>Biggest problem of meme coins is lack of utility and <br /> usecase,<span className='text-[#8EC627] font-bold'> $</span><span className='text-[#FBA11D] font-bold  sm:text-[20px] text-[15px] md:text-[24px]'>D</span><span className=' text-[#23AAAC] font-bold'>I</span><span className='text-[#D45B07] font-bold'>N</span><span className='text-[#FB5352] font-bold'>O</span> is going to fix it.</p>
                            <p className=' text-[#FFFFFF] font-normal sm:leading-7 leading-5 text-center mt-[6px] max-w-[522px] ff_Balsamiq  sm:text-[20px] text-[15px] md:text-[24px]'>We want to bring a lot of usecases and utility to <br /> $DINO holders, just sit back and relax.</p>
                            <p className=' text-[#FFFFFF] font-normal sm:leading-7 leading-5 text-center max-w-[599px] mt-[10px] ff_Balsamiq  sm:text-[20px] text-[15px] md:text-[24px]'>In $DINO, we want to build a very strong community,<br /> that’s why we are going to have a lot of games and <br /> crypto tips in our Telegram and Twitter.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About