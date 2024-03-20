"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";

import { EditOutlined } from '@ant-design/icons';
import ProfileHeader from "../components/profileHeader";
import Card from "../components/card";

const Dashboard = () => {
  const user = {
    name: "Danial Simmon",
    dateOfBirth: "7th July 2000",
    gender: "Male",
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
    <>
      <ProfileHeader />
      <div className="bg-white">
      <div className="mx-auto  px-4 pt-6 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          My Ads
        </h2>
      </div>
    </div>
    <Card />
    </>
  );
};

export default Dashboard;
