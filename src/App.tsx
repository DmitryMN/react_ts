import { Card, CardVariant } from './components/Card';
import { EventsExample } from './components/EventsExample';
import { UsersPage } from './components/UsersPage';
import { TodosPage } from './components/TodosPage';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {UserProfile} from './components/UserProfile';

function App() {

  return (
    <div className="App">
      <nav>
        <Link to={"/users"}>список пользователей</Link>
        <Link to={"/todos"}>список дел</Link>
      </nav>
      <Routes>
        <Route path='/users' element={<UsersPage />} />
        <Route path='/todos' element={<TodosPage />} />
        <Route path='/users/:id' element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
