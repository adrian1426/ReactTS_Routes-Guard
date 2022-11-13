import { Suspense } from 'react';
import { Provider } from 'react-redux';
import appStore from './redux/store';
import AppRouter from './router/AppRouter';
import './App.css';

function App() {

  return (
    <div className="App">
      <Provider store={appStore}>
        <Suspense fallback={<h1>Cargando...</h1>}>
          <AppRouter />
        </Suspense>
      </Provider>
    </div>
  )
}

export default App;
