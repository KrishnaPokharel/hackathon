"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Chat = () => {
  return (
    <>
      <div style={{ height: "100vh", position: "relative" }}>
        <Image
          src={"/chatImage.png"}
          width={1000}
          height={1000}
          style={{ position: "absolute" }}
          className="w-full h-full"
          alt="chatBG"
        />
        <div
          style={{
            position: "absolute",
            zIndex: 100,
            left: "46%",
            top: "83.5%",
          }}
        >
          <Link href={"/form"}>
            <div
              style={{
                backgroundColor: "#ffe100",
                width: "100%",
                borderRadius: 10,
                padding: "10px 20px",
                cursor: "pointer",
              }}
            >
              Provide Viewing Feedback
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Chat;
