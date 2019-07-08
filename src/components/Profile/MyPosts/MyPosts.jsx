import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let postsElements = props.postsData.map( post => <Post message={post.post} likes={post.likes}/>);

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    };

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <textarea onChange={onPostChange}
                          ref={newPostElement} cols="30" rows="1"
                          value={props.newPostText} />
            </div>
            <div>
                <button onClick={ addPost }>Добавить</button>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );

};

export default MyPosts;