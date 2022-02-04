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

  function onDelete() {
    console.log('item deleted');
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
              <img src={item.image_url} />
              <button onClick={onDelete}>Delete</button>
              </div>

          )
        })}
      </section>
    </div>
    </>
  );
}

export default ShelfPage;
