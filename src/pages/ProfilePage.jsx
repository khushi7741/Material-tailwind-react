import React from "react";
import ProfileMain from "../components/profilepage/ProfileMain";
import Footer from "../components/Footer";
import ProfileInfo from "../components/profilepage/ProfileInfo";

const ProfilePage = () => {
  return (
    <div>
      <ProfileMain/>
      <ProfileInfo/>
      <Footer/>
    </div>
  );
};

export default ProfilePage;
