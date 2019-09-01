import profileReducer, {addPostActionCreator, deletePost} from './profile-reducer';

let state = {
    postsData: [
        {id: 1, post: "Hi, how are you?", likes: 5},
        {id: 2, post: "Lost in the oblivion", likes: 10},
    ],
    profile: null,
    status: '',
};

it('new post should be added', () => {
    let action = addPostActionCreator('post text');
    let newState = profileReducer(state, action);

    expect(newState.postsData.length).toBe(3);
});

it('message of new post should be correct', () => {
    let action = addPostActionCreator('post text');
    let newState = profileReducer(state, action);

    expect(newState.postsData[2].post).toBe('post text');
});

it('length should be decremented after deleting', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);

    expect(newState.postsData.length).toBe(1);
});
