import React from 'react'
import CenterDino from '../assets/images/dinotoke.webp'
import Chart from '../assets/images/HalfChart.webp'
import completeChart from '../assets/images/completechart.webp'
import Roadmap from '../assets/images/ChartRoadMap.webp'
import cloudShadow from '../assets/images/TokenShadow.webp'
import bottomLayer from '../assets/images/TokenGrassLayer.webp'
import dinoElipse from '../assets/images/dinotoke2.webp'
import treeElipse from '../assets/images/tokelefttree.png'
import topLayer from "../assets/images/tokenomicstoplayer.webp"
const Tokenomics = () => {
    return (
        <>
            <div className="relative bg-[#0A4740]">
                <img src={cloudShadow} alt="Cloud-Shadow"
                    className="w-full right-0 absolute max-w-[509px] top-[15%] aos-init aos-animate" data-aos="zoom-in" />
                <img
                    src={topLayer} alt="top-Layer"
                    className="w-full absolute -top-1 left-0 z-[0]" />
                <img src={dinoElipse}
                    alt="TokenDragon"
                    className="absolute sm:z-[2] z-[1] xl:bottom-[2%] sm:bottom-[-30px] bottom-0 left-0 w-full md:max-w-[211px] sm:max-w-[150px] max-w-[130px]  up-down-anime" />
                <img
                    src={treeElipse} alt="TokenLeftTree"
                    className="absolute sm:z-[1] z-[0] xl:bottom-[4%] sm:bottom-[1%] bottom-0 left-0 w-full md:max-w-[352px] max-w-[200px]" />
                <img
                    src={bottomLayer} alt="Bottom-Layer"
                    className="absolute w-full left-0 right-0 bottom-0" />
                <div
                    className="max-w-[1156px] relative z-[1] xl:max-w-[1147px] xl:px-3 px-5 mx-auto sm:pt-[236px] pt-[80px] xl:pb-[440px] lg:pb-[300px] sm:pb-[250px] pb-[75px]"
                    id="Tokenomic">
                    <h3
                        className="text-white font-normal ff_chewy sm:text-[64px] text-[42px] leading-[131%] text-center xl:mb-[150px] lg:mb-[60px] mb-[45px] aos-init aos-animate"
                        data-aos="zoom-in">Tokenomics</h3>
                    <div className="flex items-center justify-center">
                        <div className="relative xl:max-w-[589.84px] lg:max-w-[515px] sm:max-w-[390px] max-w-[330px]">
                            <img
                                src={CenterDino} alt="centre-dino"
                                className="xl:flex hidden absolute w-full lg:top-[-35%] left-[39%] max-w-[134px] up-down-anime aos-init aos-animate"
                                data-aos="zoom-in" />
                            <img src={Chart} alt="Chart"
                                className="xl:block hidden w-full aos-init aos-animate" data-aos="zoom-in" />
                            <img
                                src={Roadmap} alt="RoadMap"
                                className="xl:block hidden absolute bottom-[59%] lg:left-[28%] left-[26%] max-w-[253px] w-full aos-init aos-animate"
                                data-aos="zoom-in" />
                            <img src={completeChart} alt="complete-Chart"
                                className="w-full xl:hidden block aos-init aos-animate" data-aos="zoom-in" />
                            <div
                                className="md:flex hidden absolute xl:top-[12%] top-[41%] xl:left-[-45%] lg:left-[-46%] left-[-40%] lg:gap-[26.11px] gap-[15px] aos-init aos-animate"
                                data-aos="zoom-in">
                                <div className="flex flex-col gap-[5px]">
                                    <p className="text-[#FBA11D] leading-[119%] lg:text-[32px] text-[23px] font-normal ff_Balsamiq">333,333,333</p>
                                    <p className="text-white leading-[138%] font-normal text-[24px] text-right ff_Balsamiq">Supply</p>
                                </div>
                                <div className="border border-solid border-white border-r-0 border-b-0 h-[88px] w-[16px]"></div>
                            </div>
                            <div
                                className="md:flex hidden absolute xl:top-[12%] top-[43%] xl:right-[-50%] lg:right-[-52%] right-[-48%] lg:gap-[26.11px] gap-[15px] aos-init aos-animate"
                                data-aos="zoom-in">
                                <div className="border border-solid border-white border-l-0 border-b-0 h-[88px] w-[16px]"></div>
                                <div className="flex flex-col gap-[5px]">
                                    <p
                                        className="text-[#8EC627] lg:max-w-[217px] max-w-[164px] leading-[119%] lg:text-[32px] text-[23px] font-normal ff_Balsamiq">
                                        Liquidity lock for 1 year</p>
                                </div>
                            </div>
                            <div
                                className="md:flex hidden absolute xl:bottom-[-45%] bottom-[-28%] xl:left-[42%] left-[38%] justify-center items-center flex-col gap-[17px] aos-init aos-animate"
                                data-aos="zoom-in">
                                <div className="bg-white h-[43px] w-[1px]"></div>
                                <div className="flex flex-col gap-[5px]">
                                    <p className="text-[#D45B07] max-w-[217px] leading-[119%] text-[32px] font-normal ff_Balsamiq">No Tax</p>
                                </div>
                            </div>
                            <div
                                className="md:flex hidden absolute xl:bottom-[-27%] bottom-[-17%] left-[-27%] justify-center items-center gap-[17px] aos-init aos-animate"
                                data-aos="zoom-in">
                                <div className="flex flex-col gap-[5px]">
                                    <p className="text-[#23AAAC] max-w-[217px] leading-[119%] lg:text-[32px] text-[23px] font-normal ff_Balsamiq">95%
                                        Uniswa</p>
                                    <p
                                        className="text-[#23AAAC] max-w-[217px] text-right leading-[119%] lg:text-[32px] text-[23px] font-normal ff_Balsamiq">
                                        5% Marketing</p>
                                    <p
                                        className="text-white max-w-[217px] text-right leading-[119%] lg:text-[32px] text-[23px]  font-normal ff_Balsamiq">
                                        Allocation</p>
                                </div>
                                <div className="border-white border border-solid h-[102px] w-[16px] border-b-0 border-r-0 skew-y-[-50deg] "></div>
                            </div>
                            <div
                                className="md:flex hidden absolute xl:bottom-[-23%] bottom-[-18%] right-[-31%] justify-center items-center gap-[17px] aos-init aos-animate"
                                data-aos="zoom-in">
                                <div className="border-white border border-solid h-[102px] w-[10px] border-b-0 border-l-0 skew-y-[52deg]"></div>
                                <p className="text-[#FB5352] leading-[119%] lg:text-[32px] text-[23px] font-normal ff_Balsamiq">No Mint Function</p>
                            </div>
                            <div className="md:hidden flex justify-center items-center mt-12">
                                <div className=" flex flex-col gap-[35px]">
                                    <div className="flex sm:gap-[32px] gap-6">
                                        <div className="w-[34px] h-[34px] border border-solid border-white rounded-md bg-[#FBA11D]"></div>
                                        <div className="flex flex-col gap-[5px]">
                                            <p className="text-[#FBA11D] leading-[119%] sm:text-[32px] text-[20px] font-normal ff_Balsamiq">333,333,333
                                            </p>
                                            <p className="text-white leading-[138%] font-normal sm:text-[24px] text-[20px] ff_Balsamiq">Supply</p>
                                        </div>
                                    </div>
                                    <div className="flex sm:gap-[32px] gap-6 aos-init aos-animate" data-aos="zoom-in">
                                        <div className="w-[34px] h-[34px] border border-solid border-white rounded-md bg-[#23AAAC]"></div>
                                        <div className="flex flex-col gap-[5px]">
                                            <p className="text-[#23AAAC] leading-[119%] sm:text-[32px] text-[20px] font-normal ff_Balsamiq">95% Uniswa, 5%
                                                Marketing</p>
                                            <p className="text-white leading-[138%] sm:text-[32px] text-[20px] font-normal ff_Balsamiq">Allocation</p>
                                        </div>
                                    </div>
                                    <div className="flex sm:gap-[32px] gap-6 items-center aos-init aos-animate" data-aos="zoom-in">
                                        <div className="w-[34px] h-[34px] border border-solid border-white rounded-md bg-[#D45B07]"></div>
                                        <div className="flex flex-col gap-[5px]">
                                            <p className="text-[#D45B07] leading-[119%] sm:text-[32px] text-[20px] font-normal ff_Balsamiq">No Tax</p>
                                        </div>
                                    </div>
                                    <div className="flex sm:gap-[32px] gap-6 items-center aos-init aos-animate" data-aos="zoom-in">
                                        <div className="w-[34px] h-[34px] border border-solid border-white rounded-md bg-[#FB5352]"></div>
                                        <div className="flex flex-col gap-[5px]">
                                            <p className="text-[#FB5352] leading-[119%] sm:text-[32px] text-[20px] font-normal ff_Balsamiq">No Mint
                                                Function</p>
                                        </div>
                                    </div>
                                    <div className="flex sm:gap-[32px] gap-6 items-center aos-init aos-animate" data-aos="zoom-in">
                                        <div className="w-[34px] h-[34px] border border-solid border-white rounded-md bg-[#8EC627]"></div>
                                        <div className="flex flex-col gap-[5px]">
                                            <p className="text-[#8EC627] leading-[119%] sm:text-[32px] text-[20px] font-norma ff_Balsamiq">Liquidity lock
                                                for 1 year</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tokenomics