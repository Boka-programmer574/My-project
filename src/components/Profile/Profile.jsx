import React from 'react';
import s from './Profile.module.css'
import NewPost from './NewPost/NewPost'

const Profile = () => {
    return (
        <div className={s.content}>
        <div>
          <img src='https://auto.ironhorse.ru/wp-content/uploads/2018/04/Tarek-tmb-550x300.jpg'></img>
        </div>
        <div>
          Detailed description
        </div>
        <div>
          Part1
        </div>
        <div>
          Part2
        </div>
        <div>
          Part3
        </div>
      </div> 
    
    )
}

export default Profile;