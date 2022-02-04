import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

function ItemForm() {
    const dispatch = useDispatch();
    const [itemDescription, setItemDescription] = useState('');
    const [itemImgUrl, setItemImgUrl] = useState('');

    
    function handleSubmit() {
        event.preventDefault();

       
        dispatch({
            type:'ADD_ITEM',
            payload: {
                description: itemDescription,
                image_url: itemImgUrl
            }
        })
    }


    return (

        <>
            <h2>Add New Item</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="description"
                    value={itemDescription}
                    onChange={evt => setItemDescription(evt.target.value)}
                />
                <input
                    type="text"
                    placeholder="img url"
                    value={itemImgUrl}
                    onChange={evt => setItemImgUrl(evt.target.value)}
                />
                <button> Submit </button>
            </form>
        </>
    )
}

export default ItemForm;