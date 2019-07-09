const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        {id: 1, post: "Hi, how are you?", likes: 5},
        {id: 2, post: "Lost in the oblivion", likes: 10},
    ],
    newPostText: 'default',
};

const profileReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_POST:
        {
            let newPost = {
                id: 5,
                post: state.newPostText,
                likes: 0
            };
            let stateCopy = {...state};
            stateCopy.postsData = [...state.postsData];

            stateCopy.postsData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT:
        {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({
    type: ADD_POST
});


export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});

export default profileReducer;