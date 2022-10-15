import React from 'react'
import { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const Content = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            checked: true,
            item: "Four tires and brake pads"
        },
        {
            id: 2,
            checked: false,
            item: "Alternator"
        },
        {
            id: 3,
            checked: false,
            item: "Radiator"
        }
    ])
    
    const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
        setItems(listItems);
        localStorage.setItem('shoppingList', JSON.stringify(listItems))
    }

    // call this function after installing react-icons package and using the trash icon
    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems)
        localStorage.setItem('shoppingList', JSON.stringify(listItems))
    }
      
    return (
        <main>
            {items.length ? (
                <ul>
                    {items.map((item) => (
                        <li className='item' key={item.id}>
                            <input
                                type='checkbox'
                                onChange={() => handleCheck(item.id)}
                                checked={item.checked}
                            />
                            <label style={(item.checked) ? { textDecoration: 'line-through' } : null}>
                                    {item.item}
                            </label>
                            <FaTrashAlt 
                                role='button' 
                                tabIndex='0'
                            />
                        </li>
                    ))}
                </ul>      
            ) : (
                <p style={{ marginTop: '2rem' }}>Your list is embpy</p>
            )}
        </main>
    )
}

export default Content