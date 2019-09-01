import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength = maxLengthCreator(10);

const MyPostsForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'New post'}
                   name={'post'}
                   component={Textarea}
                   validate={[required, maxLength]}
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

const MyPosts = React.memo(props => {
    // memo still rerendering this shit

    let postsElements = props.profilePage.postsData.map(post => <Post message={post.post} key={post.id}
                                                                      likes={post.likes}/>);

    const onSubmit = (data) => {
        props.addPost(data.post);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>

            <MyPostsReduxForm onSubmit={onSubmit}/>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );

});

export default MyPosts;