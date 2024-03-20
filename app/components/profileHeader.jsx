"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";

import { EditOutlined } from '@ant-design/icons';

const ProfileHeader = () => {
  const user = {
    name: "Laura Simmons",
    dateOfBirth: "7th July 2000",
    gender: "Female",
    description:
      "A Professional real estate manager having a decade of experience in the field, providing services to clients.",
    phoneNumber: "+92 340 3906446",
    email: "imdeveloper100@gmail.com",
  };
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleShare = () => {
    // Share functionality
  };

  return (
    <div className="bg-gray-100 grid grid-cols-2 md:grid-cols-3 sm:grid-cols-1 gap-8 p-8">
      <div className="flex flex-col col-span-2 md:col-span-2 sm:col-span-2  md:flex-row justify-center items-center md:items-start">
        <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden">
          <Image
            src="/user.jfif"
            alt="Profile Image"
            // layout="fill"
            width={192}
            height={192}
            className="rounded-full object-cover"
          />
        </div>
        <div className="md:ml-4">
          <h1 className="text-xl font-bold mt-4 md:mt-0">{user.name}</h1>
          <div className="flex flex-wrap items-center mt-2">
            <p className="text-sm ">{user.dateOfBirth}</p>
            <span className="mx-2">|</span>
            <p className="text-sm">{user.gender}</p>
          </div>
          <p className="text-sm mt-2">{user.description}</p>
        </div>
      </div>
      <div className="flex flex-col col-span-2 md:col-span-1  items-end">
        <div className="flex mt-4 md:mt-0 ">
          <button
            onClick={handleEdit}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2 md:flex-flow-cols"
          >
            {isEditing ? "Save" : <EditOutlined />}
          </button>
          <button
            onClick={handleShare}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Share
          </button>
        </div>
        <p className="text-sm mt-4">{user.phoneNumber}</p>
        <p className="text-sm">{user.email}</p>
      </div>
    </div>
  );
};

export default ProfileHeader;
