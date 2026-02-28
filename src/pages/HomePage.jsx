import React, { useState, useContext } from "react"; //

import { ChatContainer } from "../Componets/ChatContainer";
import { RightSidebar } from "../Componets/RightSidebar";
import { Sidebar } from "../Componets/Sidebar";
import { ChatContext } from "../../context/ChatContext";



const HomePage = () => {
   const { selectedUser } = useContext(ChatContext);

  return (
    <div className=" border w-screen h-screen sm:px-[%] sm:py-[%]">
      <div
        className={`
          backdrop-blur-xl border-2 border-gray-600 overflow-hidden h-full grid relative
          grid-cols-1
          ${selectedUser ? "md:grid-cols-[1fr_2fr_1fr]" : "md:grid-cols-2"}
        `}
      >
        <Sidebar/>
        <ChatContainer/>
        <RightSidebar/>
      </div>
    </div>
  );
};

export default HomePage;

