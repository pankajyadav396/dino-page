import React from "react";
import GreenDinoWithPlan from "../assets/images/GreenDinoWithPlan.webp";
import RoadMapDottedLine from "../assets/images/RoadMapDottedLine.webp";
import RoadMapTree from "../assets/images/timelinetree1.webp";
import RoadmapTreeWithDino from "../assets/images/RoadmapTreeWithDino.webp";
import RoadmapGrass from "../assets/images/timelinegrass.webp";
import cutimage from "../assets/images/roadmapbottomimg.webp";

const Roadmap = () => {
    return (
        <div
            id="Roadmap"
            className="bg-[#09655A]  relative sm:mb-[200px] sm:pb-[100px] pt-[50px] md:pb-[270px] pb-[68px] my-[-2px] mt-[100px] sm:mt-[200px] lg:mt-[300px]"
        >
            <h2
                className="sm:text-[64px] text-[42px] font-normal text-white text-center ff_chewy md:mb-24 leading-[132%] relative z-10 mb-10"
                data-aos="zoom-in"
            >
                Roadmap
            </h2>
            <div className="container mx-auto xl:max-w-[1118px] px-3 relative max-[522px]:pl-3 max-sm:pl-[80px]">
                <div className="md:pl-0 sm:pl-[130px] pl-[70px]">
                    <div
                        className="flex  flex-row sm:items-center xl:gap-[45px] lg:gap-[25px] gap-3.5 relative z-10"
                        data-aos="zoom-in-right"
                    >
                        <h3 className="lg:text-[200px] max-[522px]:text-[55px] max-[522px]:min-w-[61px] sm:w-[134px] leading-[96%] sm:leading-normal sm:text-[120px] text-[70px] font-normal md:w-[auto]  md:leading-[131%] ff_chewy text-[#FBA11D] drop-shadow-[0px_18.413px_18.413px_rgba(0,_0,_0,_0.26)]">
                            01{" "}
                        </h3>
                        <ul className="flex flex-col gap-4 max-[522px]:gap-2 list-disc pl-[15px]">
                            <li className="sm:text-[14px] md:text-[15px] lg:text-[20px] text-[12px] font-normal text-white leading-[121%] ff_Balsamiq">
                                Launch $DINO & Website & Social Media.
                            </li>
                            <li className="sm:text-[14px] md:text-[15px] lg:text-[20px] text-[12px] font-normal text-white leading-[121%] ff_Balsamiq">
                                Building the community.
                            </li>
                            <li className="sm:text-[14px] md:text-[15px] lg:text-[20px] text-[12px] font-normal text-white leading-[121%] ff_Balsamiq">
                                Marketing Phase 1.
                            </li>
                        </ul>
                        <img
                            src={GreenDinoWithPlan}
                            alt="GreenDinoWithPlan"
                            className="md:hidden block absolute max-sm:top-[5%] sm:top-[29%] left-[-86px] sm:left-[-28%] top-[-8%] max-w-[80px] sm:max-w-[120px]"
                        />
                    </div>
                    <div
                        className="flex flex-row sm:items-center lg:justify-end md:justify-center lg:pl-0 md:pl-[100px] lg:gap-[30px] gap-[15px] lg:pr-[100px] md:pt-[245px] pt-[30px] relative z-10"
                        data-aos="zoom-in-left"
                    >
                        <h3 className="lg:text-[200px] max-[522px]:text-[55px] leading-[96%] sm:leading-normal sm:text-[120px] text-[70px] md:leading-[131%] ff_chewy font-normal text-[#8EC627] drop-shadow-[0px_18.413px_18.413px_rgba(0,_0,_0,_0.26)]">
                            02
                        </h3>
                        <ul className="flex flex-col gap-4 max-[522px]:gap-2 list-disc pl-[15px]">
                            <li className="sm:text-[14px] md:text-[15px] lg:text-[20px] text-[12px] font-normal text-white leading-[121%] ff_Balsamiq">
                                CoinGecko & Coinmarketcap listing.
                            </li>
                            <li className="sm:text-[14px] md:text-[15px] lg:text-[20px] text-[12px] font-normal text-white leading-[121%] ff_Balsamiq">
                                Introduction to Buyback & Burning mechanism
                            </li>
                            <li className="sm:text-[14px] md:text-[15px] lg:text-[20px] text-[12px] font-normal text-white leading-[121%] ff_Balsamiq">
                                Marketing Phase 2.
                            </li>
                        </ul>
                        <img
                            src={RoadMapTree}
                            alt="RoadMapTree"
                            className="md:hidden block max-[522px]:text-[55px] absolute sm:top-[26%] left-[-81px] sm:left-[-21%] top-[14%] max-w-[70px] sm:max-w-[80px]"
                        />
                    </div>
                    <div
                        className="flex flex-row sm:items-center xl:gap-[45px] lg:gap-[25px] gap-[14px] lg:pt-[152px] md:pt-[143px] pt-[30px] relative z-10"
                        data-aos="zoom-in-right"
                    >
                        <h3 className="lg:text-[220.95px] max-[522px]:text-[55px] leading-[96%] sm:leading-normal sm:text-[120px] text-[70px] font-normal ff_chewy text-[#D45B07] drop-shadow-[0px_18.413px_18.413px_rgba(0,_0,_0,_0.26)] md:leading-[131%]">
                            03
                        </h3>
                        <ul className="flex flex-col gap-4 max-[522px]:gap-2 list-disc pl-[15px]">
                            <li className="sm:text-[14px] md:text-[15px] lg:text-[20px] text-[12px] font-normal text-white leading-[121%] ff_Balsamiq">
                                Utility and Usecase Introduction.
                            </li>
                            <li className="sm:text-[14px] md:text-[15px] lg:text-[20px] text-[12px] font-normal text-white leading-[121%] ff_Balsamiq">
                                CEX Listings
                            </li>
                            <li className="sm:text-[14px] md:text-[15px] lg:text-[20px] text-[12px] font-normal text-white leading-[121%] ff_Balsamiq">
                                Marketing Phase 3.
                            </li>
                        </ul>
                        <img
                            src={RoadmapTreeWithDino}
                            alt="RoadmapTreeWithDino"
                            className="md:hidden block absolute sm:top-[26%] left-[-81px] sm:left-[-21%] top-[14%] max-w-[70px] sm:max-w-[80px]"
                        />
                    </div>
                    <div
                        className="flex flex-row sm:items-center md:justify-center lg:gap-[30px] gap-[15px] md:pt-[154px] pt-[30px] relative z-10"
                        data-aos="zoom-in-left"
                    >
                        <h3 className="lg:text-[200px] max-[522px]:text-[55px] leading-[96%] sm:leading-normal sm:text-[120px] text-[70px]  ff_chewy font-normal md:ml-[150px] text-[#23AAAC] drop-shadow-[0px_18.413px_18.413px_rgba(0,_0,_0,_0.26)] md:leading-[131%]">
                            04
                        </h3>
                        <ul className="flex flex-col gap-4 max-[522px]:gap-2 list-disc pl-[15px]">
                            <li className="sm:text-[14px] md:text-[15px] lg:text-[20px] text-[12px] font-normal text-white leading-[121%] ff_Balsamiq">
                                Staking Introduction.
                            </li>
                            <li className="sm:text-[14px] md:text-[15px] lg:text-[20px] text-[12px] font-normal text-white leading-[121%] ff_Balsamiq">
                                DINO NFT Collection.
                            </li>
                            <li className="sm:text-[14px] md:text-[15px] lg:text-[20px] text-[12px] font-normal text-white leading-[121%] ff_Balsamiq">
                                Marketing Phase 4
                            </li>
                        </ul>
                        <img
                            src={RoadmapGrass}
                            alt="RoadmapGrass"
                            className="md:hidden block absolute left-[-86px] sm:left-[-28%] bottom-[10%] sm:bottom-[30%] max-w-[80px] sm:max-w-[120px]"
                        />
                    </div>
                </div>
                <div className="md:hidden block absolute sm:left-[70px] top-[5%] max-[522px]:left-[28px] sm:top-[15%] bottom-[7%] sm:bottom-[10%] max-sm:left-[94px] md:bottom-0 w-[15px] border-l-[8px] border-dashed border-[#0a4740]"></div>
                <img
                    src={RoadMapDottedLine}
                    alt="RoadMapDottedLine"
                    className="md:block hidden absolute xl:pl-[68px] top-0 bottom-0 left-0 right-0"
                />
            </div>
            <img src={cutimage} alt="cut" className="absolute max-sm:hidden block sm:bottom-[-10%] md:bottom-[-8%] xl:bottom-[-12%] min-[1420px]:bottom-[-13%] min-[1568px]:bottom-[-14%] min-[1624px]:bottom-[-15%] min-[1718px]:bottom-[-16%] min-[1810px]:bottom-[-16%] min-[1842px]:bottom-[-17%] w-full right-0 left-0" />
            <img src={cutimage} alt="cut" className="absolute rotate-180 max-sm:hidden block sm:top-[-10%] md:top-[-8%] xl:top-[-12%] min-[1420px]:top-[-10%] min-[1568px]:top-[-14%] min-[1624px]:top-[-15%] min-[1718px]:top-[-16%] min-[1810px]:top-[-16%] min-[1842px]:top-[-16%] w-full right-0 left-0" />
        </div>
    );
};

export default Roadmap;