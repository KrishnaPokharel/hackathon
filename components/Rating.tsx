"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Star, BadgeCheck, CircleX, CircleHelp } from "lucide-react";

const Rating = () => {
  const [extentContent, setExtentContent] = useState(false);
  const [active, setActive] = useState("property");
  const [tabActive,setTabActive] = useState("conditions")
  
  return (
    <div className="mt-4">
      {!extentContent ? (
        <div
          className="border border-slate-300 p-3 flex justify-between items-center cursor-pointer"
          onClick={(e) => setExtentContent(true)}
        >
          <div className="flex-1">
            <p className="text-sm text-gray-700">
              One of the top rated properties according to tenant feedback and
              professional inspections
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center text-black font-semibold">
              <span className="text-2xl">4.5</span>
              <Star size={20} className="ml-1 text-yellow-500" />
            </div>
            <div className="flex items-center bg-green-600 p-2 rounded-full text-white text-sm">
              <BadgeCheck size={20} color="#fff" />
              <span className="ml-2">Verified by Speedhome</span>
            </div>
          </div>
        </div>
      ) : (
        <div className=" border border-slate-300 p-3 relative">
          <div
            className="absolute top-1 right-1 cursor-pointer"
            onClick={(e) => setExtentContent(false)}
          >
            <CircleX size={18} />
          </div>

          <div className="">
            <div className="grid gap-x-10 grid-cols-12">
              <div className="col-span-4 px-2  border-r border-slate-400">
                <div className="rating flex flex-col items-center">
                  <div className="flex items-center text-black font-semibold">
                    <span className="text-3xl">4.5</span>
                    <Star size={30} className="ml-1 text-yellow-500" />
                  </div>
                  <div className="flex items-center bg-green-600 mt-2 p-2 rounded-full text-white text-sm">
                    <BadgeCheck size={20} color="#fff" />
                    <span className="ml-2">Verified by Speedhome</span>
                  </div>
                  .
                </div>

                <div className="tab_section">
                  {/* tab buttons */}
                  <div
                    className={
                      active === "property"
                        ? "bg-slate-200 cursor-pointer  flex justify-between rounded-[15px] p-2"
                        : "bg-slate-100 cursor-pointer flex justify-between rounded-[15px] p-2"
                    }
                    onClick={(e) => setActive("property")}
                  >
                    <div className="flex items-center">
                      <span>Property rating</span>
                      <CircleHelp size={15} className="ml-1" />
                    </div>
                    <div className="">
                      <div className="flex items-center text-black font-semibold">
                        <span className="text-lg">4.5</span>
                        <Star size={20} className="ml-1 text-yellow-500" />
                      </div>
                    </div>
                  </div>

                  {active === "property" && (
                    <div className="px-3 mt-2">
                      <div className="flex justify-between my-2">
                        <span className="text-sm">Conditions</span>
                        <div className="flex items-center text-black font-semibold">
                          <span className="text-sm">4.5</span>
                          <Star size={15} className="ml-1 text-yellow-500" />
                        </div>
                      </div>


                      <div className="flex justify-between my-2">
                        <span className="text-sm">Ammenities</span>
                        <div className="flex items-center text-black font-semibold">
                          <span className="text-sm">4.5</span>
                          <Star size={15} className="ml-1 text-yellow-500" />
                        </div>
                      </div>

                      <div className="flex justify-between my-2">
                        <span className="text-sm">Utilities</span>
                        <div className="flex items-center text-black font-semibold">
                          <span className="text-sm">4.5</span>
                          <Star size={15} className="ml-1 text-yellow-500" />
                        </div>
                      </div>

                    </div>
                  )}

                  <div
                    className={
                      active === "building"
                        ? "bg-slate-200 mt-5 cursor-pointer flex justify-between rounded-[15px] p-2"
                        : "bg-slate-100 mt-5 cursor-pointer flex justify-between rounded-[15px] p-2"
                    }
                    onClick={(e) => setActive("building")}
                  >
                    <div className="flex items-center">
                      <span>Building rating</span>
                      <CircleHelp size={15} className="ml-1" />
                    </div>
                    <div className="">
                      <div className="flex items-center text-black font-semibold">
                        <span className="text-lg">4.5</span>
                        <Star size={20} className="ml-1 text-yellow-500" />
                      </div>
                    </div>
                  </div>

                  {active === "building" && (
                    <div className="px-3 mt-2">
                      <div className="flex justify-between my-2">
                        <span className="text-sm">Conditions</span>
                        <div className="flex items-center text-black font-semibold">
                          <span className="text-sm">4.5</span>
                          <Star size={15} className="ml-1 text-yellow-500" />
                        </div>
                      </div>


                      <div className="flex justify-between my-2">
                        <span className="text-sm">Ammenities</span>
                        <div className="flex items-center text-black font-semibold">
                          <span className="text-sm">4.5</span>
                          <Star size={15} className="ml-1 text-yellow-500" />
                        </div>
                      </div>

                      <div className="flex justify-between my-2">
                        <span className="text-sm">Utilities</span>
                        <div className="flex items-center text-black font-semibold">
                          <span className="text-sm">4.5</span>
                          <Star size={15} className="ml-1 text-yellow-500" />
                        </div>
                      </div>

                    </div>
                  )}
                </div>
              </div>
              <div className="col-span-8 px-2">
{
    active === "property" && (
        <div>
            <span className="text-xl font-semibold block">About the property</span>
            <span className="text-2xl block mt-3">Inspection Report</span>

            <div className="tab_buttons flex gap-x-5 mt-3 items-center">
                <button className={tabActive === "conditions"?"bg-primary rounded-[25px] p-3":"bg-slate-300  rounded-[25px] p-3"} onClick={e=>setTabActive("conditions")}>Conditions</button>
                <button className={tabActive === "ammenities"?"bg-primary rounded-[25px] p-3":"bg-slate-300  rounded-[25px] p-3"} onClick={e=>setTabActive("ammenities")}>Ammenities</button>
                <button className={tabActive === "utilities"?"bg-primary rounded-[25px] p-3":"bg-slate-300  rounded-[25px] p-3"} onClick={e=>setTabActive("utilities")}>Utilities</button>

                
            </div>

            <div className="mt-8">
                {
                    tabActive === "conditions" && (
                        <div className="">
                            <div className="flex items-center my-4">
                                <div className="w-5 h-5 bg-green-500 rounded-full"></div>
                                <div className="ml-3">
                                    <span>Noise level is accecptable range</span>
                                </div>
                            </div>

                            <div className="flex items-center my-4">
                                <div className="w-5 h-5 bg-red-500 rounded-full"></div>
                                <div className="ml-3">
                                    <span>Poor condition of the house</span>
                                </div>
                            </div>

                            <div className="flex items-center my-4">
                                <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                                <div className="ml-3">
                                    <span>Air quality is poor</span>
                                </div>
                            </div>
                        </div>
                    )
                }

                {
                     tabActive === "ammenities" && (
                        <div className="">
                            No result found
                        </div>
                    )
                }

{
                     tabActive === "utilities" && (
                        <div className="">
                            No result found
                        </div>
                    )
                }
            </div>
        </div>
    )
}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rating;
