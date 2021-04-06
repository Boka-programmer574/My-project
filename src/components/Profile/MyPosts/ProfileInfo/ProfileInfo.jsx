import React from "react";
import s from "../ProfileInfo/ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div className={s.items}>
      <div >
        <img src="https://www.wallpapers13.com/wp-content/uploads/2016/05/Mountain-meadow-landscape-with-beautiful-mountain-flowers-yellow-and-white-flowers-and-green-grass-with-mountains-pine-forest-snowy-mountain-peaks-blue-Desktop-Wallpaper-Backgrounds-free-download-1920x1080.jpg" alt=""/>
      </div>
      <div className={s.item}>
        Detailed description
      </div>
    </div>
  );
};
export default ProfileInfo;
