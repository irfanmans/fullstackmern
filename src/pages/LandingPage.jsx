import React from "react";
import Header from "../parts/Header";
import landingPage from "../json/landingPage.json";
import Hero from "../parts/Hero";
import MostPicked from "../parts/MostPicked";

export default function LandingPage(props) {
    return (
        <>
            <Header {...props}></Header>
            <div className="px-5 lg:px-32">
                <Hero data={landingPage.hero} />
                <MostPicked />
            </div>
        </>
    );
}
