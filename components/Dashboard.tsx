"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Star, MoveDown, Search, House, Contact, CircleX } from "lucide-react";
import axios from "axios";

const Dashboard = () => {
  const [openModal, setModal] = useState(false);
  const [tab, setTab] = useState("property");
  const [tabActive, setTabActive] = useState("conditions");
  const options = { day: "numeric", month: "short", year: "numeric" };

  const [render, setRender] = useState(false);
  const [allData, setAllData] = useState<any>([]);
  const [summaryData, setSummaryData] = useState<any>([]);

  const loadData = async () => {
    try {
      const response = await Promise.all([
        axios({
          method: "get",
          headers: {
            Authorization: " X(3jPS@yD$xk@%9Tjr3(9n$B",
          },
          url: "https://flask-api.speedrent.com/zoho/get-data-from-zoho?module_name=Bytebricks_properties&param=erff",
          data: {},
        }),
      ]);
      if (response[0].status === 200) {
        let propertyNoiseCondition = 0;
        let DaytimeNoise = 0;
        let NighttimeNoise = 0;
        let totalNoise = 0;
        let AirQuality = 1;
        let propertyCleaniness = 0;
        let propertyOdor = 1;
        let Doorlock = 0;
        let wallClean = 0;
        let totalCondition = 0;
        let totalAmenities = 0;

        if (
          response[0].data.data[0].Property_condition_noise_level_day_time_In <
          30
        ) {
          DaytimeNoise = 5;
        } else if (
          response[0].data.data[0].Property_condition_noise_level_day_time_In >=
            30 &&
          response[0].data.data[0].Property_condition_noise_level_day_time_In <=
            40
        ) {
          DaytimeNoise = 4;
        } else if (
          response[0].data.data[0].Property_condition_noise_level_day_time_In >=
            41 &&
          response[0].data.data[0].Property_condition_noise_level_day_time_In <=
            50
        ) {
          DaytimeNoise = 3;
        } else if (
          response[0].data.data[0].Property_condition_noise_level_day_time_In >=
            51 &&
          response[0].data.data[0].Property_condition_noise_level_day_time_In <=
            60
        ) {
          DaytimeNoise = 2;
        } else if (
          response[0].data.data[0].Property_condition_noise_level_day_time_In >=
          61
        ) {
          DaytimeNoise = 1;
        }

        if (
          response[0].data.data[0].Property_condition_noise_level_night_time_I <
          30
        ) {
          NighttimeNoise = 5;
        } else if (
          response[0].data.data[0]
            .Property_condition_noise_level_night_time_I >= 30 &&
          response[0].data.data[0]
            .Property_condition_noise_level_night_time_I <= 40
        ) {
          NighttimeNoise = 4;
        } else if (
          response[0].data.data[0]
            .Property_condition_noise_level_night_time_I >= 41 &&
          response[0].data.data[0]
            .Property_condition_noise_level_night_time_I <= 50
        ) {
          NighttimeNoise = 3;
        } else if (
          response[0].data.data[0]
            .Property_condition_noise_level_night_time_I >= 51 &&
          response[0].data.data[0]
            .Property_condition_noise_level_night_time_I <= 60
        ) {
          NighttimeNoise = 2;
        } else if (
          response[0].data.data[0]
            .Property_condition_noise_level_night_time_I >= 61
        ) {
          NighttimeNoise = 1;
        }

        if (
          response[0].data.data[0]
            .Property_condition_air_quality_general_In_AQL <= 50
        ) {
          AirQuality = 5;
        } else if (
          response[0].data.data[0]
            .Property_condition_air_quality_general_In_AQL < 100 &&
          response[0].data.data[0]
            .Property_condition_air_quality_general_In_AQL >= 51
        ) {
          console.log("here");
          AirQuality = 4;
        } else if (
          response[0].data.data[0]
            .Property_condition_air_quality_general_In_AQL < 150 &&
          response[0].data.data[0]
            .Property_condition_air_quality_general_In_AQL >= 101
        ) {
          AirQuality = 3;
        } else if (
          response[0].data.data[0]
            .Property_condition_air_quality_general_In_AQL < 200 &&
          response[0].data.data[0]
            .Property_condition_air_quality_general_In_AQL >= 151
        ) {
          AirQuality = 2;
        }

        if (!response[0].data.data[0].Property_condition_cleaniness_general) {
          propertyCleaniness = 0;
        } else {
          propertyCleaniness = Number(
            response[0].data.data[0].Property_condition_cleaniness_general
          );
        }

        if (!response[0].data.data[0].Property_condition_odor_general) {
          propertyOdor = 0;
        } else {
          propertyOdor = Number(
            response[0].data.data[0].Property_condition_odor_general
          );
        }

        if (
          response[0].data.data[0]
            .Property_condition_security_door_and_locks === true
        ) {
          Doorlock = 5;
        }

        if (
          !response[0].data.data[0]
            .Property_condition_wall_and_flooring_cleanline
        ) {
          wallClean = 0;
        } else {
          wallClean = Number(
            response[0].data.data[0]
              .Property_condition_wall_and_flooring_cleanline
          );
        }

        totalNoise = (DaytimeNoise + NighttimeNoise) / 2;
        totalAmenities =
          (Number(response[0].data.data[0].Amenities_appliances_functionality) +
            Number(
              response[0].data.data[0].Amenities_furnitures_functionality
            )) /
          2;
        totalCondition =
          (totalNoise +
            AirQuality +
            propertyCleaniness +
            propertyOdor +
            Doorlock +
            wallClean) /
          6;

        let amenitiesFurniture = Number(
          response[0].data.data[0].Amenities_furnitures_functionality
        );
        let amenitiesAppliances = Number(
          response[0].data.data[0].Amenities_appliances_functionality
        );

        setAllData(response[0].data.data[0]);
        setSummaryData({
          totalNoise: totalNoise,
          AirQuality: AirQuality,
          propertyCleaniness: propertyCleaniness,
          propertyOdor: propertyOdor,
          Doorlock: Doorlock,
          wallClean: wallClean,
          totalCondition: totalCondition,
          totalAmenities: totalAmenities,
          amenitiesFurniture: amenitiesFurniture,
          amenitiesAppliances: amenitiesAppliances,
        });
        setRender(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      {render ? (
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
                                        <span className="flex items-center">
                                          0
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex">
                                <div className="flex items-center text-black font-semibold">
                                  <span className="text-xl">
                                    {allData.Rating.toFixed(1)}
                                  </span>
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
                          <span className="text-lg">
                            Breakdown of the rating
                          </span>

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
                                    <span className="text-lg">
                                      {(
                                        (summaryData.totalAmenities +
                                          summaryData.totalCondition) /
                                        2
                                      ).toFixed(1)}
                                    </span>
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
                                      <span className="text-sm">
                                        {summaryData.totalCondition.toFixed(1)}
                                      </span>
                                      <Star
                                        size={15}
                                        className="ml-1 text-yellow-500"
                                      />
                                    </div>
                                  </div>

                                  <div className="flex justify-between my-2">
                                    <span className="text-sm">Ammenities</span>
                                    <div className="flex items-center text-black font-semibold">
                                      <span className="text-sm">
                                        {" "}
                                        {summaryData.totalAmenities.toFixed(1)}
                                      </span>
                                      <Star
                                        size={15}
                                        className="ml-1 text-yellow-500"
                                      />
                                    </div>
                                  </div>

                                  <div className="flex justify-between my-2">
                                    <span className="text-sm">Utilities</span>
                                    <div className="flex items-center text-black font-semibold">
                                      <span className="text-sm">-</span>
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
                                    <span className="text-lg">
                                      {(
                                        (summaryData.totalAmenities +
                                          summaryData.totalCondition) /
                                        2
                                      ).toFixed(1)}
                                    </span>
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
                                      <span className="text-sm">
                                        {summaryData.totalCondition.toFixed(1)}
                                      </span>
                                      <Star
                                        size={15}
                                        className="ml-1 text-yellow-500"
                                      />
                                    </div>
                                  </div>

                                  <div className="flex justify-between my-2">
                                    <span className="text-sm">Ammenities</span>
                                    <div className="flex items-center text-black font-semibold">
                                      <span className="text-sm">
                                        {summaryData.totalAmenities.toFixed(1)}
                                      </span>
                                      <Star
                                        size={15}
                                        className="ml-1 text-yellow-500"
                                      />
                                    </div>
                                  </div>

                                  <div className="flex justify-between my-2">
                                    <span className="text-sm">Utilities</span>
                                    <div className="flex items-center text-black font-semibold">
                                      <span className="text-sm">-</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {tab === "building" && (
                              <div className="mt-8">
                                <div className="">
                                  <span className="text-lg">Building</span>
                                </div>

                                <div className="mt-3">
                                  <span className="text-xl font-bold">Residensi Jubilee</span>
                                </div>
                                <div className="mt-3">
                                <div className="text-lg p-4 border  block">
                                  General Info about the building
                                  <div className="text-blue-500 underline cursor-pointer">More details</div>
                                  </div>
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
                                  <div className="grid grid-cols-2">
                                    <div className="flex items-center my-4">
                                      <div className="w-5 h-5 bg-green-500 rounded-full"></div>
                                      <div className="ml-3 flex gap-x-10">
                                        <span>
                                          Noise level is accecptable range.
                                        </span>
                                        <div className="flex items-center text-black font-semibold">
                                          <span className="text-sm">
                                            {summaryData.totalNoise.toFixed(1)}
                                          </span>
                                          <Star
                                            size={15}
                                            className="ml-1 text-yellow-500"
                                          />
                                        </div>
                                      </div>
                                    </div>

                                    <div className="flex items-center my-4">
                                      <div className="w-5 h-5 bg-green-500 rounded-full"></div>
                                      <div className="ml-3 flex gap-x-10">
                                        <span>Property Odour is great</span>
                                        <div className="flex items-center text-black font-semibold">
                                          <span className="text-sm">
                                            {summaryData.propertyOdor.toFixed(
                                              1
                                            )}
                                          </span>
                                          <Star
                                            size={15}
                                            className="ml-1 text-yellow-500"
                                          />
                                        </div>
                                      </div>
                                    </div>

                                    <div className="flex items-center my-4">
                                      <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                                      <div className="ml-3 flex gap-x-10">
                                        <span>Air quality is poor</span>
                                        <div className="flex items-center text-black font-semibold">
                                          <span className="text-sm">
                                            {summaryData.AirQuality.toFixed(1)}
                                          </span>
                                          <Star
                                            size={15}
                                            className="ml-1 text-yellow-500"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}

                                {tabActive === "ammenities" && (
                                  <div className="grid grid-cols-2">
                                    <div className="flex items-center my-4">
                                      <div className="w-5 h-5 bg-green-500 rounded-full"></div>
                                      <div className="ml-3 flex gap-x-10">
                                        <span>
                                          Functionality of Appliance is Great.
                                        </span>
                                        <div className="flex items-center text-black font-semibold">
                                          <span className="text-sm">
                                            {summaryData.amenitiesAppliances.toFixed(
                                              1
                                            )}
                                          </span>
                                          <Star
                                            size={15}
                                            className="ml-1 text-yellow-500"
                                          />
                                        </div>
                                      </div>
                                    </div>

                                    <div className="flex items-center my-4">
                                      <div className="w-5 h-5 bg-green-500 rounded-full"></div>
                                      <div className="ml-3 flex gap-x-10">
                                        <span>
                                          Functionality of Furniture is Okay.
                                        </span>
                                        <div className="flex items-center text-black font-semibold">
                                          <span className="text-sm">
                                            {summaryData.amenitiesFurniture.toFixed(
                                              1
                                            )}
                                          </span>
                                          <Star
                                            size={15}
                                            className="ml-1 text-yellow-500"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}

                                {tabActive === "utilities" && (
                                  <div className="mt-4">No result found</div>
                                )}

                                {/* review sections */}
                              </div>
                            )}

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
                                  <div className="grid grid-cols-2">
                                    <div className="flex items-center my-4">
                                      <div className="w-5 h-5 bg-green-500 rounded-full"></div>
                                      <div className="ml-3 flex gap-x-10">
                                        <span>
                                          Noise level is accecptable range.
                                        </span>
                                        <div className="flex items-center text-black font-semibold">
                                          <span className="text-sm">
                                            {summaryData.totalNoise.toFixed(1)}
                                          </span>
                                          <Star
                                            size={15}
                                            className="ml-1 text-yellow-500"
                                          />
                                        </div>
                                      </div>
                                    </div>

                                    <div className="flex items-center my-4">
                                      <div className="w-5 h-5 bg-green-500 rounded-full"></div>
                                      <div className="ml-3 flex gap-x-10">
                                        <span>Property Odour is great</span>
                                        <div className="flex items-center text-black font-semibold">
                                          <span className="text-sm">
                                            {summaryData.propertyOdor.toFixed(
                                              1
                                            )}
                                          </span>
                                          <Star
                                            size={15}
                                            className="ml-1 text-yellow-500"
                                          />
                                        </div>
                                      </div>
                                    </div>

                                    <div className="flex items-center my-4">
                                      <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                                      <div className="ml-3 flex gap-x-10">
                                        <span>Air quality is poor</span>
                                        <div className="flex items-center text-black font-semibold">
                                          <span className="text-sm">
                                            {summaryData.AirQuality.toFixed(1)}
                                          </span>
                                          <Star
                                            size={15}
                                            className="ml-1 text-yellow-500"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}

                                {tabActive === "ammenities" && (
                                  <div className="grid grid-cols-2">
                                    <div className="flex items-center my-4">
                                      <div className="w-5 h-5 bg-green-500 rounded-full"></div>
                                      <div className="ml-3 flex gap-x-10">
                                        <span>
                                          Functionality of Appliance is Great.
                                        </span>
                                        <div className="flex items-center text-black font-semibold">
                                          <span className="text-sm">
                                            {summaryData.amenitiesAppliances.toFixed(
                                              1
                                            )}
                                          </span>
                                          <Star
                                            size={15}
                                            className="ml-1 text-yellow-500"
                                          />
                                        </div>
                                      </div>
                                    </div>

                                    <div className="flex items-center my-4">
                                      <div className="w-5 h-5 bg-green-500 rounded-full"></div>
                                      <div className="ml-3 flex gap-x-10">
                                        <span>
                                          Functionality of Furniture is Okay.
                                        </span>
                                        <div className="flex items-center text-black font-semibold">
                                          <span className="text-sm">
                                            {summaryData.amenitiesFurniture.toFixed(
                                              1
                                            )}
                                          </span>
                                          <Star
                                            size={15}
                                            className="ml-1 text-yellow-500"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}

                                {tabActive === "utilities" && (
                                  <div className="mt-4">No result found</div>
                                )}

                                {/* review sections */}
                              </div>
                            )}
                          </div>

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
                                        {
                                            new Intl.DateTimeFormat(
                                                "en-GB",
                                                //@ts-ignore
                                            options
                                          )
                                            .format(new Date())
                                            .toUpperCase()
                                        }
                                      </div>
                                    </div>

                                    <p className="pt-3 text-lg">
                                      Air Conditioners is not working properly .
                                      How to live in malaysia without Air
                                      conditioners?
                                    </p>
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
                                        {
                                          //@ts-ignore
                                          new Intl.DateTimeFormat(
                                            "en-GB",
                                            //@ts-ignore
                                            options
                                          )
                                            .format(new Date())
                                            .toUpperCase()
                                        }
                                      </div>
                                    </div>

                                    <p className="pt-3 text-lg">
                                      I have a complaint of AC and I am not able
                                      to use AC . After maintaining it , You can
                                      contact me
                                    </p>
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
                                        {
                                          //@ts-ignore
                                          new Intl.DateTimeFormat(
                                            "en-GB",
                                            //@ts-ignore
                                            options
                                          )
                                            .format(new Date())
                                            .toUpperCase()
                                        }
                                      </div>
                                    </div>

                                    <p className="pt-3 text-lg">
                                      I like the property so much . Please
                                      accept me as tenant on your property
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
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
              <span className="text-xl font-semibold">
                Your property Insights
              </span>

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
                            <span className="text-xl">
                              {allData.Rating.toFixed(1)}
                            </span>
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
                          Oops ! The rating of this property drops . Click to
                          learn how to improve your rating
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default Dashboard;
