import './App.css'
import Headline from './Headline'
import Form from './Form'
import ListItem from './ListItem'

function App() {
  const shoppingListItems = [
    {
      item: "broomstick",
      isDone: false
    },
    {
      item: "butterbeer",
      isDone: true
    }
  ]

  return (
    <div className="App">
      <Headline name="Harry" />
      <Form inputId="shoppingListTextField" placeholdertext="Add your Shopping Item here..." buttontext="Add to Shopping List" />
      {
        shoppingListItems.map(shoppingListItem => <ListItem isDone={shoppingListItem.isDone} item={shoppingListItem.item} />)
      }
    </div>
  );
}

export default App;
