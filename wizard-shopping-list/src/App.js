import './App.css'
import Headline from './Headline'
import Form from './Form'
import ShoppingList from './ShoppingList'

function App() {


  return (
    <div className="App">
      <Headline name="Harry" />
      <Form />
      <ShoppingList />
    </div>
  );
}

export default App;
