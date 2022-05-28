function changeCount(amount = 1) {
    return {
        type: "CHANGE_COUNT",
        payload: amount
    }
}

function countReducer (count = 0, action) {
    switch(action.type) {
        case "CHANGE_COUNT":
            return count + action.payload
        default:
            return count
    }
}

function youTubeVideoReducer(youTubeVideo = initialState, action) {
    switch(action.type) {
        case "INCREMENT_VIEW_COUNT":
            return {
                ...youTubeVideo,
                viewCount: youTubeVideo.viewCount + 1
            }
        case "SET_YOUTUBE_TITLE":
            return {
                ...youTubeVideo,
                title: action.payload
            }
        case "UPVOTE_VIDEO":
            return {
                ...youTubeVideo,
                votes: {
                    ...youTubeVideo.votes,
                    up: youTubeVideo.votes.up + 1
                }
            }
        case "DOWNVOTE_VIDEO":
            return {
                ...youTubeVideo,
                votes: {
                    ...youTubeVideo.votes,
                    down: youTubeVideo.votes.down + 1
                }
            }
        default:
            return youTubeVideo
    }
}