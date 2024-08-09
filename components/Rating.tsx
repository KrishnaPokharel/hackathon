"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { Star, BadgeCheck, CircleX, CircleHelp } from "lucide-react";

const Rating = () => {
  const [extentContent, setExtentContent] = useState(false);
  const [active, setActive] = useState("property");
  const [tabActive, setTabActive] = useState("conditions");

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
        <div className="mt-4">
          {extentContent && (
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
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                  <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-[50%]">
                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
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
                                  <span className="text-3xl">
                                    {allData.Rating}
                                  </span>
                                  <Star
                                    size={30}
                                    className="ml-1 text-yellow-500"
                                  />
                                </div>
                                <div className="flex items-center bg-green-600 mt-2 p-2 rounded-full text-white text-sm">
                                  <BadgeCheck size={20} color="#fff" />
                                  <span className="ml-2">
                                    Verified by Speedhome
                                  </span>
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
                                </div>

                                {active === "property" && (
                                  <div className="px-3 mt-2">
                                    <div className="flex justify-between my-2">
                                      <span className="text-sm">
                                        Conditions
                                      </span>
                                      <div className="flex items-center text-black font-semibold">
                                        <span className="text-sm">
                                          {summaryData.totalCondition.toFixed(
                                            1
                                          )}
                                        </span>
                                        <Star
                                          size={15}
                                          className="ml-1 text-yellow-500"
                                        />
                                      </div>
                                    </div>

                                    <div className="flex justify-between my-2">
                                      <span className="text-sm">
                                        Ammenities
                                      </span>
                                      <div className="flex items-center text-black font-semibold">
                                        <span className="text-sm">
                                          {summaryData.totalAmenities.toFixed(
                                            1
                                          )}
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
                                        {/* <Star
                                          size={15}
                                          className="ml-1 text-yellow-500"
                                        /> */}
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
                                      <span className="text-lg">{(
                                          (summaryData.totalAmenities +
                                            summaryData.totalCondition) /
                                          2
                                        ).toFixed(1)}</span>
                                      <Star
                                        size={20}
                                        className="ml-1 text-yellow-500"
                                      />
                                    </div>
                                  </div>
                                </div>

                                {active === "building" && (
                                  <div className="px-3 mt-2">
                                    <div className="flex justify-between my-2">
                                      <span className="text-sm">
                                        Conditions
                                      </span>
                                      <div className="flex items-center text-black font-semibold">
                                        <span className="text-sm">
                                        {summaryData.totalCondition.toFixed(
                                            1
                                          )}
                                        </span>
                                        <Star
                                          size={15}
                                          className="ml-1 text-yellow-500"
                                        />
                                      </div>
                                    </div>

                                    <div className="flex justify-between my-2">
                                      <span className="text-sm">
                                        Ammenities
                                      </span>
                                      <div className="flex items-center text-black font-semibold">
                                        <span className="text-sm"> {summaryData.totalAmenities.toFixed(
                                            1
                                          )}</span>
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
                                )}
                              </div>
                            </div>
                            <div className="col-span-8 px-2">
                              {active === "property" && (
                                <div>
                                  <span className="text-xl font-semibold block">
                                    About the property
                                  </span>
                                  <span className="text-2xl block mt-3">
                                    Inspection Report
                                  </span>

                                  <div className="tab_buttons flex gap-x-5 mt-3 items-center">
                                    <button
                                      className={
                                        tabActive === "conditions"
                                          ? "bg-primary rounded-[25px] p-3"
                                          : "bg-slate-300  rounded-[25px] p-3"
                                      }
                                      onClick={(e) =>
                                        setTabActive("conditions")
                                      }
                                    >
                                      Conditions
                                    </button>
                                    <button
                                      className={
                                        tabActive === "ammenities"
                                          ? "bg-primary rounded-[25px] p-3"
                                          : "bg-slate-300  rounded-[25px] p-3"
                                      }
                                      onClick={(e) =>
                                        setTabActive("ammenities")
                                      }
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

                                  <div className="mt-8">
                                    {tabActive === "conditions" && (
                                      <div className="">
                                        <div className="flex items-center my-4">
                                          <div className="w-5 h-5 bg-green-500 rounded-full"></div>
                                          <div className="ml-3 flex gap-x-10">
                                            <span>
                                              Noise level is accecptable range.
                                            </span>
                                            <div className="flex items-center text-black font-semibold">
                                              <span className="text-sm">
                                                {summaryData.totalNoise.toFixed(
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
                                                {summaryData.AirQuality.toFixed(
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

                                    {tabActive === "ammenities" && (
                                      <div className="">
                                        <div className="flex items-center my-4">
                                          <div className="w-5 h-5 bg-green-500 rounded-full"></div>
                                          <div className="ml-3 flex gap-x-10">
                                            <span>
                                              Functionality of Appliance is
                                              Great.
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
                                              Functionality of Furniture is
                                              Okay.
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
                                      <div className="">No result found</div>
                                    )}
                                  </div>
                                </div>
                              )}

                              {active === "building" && (
                                <div>
                                  <span className="text-xl font-semibold block">
                                    About the building
                                  </span>
                                  <div className="text-lg p-4 border  block mt-3">
                                  General Info about the building
                                  <div className="text-blue-500 underline cursor-pointer">More details</div>
                                  </div>

                                  <div className="tab_buttons flex gap-x-5 mt-3 items-center">
                                    <button
                                      className={
                                        tabActive === "conditions"
                                          ? "bg-primary rounded-[25px] p-3"
                                          : "bg-slate-300  rounded-[25px] p-3"
                                      }
                                      onClick={(e) =>
                                        setTabActive("conditions")
                                      }
                                    >
                                      Conditions
                                    </button>
                                    <button
                                      className={
                                        tabActive === "ammenities"
                                          ? "bg-primary rounded-[25px] p-3"
                                          : "bg-slate-300  rounded-[25px] p-3"
                                      }
                                      onClick={(e) =>
                                        setTabActive("ammenities")
                                      }
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

                                  <div className="mt-8">
                                    {tabActive === "conditions" && (
                                      <div className="">
                                        <div className="flex items-center my-4">
                                          <div className="w-5 h-5 bg-green-500 rounded-full"></div>
                                          <div className="ml-3 flex gap-x-10">
                                            <span>
                                              Noise level is accecptable range.
                                            </span>
                                            <div className="flex items-center text-black font-semibold">
                                              <span className="text-sm">
                                                {summaryData.totalNoise.toFixed(
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
                                                {summaryData.AirQuality.toFixed(
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

                                    {tabActive === "ammenities" && (
                                      <div className="">
                                        <div className="flex items-center my-4">
                                          <div className="w-5 h-5 bg-green-500 rounded-full"></div>
                                          <div className="ml-3 flex gap-x-10">
                                            <span>
                                              Functionality of Appliance is
                                              Great.
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
                                              Functionality of Furniture is
                                              Okay.
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
                                      <div className="">No result found</div>
                                    )}
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
              </div>
            </div>
          )}

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
                <span className="text-2xl">{allData.Rating}</span>
                <Star size={20} className="ml-1 text-yellow-500" />
              </div>
              <div className="flex items-center bg-green-600 p-2 rounded-full text-white text-sm">
                <BadgeCheck size={20} color="#fff" />
                <span className="ml-2">Verified by Speedhome</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">Loading...</div>
      )}
    </>
  );
};

export default Rating;
