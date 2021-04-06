import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
      <div className={s.item}>
        <img src="https://i.pinimg.com/originals/8b/6e/c6/8b6ec60427f9b17c1d9aaf4c415babe3.png" alt="" />

        {props.message}

        <div>
          <span>like</span> {props.likesCount}
        </div>
      </div>
    </div>
  );
};

export default Post;
