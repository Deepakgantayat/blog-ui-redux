const usersInitialState = []

const usersReducer = (state = usersInitialState, action) =>{
    switch(action.type){
        case 'SET_USERS':{
            return [].concat(action.payload)//[...action.payload]
        }
        default: {
            return [].concat(state)//[...state]
        }
    }
}

export default usersReducer