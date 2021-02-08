import React from 'react';
import s from './NewPost.module.css';

const NewPost = () => {
    return (
        <div>
            My port
            <div>
                New post
            </div>
            <div className={s.posts}>
                <div className={s.item}>
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
            </div>
        </div>
    )




}

export default NewPost;