import React from "react";
import NewPost from "./MyPosts/NewPost";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";

const Profile = (props) => {

  return (
    <div>
      <div>
        <ProfileInfo />
        <NewPost posts={props.state.posts} />
      </div>
      
    </div>
  );
};

export default Profile;
