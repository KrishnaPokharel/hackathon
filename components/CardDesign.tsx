"use client";
import React, { useEffect } from "react";
import { Star, Heart, Building, Bed } from "lucide-react";
import useAuthFetch from "@/customhooks/AuthFetch";
import Link from "next/link";

const CardDesign = () => {
  const authFetch = useAuthFetch();
  const loadData = async () => {
    try {
        const response = await authFetch('https://www.zohoapis.com/crm/v6/Bytebricks_Activities?')
        console.log(response)
    } catch (error) {}
  };
  useEffect(() => {
    loadData()
  });

  return (
    <div className="grid grid-cols-4 gap-x-10">
      <Link href={"/property-detail"}>
        <div className="shadow-md">
          {/* image */}
          <div className="grid grid-rows-2 grid-cols-2 h-52 relative">
            <div className="absolute flex items-center font-semibold bg-black bg-opacity-35 top-2 right-2 p-1 rounded-[15px]">
              <span>4.5</span>
              <Star size={15} className="ml-1" />
            </div>
            <div className="bg-red-500 row-span-2"></div>
            <div className="row-span-1 bg-yellow-500"></div>
            <div className="row-span-1 bg-green-500 grid grid-cols-2">
              <div className="bg-green-600"></div>
              <div className="bg-green-400"></div>
            </div>
          </div>

          <div className="content mt-5 p-3">
            <div className="header flex justify-between items-center">
              <div className="">
                <span className="text-[22px] font-bold">RM 1900</span>
              </div>
              <div className="flex gap-x-5 items-center">
                <button className="p-2 text-[14px] bg-black text-white rounded-[25px]">
                  Chat with owner
                </button>
                <Heart />
              </div>
            </div>
            <div className="mid mt-5">
              <span>Whole unit</span>
            </div>

            <div className="mid-bottom mt-5">
              <span className="text-[20px] inline-block font-bold">
                Residensi Jubilee, KUALA LUMPUR
              </span>
              <span className="inline-block pt-2 text-slate-600 font-[15px]">
                Full furnished | 1205 sqft
              </span>
            </div>

            <div className="bottom flex justify-between mt-5">
              <div className="flex items-center gap-x-2 text-slate-600 ">
                <Building size={20} />
                <span>High rise</span>
              </div>

              <div className="flex items-center gap-x-2 text-slate-600 ">
                <Bed size={20} />
                <span>2</span>
              </div>

              <div className="flex items-center gap-x-2 text-slate-600 ">
                <Bed size={20} />

                <span>2</span>
              </div>

              <div className="flex items-center gap-x-2 text-slate-600 ">
                <Bed size={20} />

                <span>2</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardDesign;
