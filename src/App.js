import Header from './Header';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react'

function App() {
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
    <div className="App">
      <Header title="Parts List" />
      <AddItem />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete} />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
