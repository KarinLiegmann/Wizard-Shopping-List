import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Headline from './Headline'
import Form from './Form/Form'
import ShoppingItem from './Form/ShoppingItem'
import ToggleButtons from './Form/ToggleButtons'
import Button from './Button/Button'
import loadFromLocal from './lib/loadFromLocal'
import saveToLocal from './lib/saveToLocal'
// import ShoppingList from './Form/ShoppingList'



function App() {
  const LOCAL_STORAGE_KEY = 'hogwartsShoppingList'

  const [shoppingItems, setShoppingItems] = useState(loadFromLocal(LOCAL_STORAGE_KEY) ?? [])

  // const [openItems, setOpenItems] = useState(loadFromLocal('openHogwartsShoppingItems') ?? [])


  useEffect(() => {
    saveToLocal(LOCAL_STORAGE_KEY, shoppingItems)
  }, [shoppingItems])

  useEffect(() => {
    const openShoppingItems = shoppingItems.filter(item => item.isDone === false)
    saveToLocal('openHogwartsShoppingItems', openShoppingItems)
  }, [shoppingItems])



  function addShoppingItem(title) {
    const newShoppingItem = { title, isDone: false, isVisible: true, id: uuidv4() } // Vorsicht, uuidv4 ist eine Funktion!

    setShoppingItems([...shoppingItems, newShoppingItem]);
    saveToLocal(LOCAL_STORAGE_KEY, shoppingItems)
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

  function removeFinishedTasks() {
    /*const allOpenItems = shoppingItems.filter(item => item.isDone === false)
    setOpenItems(allOpenItems)
    console.log(allOpenItems)
     */

    const unfinishedTasks = shoppingItems.map((item) => {
      if (item.isDone === true) {
        (item.isVisible = false)
      }
      return item;
    })
    setShoppingItems(unfinishedTasks)
  }

  function showAllItems() {
    const allTasks = shoppingItems.map((item) => {
      if (item.isDone === true || false) {
        (item.isVisible = true)
      }
      return item;
    })
    setShoppingItems(allTasks)
  }



  // shoppingItems werden angezeigt, wenn Länge > 1
  /* const itemsToShow = openItems.length >0 ? openItems : shoppingItems */
  /* onClickShowAll={() => setOpenItems([])}*/

  return (
    <div className="App">
      <Headline name="Harry" />
      <Form onCreateShoppingItem={addShoppingItem} />
      <Button text="Delete All" onClickFunction={deleteShoppingList} />

      <ToggleButtons onClickShowAll={showAllItems} onClickShowOpen={removeFinishedTasks} />


      {
        /* Jetzt nicht mehr shoppingItems sondern ItemsToShow mappen!*/
        shoppingItems.map(({ title, isDone, id, isVisible }) =>
        (<ShoppingItem
          key={id}
          title={title}
          isDone={isDone}
          onToggleItem={() => toggleCheckbox(id)}
          onDeleteItem={() => deleteShoppingItem(id)}
          isVisible={isVisible} />))
      }
    </div>
  );
}

export default App;