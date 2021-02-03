import React from 'react';
import './Profile.css';

const Profile = () => {
    return (
        <div className='content'>
        <div>
          <img src='https://auto.ironhorse.ru/wp-content/uploads/2018/04/Tarek-tmb-550x300.jpg'></img>
        </div>
        <div>
          Detailed description
        </div>
        <div>
          My port
        </div>
        <div>
          New post
        </div>
        <div className="posts"></div>
        <div className='item'>
          post 1
        </div>
        <div className='item'>
          post 2
        </div>
      </div>
    
    )
}

export default Profile;