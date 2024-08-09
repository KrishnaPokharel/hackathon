import React from "react";
import Image from "next/image";
import { Globe,HousePlus } from "lucide-react";
import Link from "next/link";


const Navigation = () => {
    const navlink = [
        {
            name:"Landlord",
            link:"/landlord"
        },
        {
            name:"Rent",
            link:"/rent"
        },
        {
            name:"Learn",
            link:"/landlord"
        },
        {
            name:"Benifits",
            link:"/benifits"
        },
        {
            name:"More",
            link:"/more"
        },
        {
            name:"Dashboard",
            link:"/dashboard"
        }
    ]
    return (
        <div className="bg-[#ffe100] justify-between items-center flex global_padding !py-4">
             {/* logo */}
             <div className="left_section flex">

             <div className="w-[150px]">
                <Image src={'/LOGO - SPEEDHOME.svg'} width={1000} height={1000} className="w-full h-full" alt="logo"/>
             </div>

             <div className="nav-links ml-7 flex">
                {
                    navlink.map((item,index)=>{


                        return(
                            <div className="nav_data mx-3 font-semibold text-lg">
                                <Link href="/dashboard">
                                {item.name}
                                </Link>
                            </div>
                        )
                    })
                }
             </div>
             </div>

             <div className="right_section flex gap-x-5">
                <div className="language flex items-center font-semibold">
                <Globe size={22}/>
                <span className="mx-2">EN</span>
                </div>

                <div className="">
                    <button className="p-[10px] font-bold flex text-white bg-[#4885ed] rounded-[25px]">
                    <HousePlus className="mr-3"/>
                        <span>Post Property Free</span>
                    </button>
                </div>

                <div className="whatsapp w-10 relative">
                    <Image src={'/whatsapp_icon.svg'} width={1000} height={1000} className="w-full h-full" alt="whatsapp"/>
                    <div className="absolute bg-[#4885ed] -top-1 left-5 text-white text-xs p-[2px] rounded-sm">
                        New
                    </div>
                </div>
             </div>
        </div>
    );
};

export default Navigation;