import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postsData = [
        {id: 1, post: "Hi, how are you?", likes: 5},
        {id: 2, post: "Lost in the oblivion", likes: 10},
    ]

    let postsElements = postsData.map( post => <Post message={post.post} likes={post.likes}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );

}

export default MyPosts;