import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    return (
        <div className={s.posts}>
            My Posts
            <Post message='Hi, how are you?' likes='5'/>
            <Post message="It's my first post" likes='15'/>
            <Post />
            <Post />
        </div>
    );

}

export default MyPosts;