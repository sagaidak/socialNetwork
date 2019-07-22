import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";

const MyPostsForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
                    <Field placeholder={'New post'}
                           name={'post'}
                           component={'textarea'}
                    />
        </div>
        <div>
            <button>Добавить</button>
        </div>
    </form>
};

const MyPostsReduxForm = reduxForm({
    form: 'myPosts'
})(MyPostsForm);

const MyPosts = (props) => {

    let postsElements = props.profilePage.postsData.map( post => <Post message={post.post} key={post.id} likes={post.likes}/>);
    console.log(postsElements);

    const onSubmit = (data) => {
        props.addPost(data.post);
        console.log(data);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>

            <MyPostsReduxForm onSubmit={onSubmit}  />

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );

};

export default MyPosts;