import './App.css';
import { DashboardPage } from './pages/dashboard';
import { LoginPage } from './pages/login';

function App() {

  return (
    <div className="App">
      <LoginPage />
      <DashboardPage />
    </div>
  )
}

export default App;
