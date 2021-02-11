import React from 'react';
import NewPost from './MyPosts/NewPost';

import s from './Profile.module.css';



const Profile = () => {
    return (
        <div className={s.content}>
          
        <div>
          <img src='https://auto.ironhorse.ru/wp-content/uploads/2018/04/Tarek-tmb-550x300.jpg'/>
        </div>
        <div>
          Detailed description
          <NewPost />
        </div>
        <div>
        
        </div>
        
      </div> 
    
    )
}

export default Profile;