import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

function ItemForm() {
    const dispatch = useDispatch();
    const [itemDescription, setItemDescription] = useState('');
    const [itemImgUrl, setItemImgUrl] = useState('');

    
    function handleSubmit() {
        event.preventDefault();

        // Sends 
        dispatch({
            type:'ADD_ITEM',
            payload: {
                description: {itemDescription},
                image_url: {itemImgUrl}
            }
        })
    }


    return (

        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="description"
                    value={itemDescription}
                    onchange={evt => setItemDescription(evt.target.value)}
                />
                <input
                    type="text"
                    placeholder="img url"
                    value={itemImgUrl}
                    onchange={evt => setItemImgUrl(evt.target.value)}
                />
                <button> Submit </button>
            </form>
        </>
    )
}