const usersInitialState = []

const postsReducer = (state = usersInitialState, action) =>{
    switch(action.type){
        case 'SET_POSTS':{
            return [].concat(action.payload)//[...action.payload]
        }
        default: {
            return [].concat(state)//[...state]
        }
    }
}

export default postsReducer