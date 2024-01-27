import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import BrandIcon from "./IconText";
import Button from "../components/Button/Button";

export default function Header(props) {
    const [humburgerMenu, setHumburgerMenu] = useState(false);

    const getNavLinkClass = (path) => {
        return props.location === path ? "active" : "";
    };

    return (
        <>
            <header className="relative border-b-[1px] py-5 px-5 flex justify-between lg:px-32">
                <div className="text-2xl">
                    <BrandIcon />
                </div>
                <nav className="hidden sm:block">
                    <ul className="flex sm:gap-5">
                        <li className={`${getNavLinkClass("/")}`}>
                            <Button className="text-[#152c5b]" type="link" href="/">
                                Home
                            </Button>
                        </li>
                        <li className={`${getNavLinkClass("/browse-by")}`}>
                            <Button className="text-[#152c5b]" type="link" href="/browse-by">
                                Browse By
                            </Button>
                        </li>
                        <li className={`${getNavLinkClass("/stories")}`}>
                            <Button className="text-[#152c5b]" type="link" href="/stories">
                                Stories
                            </Button>
                        </li>
                        <li className={`${getNavLinkClass("/agents")}`}>
                            <Button className="text-[#152c5b]" type="link" href="/agents">
                                Agents
                            </Button>
                        </li>
                    </ul>
                </nav>
                <div className="cursor-pointer sm:hidden">
                    <FiMenu size={25} onClick={() => setHumburgerMenu(true)} />
                </div>

                {/* Responsive Sidebar */}
                {humburgerMenu ? (
                    <div className="fixed w-full transition duration-300 h-screen bg-black/70 left-0 top-0 z-10">
                        <div className="relative w-[250px] h-screen bg-white z-10 " onClick={() => setHumburgerMenu(false)}>
                            <IoMdClose size={25} className="absolute right-4 top-6 cursor-pointer" />
                            <div className="pt-6 pb-4 px-6 border-b-[1px] text-xl">
                                <BrandIcon />
                            </div>
                            <nav className="px-5 mt-8">
                                <ul className="flex flex-col gap-y-5 text-xs">
                                    <li className={`border-b-2 pb-2 ${getNavLinkClass("/")}`}>
                                        <Button className="text-[#152c5b] " type="link" href="/">
                                            Home
                                        </Button>
                                    </li>
                                    <li className={`border-b-2 pb-2 ${getNavLinkClass("/browse-by")}`}>
                                        <Button className="text-[#152c5b]" type="link" href="/browse-by">
                                            Browse By
                                        </Button>
                                    </li>
                                    <li className={`border-b-2 pb-2 ${getNavLinkClass("/stories")}`}>
                                        <Button className="text-[#152c5b]" type="link" href="/stories">
                                            Stories
                                        </Button>
                                    </li>
                                    <li className={`${getNavLinkClass("/agents")}`}>
                                        <Button className="text-[#152c5b]" type="link" href="/agents">
                                            Agents
                                        </Button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                ) : (
                    ""
                )}
            </header>
        </>
    );
}
