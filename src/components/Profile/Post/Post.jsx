import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
    return (
        
            
            
                <div className={s.item}>
                  <img  src="http://assets.stickpng.com/images/59db69d33752880e93e16efc.png"/>

                  {props.message}  
                    
                    <div>
                    <span>like</span>
                </div>
                </div>
                
                
                
           
        
    )
}

export default Post;