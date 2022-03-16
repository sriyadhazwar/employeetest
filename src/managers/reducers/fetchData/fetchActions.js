const initialState = {
    fetchData: [],
    fetchComment: []
}

const FetchAction = (state = initialState, action) => {
    switch (action.type) {
        case 'GET' :
            return {
                ...state,
                fetchData: action.JsonData
            }
        case 'GETCOMMENT':
            return {
                ...state,
                fetchComment: action.JsonData
            }
        default:
            return state
    }
}

export default FetchAction