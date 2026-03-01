import React, { useContext } from "react";
import assets, { imagesDummyData } from "../../public/assets/assets";
import { ChatContext } from "../../context/ChatContext";
import { AuthContext } from "../../context/AuthContext";
import { useState } from "react";
import { useEffect } from "react";

export const RightSidebar = () => {
  const { selectedUser, messages } = useContext(ChatContext);
  const { logout, onlineUsers } = useContext(AuthContext);
  const [msgImages, setMsgImages] = useState([]);

  //get all the images from from the messages and set the to state
  useEffect(() => {
    setMsgImages(messages.filter((msg) => msg.image).map((msg) => msg.image));
  }, [messages]);

  return (
    selectedUser && (
      <div
        className={`bg-[#8185B2]/10 text-white w-full relative overflow-y-scroll ${selectedUser ? "max-md:hidden " : ""} `}
      >
        <div className="flex flex-col items-center p-5">
          <img
            src={selectedUser?.profilePic || assets.avatar_icon}
            alt="Profile"
            className="w-20 aspect-square rounded-full"
          />
          <h1 className="flex items-center gap-2 text-xl font-medium mt-4">
            {selectedUser && onlineUsers.includes(selectedUser._id) && (
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
            )}
            {selectedUser.fullName}
          </h1>
          <p className="mt-2 text-center">{selectedUser.bio}</p>
        </div>
        <hr className="border-[#ffffff50] my-4" />
        <div className="px-5 text-xs">
          <p>Media</p>
          <div className="mt-2 max-h-[200px]  overflow-y-scroll grid grid-cols-2 gap-4 opacity-80">
            {msgImages.map((url, index) => (
              <div
                key={index}
                onClick={() => window.open(url)}
                className="cursor-pointer rounded"
              >
                <img src={url} alt="" className="h-full rounded-md" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <button
            onClick={() => logout()}
            className="absolute bottom-5 left-1/3 transform -translate-x-1/5 bg-gradient-to-r from-purple-400 to-violet-600 text-white border-none text-sm font-light py-2 px-20 rounded-full cursor-pointer "
          >
            Logout
          </button>
        </div>
      </div>
    )
  );
};
