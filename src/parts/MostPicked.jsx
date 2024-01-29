import React from "react";
import img1 from "/images/image-mostpicked-1.jpg";
import img2 from "/images/image-mostpicked-2.jpg";
import img3 from "/images/image-mostpicked-3.jpg";
import img4 from "/images/image-mostpicked-4.jpg";
import img5 from "/images/image-mostpicked-5.jpg";

export default function MostPicked() {
    return (
        <>
            <section>
                <div className="font-poppins font-semibold pt-28">
                    <h2>Most Picked</h2>
                </div>
                <div className="pt-5 grid md:grid-cols-2 md:gap-5">
                    <div>
                        <img src={img1} className="w-full h-96 object-cover rounded-xl md:w-full md:h-96 md:bg-cover lg:w-full " alt="" />
                    </div>
                    <div className="flex flex-col gap-5 mt-5 md:mt-0 md:grid md:grid-cols-2">
                        <div>
                            <img src={img2} className="md:bg-cover md:h-full" alt="" />
                        </div>
                        <div>
                            <img src={img3} className="md:bg-cover md:h-full" alt="" />
                        </div>
                        <div>
                            <img src={img4} className="md:bg-cover md:h-full" alt="" />
                        </div>
                        <div>
                            <img src={img5} className="md:bg-cover md:h-full" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
