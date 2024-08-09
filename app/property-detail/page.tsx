import React from "react";
import Image from "next/image";
import Rating from "@/components/Rating";

const Page = () => {
  return (
    <div className="">
      <div className="property-image">
        <Image
          src={"/propertySS.png"}
          width={1000}
          height={1000}
          className="w-full h-full"
          alt="property"
        />
      </div>

      <div className="global_padding mt-3">
        <div className="grid grid-cols-4 gap-x-10">
          <div className="col-span-3">
            <Image
              src={"/ppname.png"}
              width={1000}
              height={1000}
              className="w-full h-auto"
              alt="logo"
            />

            <div className="mb-4">
              <Rating />
            </div>

            <Image src="/propertydetail.png" width={1000} height={1000} className="w-full h-auto" alt="test"/>
          </div>

          <div className="col-span-1">
            <Image
              src={"/chat.png"}
              width={1000}
              height={1000}
              className="w-full h-auto sticky top-0"
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
