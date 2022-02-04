import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemForm from '../ItemForm/ItemForm';


function ShelfPage() {
  const dispatch = useDispatch();
  const items = useSelector(store => store.items);
  

  function fetchShelf() {

    dispatch({
      type: 'FETCH_ITEMS'
    })
 
  }

  function onDelete(item) {
    console.log('item deleted');

    dispatch({
      type:'REMOVE_ITEM',
      payload: item.id
    })
  }

  // renders on page load
  useEffect(() => {
    fetchShelf();
  }, [])

  return (
    <>
    <ItemForm />
    <div className="container">
      <h2>Shelf</h2>
      <section>
        {items.map(item => {
          return (
            <div key={item.id}>
              <h5>{item.description}</h5>
              <img src={item.image_url} height="300" width="300" alt={item.description}/><br></br>
              <button style={{ position: "relative", left: 100}} onClick={() => onDelete(item)}>Delete</button>
              </div>

          )
        })}
      </section>
    </div>
    </>
  );
}

export default ShelfPage;
