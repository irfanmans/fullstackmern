import React from "react";
import Button from "../components/Button/Button";
import Banner from "/images/Banner.png";
import IconCities from "/icons/IconCity.svg";
import iconTraveler from "/icons/IconTraveler.svg";
import iconTreasure from "/icons/IconTreasure.svg";
import formatNumber from "../utils/formatNumber";

export default function Hero({ data, refMostPicked }) {
    const showMostPicked = () => {
        window.scrollTo({
            top: refMostPicked.current.offsetTop - 30,
            behavior: "smooth",
        });
    };

    return (
        <>
            <section className="pt-14 md:grid md:grid-cols-2 md:gap-10 lg:flex lg:justify-between lg:items-center">
                <div className="lg:max-w-[550px]">
                    <h1 className="font-bold font-poppins text-2xl text-[#152c5b] leading-8 lg:text-4xl">
                        Forget Busy Work, <br />
                        Start Next Vacation
                    </h1>
                    <p className="font-poppins text-xs mt-3 leading-5 text-[#5D5D5D] lg:text-base lg:leading-7">
                        We provide what you need to enjoy your holiday with family. Time to make another memorable moments. Your money can return, but your time is not
                    </p>
                    <Button className="py-2 px-10 mt-4 rounded-md font-poppins hover:bg-blue-600 hover:duration-300 hover:scale-105" hasShadow isPrimary onClick={showMostPicked}>
                        Show Me
                    </Button>
                    <div className="max-w-[300px] grid grid-cols-3 gap-4 mt-10 lg:max-w-[340px]">
                        <div>
                            <img src={IconCities} width={30} height={30} alt={`${data.cities} Cities`} />
                            <h1 className="font-bold font-poppins text-xs mt-2">
                                {formatNumber(data.cities)}
                                <span className="font-light mx-1">location</span>
                            </h1>
                        </div>
                        <div>
                            <img src={iconTreasure} width={30} height={30} alt={`${data.treasures} Treasure`} />
                            <h1 className="font-bold font-poppins text-xs mt-2">
                                {formatNumber(data.treasures)}
                                <span className="font-light mx-1">treasure</span>
                            </h1>
                        </div>
                        <div>
                            <img src={iconTraveler} width={30} height={30} alt={`${data.travelers} Travelers`} />
                            <h1 className="font-bold font-poppins text-xs mt-2">
                                {formatNumber(data.travelers)}
                                <span className="font-light mx-1">travelers</span>
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="mt-16 max-w-full md:mt-0 lg:max-w-[550px]">
                    <img src={Banner} />
                </div>
            </section>
        </>
    );
}
