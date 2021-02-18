import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Headline from './Headline'
import Form from './Form/Form'
import ShoppingItem from './Form/ShoppingItem'
import Button from './Button/Button'

import loadFromLocal from './lib/loadFromLocal'
import saveToLocal from './lib/saveToLocal'
// import ShoppingList from './Form/ShoppingList'

function App() {
  const LOCAL_STORAGE_KEY = 'hogwartsShoppingList' 
  const [shoppingItems, setShoppingItems] = useState(loadFromLocal(LOCAL_STORAGE_KEY) ?? [])


  useEffect(() => {
    saveToLocal(LOCAL_STORAGE_KEY, shoppingItems)    
  }, [shoppingItems])


  function addShoppingItem(title) {
    const newShoppingItem = { title, isDone: false, id: uuidv4() } // Vorsicht, uuidv4 ist eine Funktion!
    
    setShoppingItems([...shoppingItems, newShoppingItem]);
  }

  function toggleCheckbox(idToToggle) {
    const newItems = shoppingItems.map((item) => {
      if (item.id === idToToggle) {
        item.isDone = !item.isDone
      }
      return item; 
    })     
    setShoppingItems(newItems)
  }

  function deleteShoppingItem(idToDelete) {
    const allRemainingItems = shoppingItems.filter((item) => item.id !== idToDelete)

    setShoppingItems(allRemainingItems)
  }

  function deleteShoppingList() {
    setShoppingItems([])
  }


  return (
    <div className="App">
      <Headline name="Harry" />
      <Form onCreateShoppingItem={addShoppingItem} />
      <Button text="Delete All" onClickFunction={deleteShoppingList}/>
      
      {
      shoppingItems.map(({title, isDone, id}) => 
      (<ShoppingItem
        key={id}
        title={title}
        isDone={isDone}
        onToggleItem={() => toggleCheckbox(id)}
        onDeleteItem={() => deleteShoppingItem(id)} />))
        }
    </div>
  );
}

export default App;