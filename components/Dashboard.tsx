"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Star, MoveDown, Search, House, Contact, CircleX } from "lucide-react";

const Dashboard = () => {
  const [openModal, setModal] = useState(false);
  const [tab, setTab] = useState("property");
  const [tabActive, setTabActive] = useState("conditions");
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  return (
    <div className="">
      {openModal && (
        <>
          <div
            className="relative z-10"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
            ></div>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              .
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-[50%]">
                  <div
                    className="absolute top-2 right-2 cursor-pointer"
                    onClick={(e) => setModal(false)}
                  >
                    <CircleX />
                  </div>
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <span className="text-2xl">Property Insights</span>

                    <div className="mt-4 border-slate-200 border p-2">
                      <div className="col-span-10">
                        <div className="w-full header flex justify-between">
                          <div className="">
                            <div>
                              <span className="text-xl font-semibold">
                                Residensi Jubilee, KUALA LUMPUR
                              </span>

                              <div className="mt-10">
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
                                    <Contact />{" "}
                                    <span className="flex items-center">0</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex">
                            <div className="flex items-center text-black font-semibold">
                              <span className="text-xl">4.5</span>
                              <Star
                                size={15}
                                className="ml-1 text-yellow-500"
                              />

                              <div className="ml-4">
                                <div className="flex items-center text-red-700">
                                  {" "}
                                  (<MoveDown size={14} />
                                  3.3)
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 border-slate-200 border p-2">
                      <span className="text-lg">Breakdown of the rating</span>

                      <div className="mt-4">
                        <div className="grid grid-cols-2 gap-x-10">
                          <div
                            className={
                              tab === "property"
                                ? "bg-slate-300 cursor-pointer p-2"
                                : "bg-slate-100 cursor-pointer p-2"
                            }
                            onClick={(e) => setTab("property")}
                          >
                            <div className="flex items-center justify-between">
                              <span>Property rating</span>
                              <div className="flex items-center  text-black font-semibold">
                                <span className="text-lg">4.5</span>
                                <Star
                                  size={20}
                                  className="ml-1 text-yellow-500"
                                />
                              </div>
                            </div>
                            <div className="px-2">
                              <div className="flex justify-between my-2">
                                <span className="text-sm">Conditions</span>
                                <div className="flex items-center text-black font-semibold">
                                  <span className="text-sm">4.5</span>
                                  <Star
                                    size={15}
                                    className="ml-1 text-yellow-500"
                                  />
                                </div>
                              </div>

                              <div className="flex justify-between my-2">
                                <span className="text-sm">Ammenities</span>
                                <div className="flex items-center text-black font-semibold">
                                  <span className="text-sm">4.5</span>
                                  <Star
                                    size={15}
                                    className="ml-1 text-yellow-500"
                                  />
                                </div>
                              </div>

                              <div className="flex justify-between my-2">
                                <span className="text-sm">Utilities</span>
                                <div className="flex items-center text-black font-semibold">
                                  <span className="text-sm">4.5</span>
                                  <Star
                                    size={15}
                                    className="ml-1 text-yellow-500"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className=""></div>
                          </div>

                          <div
                            className={
                              tab === "building"
                                ? "bg-slate-300 cursor-pointer p-2"
                                : "bg-slate-100 cursor-pointer p-2"
                            }
                            onClick={(e) => setTab("building")}
                          >
                            <div className="flex items-center justify-between">
                              <span>Building rating</span>
                              <div className="flex items-center  text-black font-semibold">
                                <span className="text-lg">4.5</span>
                                <Star
                                  size={20}
                                  className="ml-1 text-yellow-500"
                                />
                              </div>
                            </div>
                            <div className="px-2">
                              <div className="flex justify-between my-2">
                                <span className="text-sm">Conditions</span>
                                <div className="flex items-center text-black font-semibold">
                                  <span className="text-sm">4.5</span>
                                  <Star
                                    size={15}
                                    className="ml-1 text-yellow-500"
                                  />
                                </div>
                              </div>

                              <div className="flex justify-between my-2">
                                <span className="text-sm">Ammenities</span>
                                <div className="flex items-center text-black font-semibold">
                                  <span className="text-sm">4.5</span>
                                  <Star
                                    size={15}
                                    className="ml-1 text-yellow-500"
                                  />
                                </div>
                              </div>

                              <div className="flex justify-between my-2">
                                <span className="text-sm">Utilities</span>
                                <div className="flex items-center text-black font-semibold">
                                  <span className="text-sm">4.5</span>
                                  <Star
                                    size={15}
                                    className="ml-1 text-yellow-500"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {tab === "property" && (
                          <div className="mt-8">
                            <div className="">
                              <span className="text-lg">Property</span>
                            </div>
                            <div className="mt-3">
                              <span>Inspection reports</span>
                            </div>
                            <div className="tab_buttons flex gap-x-5 mt-4 items-center">
                              <button
                                className={
                                  tabActive === "conditions"
                                    ? "bg-primary rounded-[25px] p-3"
                                    : "bg-slate-300  rounded-[25px] p-3"
                                }
                                onClick={(e) => setTabActive("conditions")}
                              >
                                Conditions
                              </button>
                              <button
                                className={
                                  tabActive === "ammenities"
                                    ? "bg-primary rounded-[25px] p-3"
                                    : "bg-slate-300  rounded-[25px] p-3"
                                }
                                onClick={(e) => setTabActive("ammenities")}
                              >
                                Ammenities
                              </button>
                              <button
                                className={
                                  tabActive === "utilities"
                                    ? "bg-primary rounded-[25px] p-3"
                                    : "bg-slate-300  rounded-[25px] p-3"
                                }
                                onClick={(e) => setTabActive("utilities")}
                              >
                                Utilities
                              </button>
                            </div>

                            {tabActive === "conditions" && (
                              <div className="grid grid-cols-2  gap-x-5">
                                <div className="flex items-center my-4">
                                  <div className="w-5 h-5 bg-green-500 rounded-full"></div>
                                  <div className="ml-3">
                                    <span>
                                      Noise level is accecptable range
                                    </span>
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
                            )}

                            {/* review sections */}
                            <div className="mt-5">
                              <span className="text-xl">Reviews (3)</span>

                              <div className="content mt-5">
                                <div className="card p-4 border my-4">
                                  <div className="grid grid-cols-12 gap-x-10">
                                    {/* image */}
                                  <div className="col-span-1">
                                  <div className="w-16 flex justify-center items-center h-16 bg-blue-600 text-white rounded-full">
                                      BB
                                    </div>
                                  </div>
                                    {/* content */}
                                    <div className="col-span-11 pl-3">
                                      <div className="flex justify-between w-full">
                                        <div className="">
                                          <span className="text-xl">
                                            Bishap Bhusal
                                          </span>
                                          <div className="flex items-center gap-x-2">
                                            <House size={14} />{" "}
                                            <span className="flex items-center text-sm">
                                              Viewing
                                              {/* <div className="ml-2 w-2 h-2 bg-red-700 rounded-full "></div> */}
                                            </span>
                                          </div>
                                        </div>
                                        <div className="">
                                            {//@ts-ignore  
                                            new Intl.DateTimeFormat('en-GB', options).format(new Date()).toUpperCase()
                                            }
                                        </div>
                                      </div>

                                      <p className="pt-3 text-lg">Air Conditioners is not working properly . How to live in malaysia without Air conditioners?</p>
                                    </div>
                                  </div>
                                </div>

                                <div className="card p-4 border my-4">
                                  <div className="grid grid-cols-12 gap-x-10">
                                    {/* image */}
                                  <div className="col-span-1">
                                  <div className="w-16 flex justify-center items-center h-16 bg-yellow-600 text-white rounded-full">
                                      BR
                                    </div>
                                  </div>
                                    {/* content */}
                                    <div className="col-span-11 pl-3">
                                      <div className="flex justify-between w-full">
                                        <div className="">
                                          <span className="text-xl">
                                            Binaya Rijal
                                          </span>
                                          <div className="flex items-center gap-x-2">
                                            <House size={14} />{" "}
                                            <span className="flex items-center text-sm">
                                              Viewing
                                              {/* <div className="ml-2 w-2 h-2 bg-red-700 rounded-full "></div> */}
                                            </span>
                                          </div>
                                        </div>
                                        <div className="">
                                            {//@ts-ignore  
                                            new Intl.DateTimeFormat('en-GB', options).format(new Date()).toUpperCase()
                                            }
                                        </div>
                                      </div>

                                      <p className="pt-3 text-lg">I have a complaint of AC and I am not able to use AC . After maintaining it , You can contact me</p>
                                    </div>
                                  </div>
                                </div>


                                <div className="card p-4 border my-4">
                                  <div className="grid grid-cols-12 gap-x-10">
                                    {/* image */}
                                  <div className="col-span-1">
                                  <div className="w-16 flex justify-center items-center h-16 bg-green-600 text-white rounded-full">
                                      KP
                                    </div>
                                  </div>
                                    {/* content */}
                                    <div className="col-span-11 pl-3">
                                      <div className="flex justify-between w-full">
                                        <div className="">
                                          <span className="text-xl">
                                            Krishna Pokharel
                                          </span>
                                          <div className="flex items-center gap-x-2">
                                            <House size={14} />{" "}
                                            <span className="flex items-center text-sm">
                                              Viewing
                                              {/* <div className="ml-2 w-2 h-2 bg-red-700 rounded-full "></div> */}
                                            </span>
                                          </div>
                                        </div>
                                        <div className="">
                                            {//@ts-ignore  
                                            new Intl.DateTimeFormat('en-GB', options).format(new Date()).toUpperCase()
                                            }
                                        </div>
                                      </div>

                                      <p className="pt-3 text-lg">I like the property so much . Please accept me as tenant on your property</p>
                                    </div>
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
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
            <div
              className="card cursor-pointer p-5 mt-5 bg-red-100 rounded-[15px]"
              onClick={(e) => setModal(true)}
            >
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
                          <Contact />{" "}
                          <span className="flex items-center">0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5">
                    <p className="">
                      Oops ! The rating of this property drops . Click to learn
                      how to improve your rating
                    </p>
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
