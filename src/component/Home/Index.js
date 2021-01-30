import React, { useState,useEffect } from 'react';
import Header from '../Header/Header';
import Post from '../Post/Post';
// import postImage from '../../asset/img/me.jpg'
// import food from '../../asset/img/food_bg.jpg'
// import car from '../../asset/img/car.png'
import {db} from '../../firebase'


const Home = () => {
    const [posts, setposts] = useState([]);

useEffect(() => {
    
   db.collection('Instrapost').onSnapshot(snapshot => {
       setposts(snapshot.docs.map(doc => ({
           id: doc.id
           , post:doc.data()})))
   })
}, []);


    return (
        <div>
            <Header />
          
          {
              posts.map(({ id, post }) => (
                <Post key={id} username={post.username}  caption={post.caption} imageUrl={post.imageUrl} />
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