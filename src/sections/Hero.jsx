import { useState } from "react";
import { bigShoe1 } from "../assets/images";
import { shoes, statistics } from "../constants";

const Hero = () => {

    const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

    return (
        <section
            id="home"
            className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
        >
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
                <p className="text-xl font-montserrat text-coral-red">Lakhs of Teens and Companies love Funngro</p>
                <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
                    <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">Earn your</span>
                    <span className="text-coral-red inline-block mt-2">income</span>
                </h1>
                <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
                    Preparing them for professional world by doing Real work for Real companies and getting Real money
                </p>
                {/*<Button label="Download A" iconURL={arrowRight}/>*/}
                <div className={"flex gap-2"}>
                    <a target={"_blank"} href={"https://play.google.com/store/apps/details?id=com.wishbanc.funngro"}>
                        <img
                            src={"https://assets-global.website-files.com/638b48215fd2fd34538fa6bc/638c80744c238bae49b47ff4_image%2027.png"}
                            alt="arrow right icon"
                            className="ml-2 rounded-sm w-full h-full"
                        />
                    </a>
                    <a target={"_blank"} href={"https://apps.apple.com/in/app/funngro/id1579361075"}>
                        <img
                            src={"https://assets-global.website-files.com/638b48215fd2fd34538fa6bc/638c80746a8a27189ca05fb9_image%2029.png"}
                            alt="arrow right icon"
                            className="ml-2 rounded-sm w-full h-full"
                        />
                    </a>
                </div>
                <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
                    {
                        statistics.map((stat) => (
                            <div key={stat.label}>
                                <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
                                <p className="leading-7 font-montserrat text-slate-gray font-semibold">{stat.label}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div
                className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
                <img
                    src={bigShoeImg}
                    alt="Shoe Collection"
                    width={610}
                    height={500}
                    className="object-contain relative z-10"
                />
            </div>
        </section>
    )
}

export default Hero;
