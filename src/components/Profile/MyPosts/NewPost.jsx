import React from 'react';
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
                <div className={s.item}>
                    <img src="https://cdn.dribbble.com/users/1824846/screenshots/5087861/girl_character__avtar__1x.png?compress=1&resize=400x300"/>
                    post 1
                </div>
                <div className={s.item}>
                    post 2
                </div>
                <div className={s.item}>
                    post 3
                </div>
                <div className={s.item}>
                    post 4
                </div>
                <div className={s.item}>
                    post 5
                </div>
                <div className={s.item}>
                    post 6
                </div>
                <div className={s.item}>
                    post 7
                </div>
                <div className={s.item}>
                    post 8
                </div>
            </div>
        </div>
    )
}

export default NewPost;