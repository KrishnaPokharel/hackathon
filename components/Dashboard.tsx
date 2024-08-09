import React, { useState } from "react";
import Image from "next/image";
import { Star, MoveDown, Search, House, Contact } from "lucide-react";

const Dashboard = () => {
    const [openModal,setModal]=useState(false)
  return (
    <div className="">
        {
            openModal && (
                <></>
            )
        }
      <div className="image">
        <Image
          src="/dashboard.png"
          width={1000}
          height={1000}
          className="w-full h-auto"
          alt="dash"
        />
      </div>

      <div className="tab-section mb-10">
        <div className="flex justify-between">
          <div className="">
            <span className="border-b-2 pb-2 border-primary">Overview</span>
          </div>
          <div className="">
            <span className=" pb-2 ">Favourites</span>
          </div>

          <div className="">
            <span className=" pb-2 ">Vacant</span>
          </div>

          <div className="">
            <span className=" pb-2 ">Tenented</span>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <span className="text-lg">Hi Krishna Pokharel !</span>
      </div>
      <div className="p-3 border border-slate-200">
        <div className="">
          <span className="text-xl font-semibold">Your property Insights</span>

          <div className="tab flex mt-5 gap-x-10">
            <button className="px-5 py-2 bg-slate-400 rounded-[15px]">
              All
            </button>
            <button className="px-5 py-2 bg-slate-200 rounded-[15px]">
              For rent
            </button>
            <button className="px-5 py-2 bg-slate-200 rounded-[15px]">
              Rented out
            </button>
          </div>

          <div className="contents ">
            <div className="card p-5 mt-5 bg-red-100 rounded-[15px]">
              <div className="grid grid-cols-12 ">
                <div className="col-span-2">
                  <span className="px-4 py-3 rounded-[25px] bg-red-200">
                    Rented out
                  </span>
                </div>

                <div className="col-span-10">
                <div className="w-full header flex justify-between">
                <div className="">
                  <div>
                    <span className="text-xl font-semibold">
                      Residensi Jubilee, KUALA LUMPUR
                    </span>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex items-center text-black font-semibold">
                    <span className="text-xl">4.5</span>
                    <Star size={15} className="ml-1 text-yellow-500" />

                    <div className="ml-4">
                      <div className="flex items-center text-red-700">
                        {" "}
                        (<MoveDown size={14} />
                        3.3)
                      </div>
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="flex gap-x-20">
                    <div className="">
                      <Search />
                    </div>
                    <div className="flex items-center gap-x-2">
                      <House />{" "}
                      <span className="flex items-center">
                        3{" "}
                        <div className="ml-2 w-2 h-2 bg-red-700 rounded-full "></div>
                      </span>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <Contact /> <span className="flex items-center">0</span>
                    </div>
                  </div>
                </div>
                </div>
                <div className="mt-5">
                    <p className="">Oops ! The rating of this property drops . Click to learn how to improve your rating</p>
                </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
