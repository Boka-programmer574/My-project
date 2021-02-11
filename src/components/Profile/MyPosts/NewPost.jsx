import React from 'react';
import s from './NewPost.module.css';
import Post from '../Post/Post';

const NewPost = () => {
    
    return (
        

            
        <div>
            My posts
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