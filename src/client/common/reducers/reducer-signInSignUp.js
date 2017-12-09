export default function (state = false, action) {
    switch(action.type){

        case "clickSignInSignUp":
            return action.payload
        break;
    }
    return state;



};