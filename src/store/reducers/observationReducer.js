const initState = {
    // observations: [
    //     {id:'1', title:'name 1', content: 'whats up my fellas'},
    //     {id:'2', title:'name 2', content: 'We all are great'},
    //     {id:'3', title:'This is the title of project dong', content: 'chuk k rakho'}
    // ]
}

const observationReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_OBSERVATION':
            console.log('created observation', action.observation)
            return state;
        case 'CREATED_OBSERVATION_FAIL':
            console.log('created observation fail', action.err);
            return state;
        default:
            return state;
    }
}

export default observationReducer;