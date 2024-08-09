"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { Star, BadgeCheck, CircleX, CircleHelp } from "lucide-react";

const Iframe = () => {
  const [formLink, setFormLink] = useState("");
  const [render, setRender] = useState(false);

  useEffect(() => {
    getIframeLink();
  }, []);

  const getIframeLink = async () => {
    const response: any = await Promise.all([
      axios({
        method: "get",
        url: "https://flask-api.speedrent.com/zoho/get-data-from-zoho?module_name=Bytebricks_Activities&param=Tan%20Yi%20Wen%20Tan",
        headers: {
          "X-Device-ID": "0",
          "X-OS-Version": "0",
          "Content-Type": "application/json",
          mode: "no-cors",
          Authorization: "X(3jPS@yD$xk@%9Tjr3(9n$B",
        },
        data: {},
      }),
    ]);
    if (response[0]?.data?.data[0]?.Activity_input_form) {
      console.log("xiro");
      setFormLink(response[0].data.data[0].Activity_input_form);
      setRender(true);
    }
  };

  return (
    <>
      {render && (
        <div style={{ height: "100vh", width: "100%" }}>
          <iframe
            src={formLink}
            width="100%"
            height="100%"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </>
  );
};

export default Iframe;
