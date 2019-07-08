import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, post: "Hi, how are you?", likes: 5},
                {id: 2, post: "Lost in the oblivion", likes: 10},
            ],
            newPostText: 'default',
        },

        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Alex', avatarURL: 'http://art-a-designer.ru/wordpress/wp-content/gallery/yevgen_romanenko/beauty-26.jpg'},
                {id: 2, name: 'Masha', avatarURL: 'https://im0-tub-ua.yandex.net/i?id=46917a0fe55a1eb25de2f59d3bb6a636&n=13'},
                {id: 3, name: 'Lena', avatarURL: 'https://scontent-lht6-1.cdninstagram.com/vp/296aacca4243532ab062f1e4c01d99dc/5D79752E/t51.2885-15/e35/59670963_443336099759019_9116708469914286879_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&ig_cache_key=MjA0ODc5NzY0Mjk5MTAwODkxOQ%3D%3D.2'},
                {id: 4, name: 'Katya', avatarURL: 'https://avatars.mds.yandex.net/get-pdb/33827/9064e332-5bcc-4362-9f8c-85fc3479b4dc/s1200?webp=false'},
                {id: 5, name: 'Ksusha', avatarURL: 'https://avatars.mds.yandex.net/get-pdb/214107/e4fca45a-8780-48c5-8f3e-51541a244be2/s1200?webp=false'},
                {id: 6, name: 'Albina', avatarURL: 'https://avatars.mds.yandex.net/get-pdb/199965/94145617-4869-48d5-ac26-eb5eea5d04ec/s1200?webp=false'},
            ],
            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 1, message: 'I love you'},
                {id: 1, message: 'I need you'},
                {id: 1, message: 'I want you'},
            ],
            newMessageBody: '',
        },
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
      return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) { // { type: 'ADD-POST', ...: ... }
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    },
};


export default store;
window.store = store;