import React from 'react';


const Avatar = (props) =>{
    return(
        <div>
           <img className="avatar" src={props.src} alt={props.alt} />
        </div>
    )
}

export default Avatar;