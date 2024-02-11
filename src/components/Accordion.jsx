import React from 'react'
import { Accordion, AccordionHeader, AccordionBody, } from "@material-tailwind/react";

function OpenSign({ id, open }) {
    return (
        <div className="relative">
            <span className='w-[36px] h-[36px] bg-white rounded-full flex justify-center items-center'>
                <svg className={`${id === open ? "rotate-180" : "rotate-0"} h-5 w-5 transition-transform`} width="16" height="9" viewBox="0 0 16 9" fill="#0A4740" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 8.2984L0.852578 1.26265L2.18797 0.605389L7.64924 5.98133L8 6.3266L8.35076 5.98133L13.812 0.605389L15.1474 1.26265L8 8.2984Z" fill="#0A4740" stroke="#0A4740" />
                </svg>
            </span>
        </div>
    );
}

const Accordian = () => {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    return (
        <>
            <div className='relative z-1 xl:mt-[290px] mt-[80px] sm:mt-0'>
                <div className='max-w-[801px] mx-auto px-3'>
                    <div className='mb-[240px]'>
                        <h2 className='text-[50px] sm:text-[64px] ff_chewy font-normal leading-[87%] text-center pb-[60px] text-white' id='Faq'>FAQs</h2>
                        <Accordion className=" justify-between bg-[#09655A] pr-[12px] pl-[10px] sm:pr-[32px] sm:pl-7  border-[white] border mb-4 sm:mb-8 rounded-[40.6px]" open={open === 1} icon={<OpenSign id={1} open={open} />}                >
                            <AccordionHeader onClick={() => handleOpen(1)} className="ff_Balsamiq font-bold py-[15px] sm:py-[22px] px-5 sm:text-[20px] text-[14px] text-start text-white leading-[130%] border-transparent" >  Maecenas laoreet, sapien vel cursus ultricies? </AccordionHeader>
                            <AccordionBody className="ff_Balsamiq max-sm:text-[13px] md:text-[16px] font-medium px-5 pb-4 leading-[160%] text-[#CCD0D1] max-w-[880px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis totam, non facere architecto excepturi fugiat deserunt, illo magni at asperiores, harum tempora dignissimos placeat est delectus dolorem magnam quidem dolores!</AccordionBody>
                        </Accordion>
                        <Accordion className=" justify-between bg-[#09655A] pr-[12px] pl-[10px] sm:pr-[32px] sm:pl-7  border-[white] border mb-4 sm:mb-8 rounded-[40.6px]  overflow-hidden" open={open === 2} icon={<OpenSign id={2} open={open} />} >
                            <AccordionHeader onClick={() => handleOpen(2)} className="ff_Balsamiq font-bold py-[15px] sm:py-[22px] px-5 sm:text-[20px] text-[14px] text-start text-white leading-[130%] border-transparent">   Maecenas laoreet, sapien vel cursus ultricies? </AccordionHeader>
                            <AccordionBody className="ff_Balsamiq max-sm:text-[13px] md:text-[16px] font-medium leading-[160%] px-5 pb-4 text-[#CCD0D1] max-w-[880px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis totam, non facere architecto excepturi fugiat deserunt, illo magni at asperiores, harum tempora dignissimos placeat est delectus dolorem magnam quidem dolores!</AccordionBody>
                        </Accordion>
                        <Accordion className=" justify-between bg-[#09655A] pr-[12px] pl-[10px] sm:pr-[32px] sm:pl-7  border-[white] border mb-4 sm:mb-8 rounded-[40.6px]" open={open === 3} icon={<OpenSign id={3} open={open} />}>
                            <AccordionHeader onClick={() => handleOpen(3)} className="ff_Balsamiq font-bold py-[15px] sm:py-[22px] px-5 sm:text-[20px] text-[14px] text-start text-white leading-[130%] border-transparent" >  Maecenas laoreet, sapien vel cursus ultricies? </AccordionHeader>
                            <AccordionBody className="ff_Balsamiq max-sm:text-[13px] md:text-[16px] font-medium leading-[160%] px-5 text-[#CCD0D1] max-w-[880px] pb-4 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis totam, non facere architecto excepturi fugiat deserunt, illo magni at asperiores, harum tempora dignissimos placeat est delectus dolorem magnam quidem dolores!</AccordionBody>
                        </Accordion>
                        <Accordion className=" justify-between bg-[#09655A] pr-[12px] pl-[10px] sm:pr-[32px] sm:pl-7  border-[white] border mb-4 sm:mb-8 rounded-[40.6px]" open={open === 4} icon={<OpenSign id={4} open={open} />}>
                            <AccordionHeader onClick={() => handleOpen(4)} className="ff_Balsamiq font-bold text-[14px] py-[15px] sm:py-[22px] px-5 sm:text-[20px] text-start text-white leading-[130%] border-transparent">  Maecenas laoreet, sapien vel cursus ultricies? </AccordionHeader>
                            <AccordionBody className="ff_Balsamiq max-sm:text-[13px] md:text-[16px] font-medium leading-[160%] px-5 text-[#CCD0D1] max-w-[880px] pb-4 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis totam, non facere architecto excepturi fugiat deserunt, illo magni at asperiores, harum tempora dignissimos placeat est delectus dolorem magnam quidem dolores!</AccordionBody>
                        </Accordion>
                        <Accordion className=" justify-between bg-[#09655A] pr-[12px] pl-[10px] sm:pr-[32px] sm:pl-7  border-[white] border mb-4 sm:mb-8 rounded-[40.6px] " open={open === 5} icon={<OpenSign id={5} open={open} />}>
                            <AccordionHeader onClick={() => handleOpen(5)} className="ff_Balsamiq font-bold  py-[15px] sm:py-[22px] px-5 sm:text-[20px] text-[14px] text-start text-white leading-[130%] border-transparent">  Maecenas laoreet, sapien vel cursus ultricies? </AccordionHeader>
                            <AccordionBody className="ff_Balsamiq max-sm:text-[13px] md:text-[16px] px-5 font-medium leading-[160%] text-[#CCD0D1] max-w-[880px] pb-4 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis totam, non facere architecto excepturi fugiat deserunt, illo magni at asperiores, harum tempora dignissimos placeat est delectus dolorem magnam quidem dolores!</AccordionBody>
                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Accordian