export const createObservation = (observation) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database
        const firestore = getFirestore();
        firestore.collection('observations',).add({
            ...observation,
            createdAt: new Date(),
        }).then(() => {
            dispatch({ type: 'CREATE_OBSERVATION', observation });
        }).catch((err) => {
            dispatch({ type: 'CREATED_OBSERVATION_FAIL', err });
        })

    }
};

// export const getRarity = (rareLevel) => {
//     return (dispatch, getState, { getFirebase, getFirestore }) => {
//         //make async call to database
//         const firestore = getFirestore();
//         firestore.collection('rarity').add({
//             rareLevel
//         }).then(() => {
//             dispatch({ type: 'GET_RARITY', rareLevel});
//         }).catch((err) => {
//             dispatch({ type: 'GET_RARITY_FAIL', err });
//         })

//     }
// };