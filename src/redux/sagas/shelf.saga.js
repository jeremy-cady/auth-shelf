import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects'

function* fetchItems() {
    try {const response = yield axios.get('/shelf')
    yield put({
        type: 'SET_ITEM',
        payload: response.data}
)}
    catch (err){
        console.error('SET ITEM FAILED', err);
    }
}

// Post function
function* addItems(action) {
        yield axios.post('/shelf', action.payload);

        yield put ({
            type: 'FETCH_ITEMS'
        })
}


function* shelfSaga() {
    yield takeEvery('FETCH_ITEMS', fetchItems);
}


export default shelfSaga;