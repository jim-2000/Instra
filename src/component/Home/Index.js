import React, { useState } from 'react';
import Header from '../Header/Header';
import Post from '../Post/Post';
import postImage from '../../asset/img/me.jpg'
import food from '../../asset/img/food_bg.jpg'
import car from '../../asset/img/car.png'

const Home = () => {
    const [posts, setposts] = useState([
        {
            username:"Hossain Bey",
            caption:"Hey This is Sara" ,
            imageUrl: food
        },
        {
            username:"Osman Bey",
            caption:"Wow it's Work",
            imageUrl:car
        },
        {
            username:"Eartugrul Bey",
            caption:"Wow it's Work",
            imageUrl:postImage
        },
    ]);

    return (
        <div>
            <Header />
          
          {
              posts.map(post => (
                <Post username={post.username}  caption={post.caption} imageUrl={post.imageUrl} />
              ))
          }
            
            
        </div>
    );
};

export default Home;


// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if
//           request.time < timestamp.date(2021, 2, 27);
//     }
//   }
// }