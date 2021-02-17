import { useState } from 'react'

import Headline from './Headline'
import Form from './Form/Form'
import ShoppingItem from './Form/ShoppingItem'
// import ShoppingList from './Form/ShoppingList'

function App() {
  const [shoppingItems, setShoppingItems] = useState([])


  function addShoppingItem(title) {
    const newShoppingItem = { title, isDone: false }
    setShoppingItems([...shoppingItems, newShoppingItem]);
  }

  function toggleCheckbox(indexToToggle) {
    
    const itemToToggle = shoppingItems.find((item, index) => index === indexToToggle)
    itemToToggle.isDone = !itemToToggle.isDone

    const firstHalf = shoppingItems.slice(0, indexToToggle)
    const secondHalf = shoppingItems.slice(indexToToggle + 1)

    setShoppingItems([...firstHalf, itemToToggle, ...secondHalf])    
  }

  function deleteShoppingItem(indexToDelete) {
    const allRemainingItems = shoppingItems.filter((item, index) => index !== indexToDelete)

    setShoppingItems(allRemainingItems)
  }

  return (
    <div className="App">
      <Headline name="Harry" />
      <Form onCreateShoppingItem={addShoppingItem} />
      {
      shoppingItems.map((shoppingItem, index) => 
      (<ShoppingItem
        title={shoppingItem.title}
        isDone={shoppingItem.isDone}
        onToggleItem={() => toggleCheckbox(index)}
        onDeleteItem={() => deleteShoppingItem(index)} />))
        }
    </div>
  );
}

export default App;