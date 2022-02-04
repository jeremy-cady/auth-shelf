import createSagaMiddleware from 'redux-saga';
import { takeEvery, takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
import logger from 'redux-logger';



function* fetchAllItems(){
    try {
        console.log('in fetchAllItems');
        
        const item = yield axios.get('/api/shelf');
        console.log('get all items:', item.data);
        yield put ({ type: 'SET_ITEM', payload: item.data})
        
    }
    catch {
        console.log('Error in fetchAllItems');
        
    }


}







function* fetchSaga() {

    yield takeLatest('FETCH_ITEMS', fetchAllItems)
}


export default fetchSaga