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