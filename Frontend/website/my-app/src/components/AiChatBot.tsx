"use server";
import Image from "next/image";
import React from "react";
import { GeistSans } from "geist/font/sans";
import AiSuggestions from "./AiSuggestions";
import { sendAiInputQuery } from "@/actions/ai.actions";
const AiChatBot = () => {
  const ICON_SIZE: number = 100;
  const ARROW_ICON_SIZE: number = 15;
  return (
    <div className={`${GeistSans.className} bg-gradient-to-t from-midblue to-darkblue rounded-xl flex flex-col justify-center items-center`}>
      <div className="justify-items-center pt-5">
        <Image
          width={ICON_SIZE}
          height={ICON_SIZE}
          src="assets/svgs/Logo(1).svg"
          alt="Logo"
          loading="lazy"
          priority={false}
        />
        <h2 className="text-white text-3xl font-semibold tracking-wide font-bricolage">
          How can I Help?
        </h2>
      </div>

      <form
        className="w-full flex justify-center relative mb-10"
        action={sendAiInputQuery}
      >
        <input
          name="aiquery"
          placeholder="Get PennyPilot up to speed"
          className="w-10/12 py-5 pl-5 mt-5 rounded-full focus:outline-none"
        />
        {/* TODO add btn logic */}
        <button className="bg-darkblue p-3 rounded-full z-1 absolute right-[10%] top-[40%] hover:bg-opacity-85 transition duration-300 ease-in-out ">
          {" "}
          <Image
            width={ARROW_ICON_SIZE}
            height={ARROW_ICON_SIZE}
            src="assets/svgs/up.svg"
            alt="up arrow"
            loading="lazy"
            className="p-0 m-0"
            priority={false}
          />
        </button>
      </form>
      <div className="flex gap-3 mb-20">
        <AiSuggestions />
      </div>
    </div>
  );
};

export default AiChatBot;
