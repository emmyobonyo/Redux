const redux = require("redux")

const initialState = {
    count: 0,
    favoriteThings: [],
    youTubeVideo: {
        title: "",
        viewCount: 0,
        votes: {
            up: 0,
            down: 0
        }
    }
}
console.log(initialState)

function reducer(state = initialState, action) {
    switch(action.type) {
        case "CHANGE_COUNT":
            return {
                ...state,
                count: state.count + action.payload
            }
        case "ADD_FAVORITE_THING":
            return {
                ...state,
                favoriteThings: [...state.favoriteThings, action.payload]
            }
        case "REMOVE_FAVORITE_THING": {
            const arrCopy = [...state.favoriteThings]
            
            const updatedArr = state.favoriteThings.filter(thing => thing.toLowerCase() !== action.payload.toLowerCase())
            return {
                ...state,
                favoriteThings: updatedArr
            }
        }
        case "INCREMENT_VIEW_COUNT":
            return {
                ...state,
                youTubeVideo: {
                    ...state.youTubeVideo,
                    viewCount: state.youTubeVideo.viewCount + 1
                }
            }
        case "SET_YOUTUBE_TITLE":
            return {
                ...state,
                youTubeVideo: {
                    ...state.youTubeVideo,
                    title: action.payload
                }
            }
        case "UPVOTE_VIDEO":
            return {
                ...state,
                youTubeVideo: {
                    ...state.youTubeVideo,
                    votes: {
                        ...state.youTubeVideo.votes,
                        up: state.youTubeVideo.votes.up + 1
                    }
                }
            }
        case "DOWNVOTE_VIDEO":
            return {
                ...state,
                youTubeVideo: {
                    ...state.youTubeVideo,
                    votes: {
                        ...state.youTubeVideo.votes,
                        down: state.youTubeVideo.votes.down + 1
                    }
                }
            }
        default:
            return state
    }
}

const store = redux.createStore(reducer)

store.subscribe(() => {
    console.log(store.getState())
})

