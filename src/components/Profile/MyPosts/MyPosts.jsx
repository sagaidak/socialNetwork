import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {



    let postsElements = props.postsData.map( post => <Post message={post.post} likes={post.likes}/>)

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