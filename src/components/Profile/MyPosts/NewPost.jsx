import React from "react";
import s from "./NewPost.module.css";
import Post from "../MyPosts/../Post/Post";

const NewPost = (props) => {
   
    

  let postsElements = 
       props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />)
  
  return (
    <div>
      {props.message}
      <div className={s.item}>
        <h3>My posts </h3>
        <div>
          <textarea></textarea>
          <div>
            <button>Add post</button>
            <button>Remove</button>
          </div>
        </div>
        <div className={s.posts}>
          {postsElements}
          
        </div>
      </div>
    </div>
  );
};

export default NewPost;
