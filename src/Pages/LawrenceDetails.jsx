import React from "react";
import Lawrence from "../assets/lawrence.png";

const LawrenceDetails = () => {
    return (
        <div className="min-h-screen flex justify-center items-start py-8 px-4 ">
            <div className="w-full max-w-md bg-[#f5f5f5] shadow-xl rounded-xl overflow-hidden">
                {/* Image */}
                <img
                    src={Lawrence}
                    alt="Lawrence"
                    className="w-full h-[400px] sm:h-[500px] object-cover"
                />

                {/* Stats with smooth pop-in animation */}
                <div className="overflow-hidden bg-[#222222] text-white text-sm  font-semibold">
                    <div className="animate-slide-in whitespace-nowrap px-4 py-2">
                        BYD Iloilo
                    </div>
                </div>



                {/* Title */}
                <div className="px-4 py-4 text-[#222222]">
                    <div className="flex flex-col sm:flex-row sm:justify-between">
                        <p className="text-lg font-bold">LAWRENCE ANDREW ARRE</p>
                        <p className="text-xs font-semibold whitespace-nowrap">MEDIA MANAGER</p>
                    </div>
                </div>

             

                {/* Details */}
                <div className="px-4 py-4 space-y-1 text-[#222222]">
                    <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xs font-bold whitespace-nowrap">DETAILS</h3>
                        <div className="flex-grow h-px bg-[#434343]"></div>
                    </div>
                    {[
                        ["Email", "lawrenceandrew.byd@gmail.com"],
                        ["Birthdate", "27 June 2002"],
                        ["Address", "San Rafael, Iloilo"],
                        ["Contact No.", "0993 778 1247"],
                        ["SSS", "--"],
                        ["PHIC", "--"],
                        ["HDMF", "--"],
                    ].map(([label, value], idx) => (
                        <div
                            key={idx}
                            className="flex justify-between text-sm text-[#222222]"
                        >
                            <span >{label}</span>
                            <span>{value}</span>
                        </div>
                    ))}
                </div>

                {/* Emergency Contact */}
                <div className="px-4 py-4 text-[#222222]">
                    <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xs font-bold whitespace-nowrap">EMERGENCY CONTACT</h3>
                        <div className="flex-grow h-px bg-[#434343]"></div>
                    </div>

                    <div className="flex justify-between text-sm text-[#222222]">
                        <p >Ma. Lorena Arre</p>
                        <p>0930 501 3102</p>
                    </div>

                </div>

      
            </div>
        </div>
    );
};

export default LawrenceDetails;
