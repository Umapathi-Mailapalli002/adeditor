import Image from "next/image";
import { EditIconComp } from "./index";

interface BannerProps {
    title: string;
    description: string;
    image: string;
    CTA: string;
    bannerTemplate: string;
    id:any;
    
}

export function Banner1({
    title,
    description,
    image,
    CTA,
    bannerTemplate,
    id,
}: BannerProps) {
    return (
        <div>
            <div style={{
                backgroundImage: `url(${bannerTemplate})`, backgroundPosition: "center",

                backgroundRepeat: "no-repeat",
            }} className="mt-5 bg-cover w-[350px] h-[350px]">
                <div className="bg-[#00000046] w-[350px] h-[350px] absolute"></div>

                <div className="absolute ml-[303px]">
                    <EditIconComp id={id}/>

                </div>
                <div className="h-20 flex mx-auto items-end w-[80%]">
                    <h1 className="text-white font-extrabold text-2xl text-center relative h-16 overflow-clip ">
                        {title}
                    </h1>
                </div>
                <div className="mb-2 w-[80%] mx-auto">
                    <p className=" text-sm leading-[20px]  text-white h-[60px] overflow-clip">
                        {description}
                    </p>
                </div>
                <div className="mx-auto w-[250px]">
                    <Image width={250} height={142} alt="image" className="h-[142px] w-[250px] border-white border-[5px] mt-3 mx-auto bg-cover" src={image} />
                    <div className="flex w-full h-5">
                        <button className="font-extrabold flex justify-between items-center w-full bg-orange-400 pl-2">
                            {CTA} <span className="mr-3 -mt-1 text-black text-xl">&rarr;</span>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export function Banner2({
    title,
    description,
    image,
    CTA,
    bannerTemplate,
    id,
}: BannerProps
) {

    return (
        <>
            <div>

                <div style={{
                    backgroundImage: `url(${bannerTemplate})`, backgroundPosition: "center",

                    backgroundRepeat: "no-repeat",
                }} className="mt-5 bg-cover w-[350px] h-[350px] overflow-clip">
                    <div className="bg-[#00000046] w-[350px] h-[350px] absolute"></div>
                    <div className="absolute ml-[303px]">
                        <EditIconComp id={id}/>

                    </div>
                    <div className="flex items-end w-[78%] ml-5">
                        <h1 className="text-black font-extrabold mt-4 text-2xl text-center relative h-16 overflow-clip">
                            {title}
                        </h1>
                    </div>
                    <div className="mt-2 w-[80%] ml-2">
                        <p className="text-left text-sm leading-[20px] h-[60px]  text-black">
                            {description}
                        </p>
                    </div>
                    <div className="overflow-clip">
                        <Image width={240} height={240} alt="image" className=" h-[240px] border-white border-[5px] w-[240px] rounded-full  -mt-4 ml-[170px] bg-cover" src={image} />

                    </div>
                    <div className="flex w-36 -mt-24 justify-center">
                        <button className="font-extrabold w-24 p-1 rounded-md text-yellow-500 bg-gray-800 ">
                            {CTA}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
