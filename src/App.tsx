import { Provider } from 'react-redux';
import appStore from './redux/store';
import AppRouter from './router/AppRouter';
import './App.css';

function App() {

  return (
    <div className="App">
      <Provider store={appStore}>
        <AppRouter />
      </Provider>
    </div>
  )
}

export default App;
