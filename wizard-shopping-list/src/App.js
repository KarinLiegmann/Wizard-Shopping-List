import { useState } from 'react'

import './App.css'
import Headline from './Headline'
import Form from './Form/Form'
import ShoppingList from './Form/ShoppingList'

function App() {
  const [shoppingItems, setShoppingItems] = useState([])


  function addShoppingItem(title) {
    const newShoppingItem = { title, isDone: false }
    setShoppingItems([...shoppingItems, newShoppingItem]);
  }


  return (
    <div className="App">
      <Headline name="Harry" />
      <Form onCreateShoppingItem={addShoppingItem} />
      <ShoppingList shoppingItems={shoppingItems} />
    </div>
  );
}

export default App;
