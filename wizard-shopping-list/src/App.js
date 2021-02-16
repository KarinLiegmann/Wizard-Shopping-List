import './App.css'
import Headline from './Headline'
import Form from './Form/Form'
import ShoppingList from './ShoppingList'

function App() {
  const shoppingItems = [
    {
      item: "broomstick",
      isDone: false
    },
    {
      item: "wand",
      isDone: true
    },
    {
      item: "invisibility cloak",
      isDone: false
    },
    {
      item: "butterbeer",
      isDone: true
    }
  ]

  function addShoppingItem(item) {
    const shoppingItem = { item, isDone: false }
    shoppingItems.push(shoppingItem)
  }


  return (
    <div className="App">
      <Headline name="Harry" />
      <Form onCreateShoppingItem={addShoppingItem} />
      <ShoppingList ShoppingItems={ShoppingItem} />
    </div>
  );
}

export default App;
