import React from 'react';
import s from './NewPost.module.css';
import Post from '../MyPosts/../Post/Post';

const NewPost = (props) => {
    
    return (
        
        <div>
        {props.message} 
        <div>
            
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you' likesCount='0'/>
                <Post message='It is very well' likesCount='7' />
                <Post message='Welcome' likesCount='9'/>
                <Post message='Good' likesCount='0'/>
                <Post message='Good Bye' likesCount='3' />
                
                
             </div>
             </div>
         </div>   
    )
}

export default NewPost;