
import './Style.css';

import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodosList from './components/TodosList';

function App() {
  return (
    <div className="container">
      <Header />
      <TodoForm />
      <TodosList />
    </div>
  );
}

export default App;
