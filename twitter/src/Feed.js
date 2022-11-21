import React, {useState, useEffect } from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';

function Feed() {
  const [posts,setposts] = useState([]);

  useEffect(() => {
   
    

  },[]);
  return (
    <div className='feed'>
        <div className='feed__header'>
            <h2>Home</h2>
        </div>
        <TweetBox />
        {posts.map(posts =>(
        
          <Post
        
          displayName = {Post.displayName}
          username = {Post.username}
          verified= {Post.verified}
          text = {Post.text}
          img = {Post.image}
          avatar = {Post.avatar}
          
          />
        ))}

    </div>
  )
}

export default Feed