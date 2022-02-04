import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects'

function* fetchItems() {
    try {const response = yield axios.get('/api/shelf')
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
    
        yield axios.post('/api/shelf', action.payload);

        yield put ({
            type: 'FETCH_ITEMS'
        })
}

// Delete function
function* deleteItem(action) {
    console.log('action.payload is', action.payload);

    yield axios.delete(`/api/shelf/${action.payload}`)

    yield put ({
        type: 'FETCH_ITEMS'
    })
}

function* editItem(action) {

    yield axios.put(`/api/shelf/${action.payload}`)

    yield put ({
        type: 'FETCH_ITEMS'
    })
}


function* shelfSaga() {
    yield takeEvery('FETCH_ITEMS', fetchItems);
    yield takeEvery('ADD_ITEM', addItems);
    yield takeEvery('REMOVE_ITEM', deleteItem)
    yield takeEvery('EDIT_ITEM', editItem);
}


export default shelfSaga;