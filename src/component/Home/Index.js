import React from 'react';
import Header from '../Header/Header';
import Post from '../Post/Post';
import postImage from '../../asset/img/me.jpg'

const Home = () => {
    return (
        <div>
            <Header />
          
            <Post username="Sara" caption="Hey This is Sara" imageUrl={postImage} />
            <Post username="Lara" caption="Wow it's Work" imageUrl={postImage} />
            <Post username="Dera" caption="Wow it's Work" imageUrl={postImage} />
            <Post username="Tera" caption="This is Tera " imageUrl={postImage} />
            <Post username="jim" caption="Wow it's Work" imageUrl={postImage} />
        </div>
    );
};

export default Home;