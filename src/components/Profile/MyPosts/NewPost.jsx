import React from 'react';
import Post from '../Post/Post';
import s from './NewPost.module.css';

const NewPost = () => {
    return (
        <div>
            My port
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you' />
                <Post message='It is very well' />
                <Post message='Welcome' />
                <Post message='Good' />
                <Post message='Good Bye' />
                
                
             </div>
            
         </div>   
    )
}

export default NewPost;