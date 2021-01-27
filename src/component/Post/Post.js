import React from 'react';
import postImage from '../../asset/img/me.jpg'
import './Post.css'
import Avatar from '@material-ui/core/Avatar';
//>>>>>>>>>>>>> Post component 
const Post = ({username, imageUrl, caption}) => {

//>>>>>>>>>>>>> Return

    return (
        <div className="post">
            <div className="post_header">
            <Avatar alt="Remy Sharp" src={postImage} className="post_avatar" />
            <h3>{username}</h3>
            </div>

            {/* avatar + username */}
            {/* image */ }
            <img
                src={imageUrl}
                className="post_image"
                alt="logo"
                /> 
            {/* Big caption */ }
            <h4 className="post_txt"> <strong>{username}</strong> :{caption}</h4>
        </div>
    );
};

export default Post;