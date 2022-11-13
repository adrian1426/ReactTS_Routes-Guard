import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { DashboardPage } from './pages/dashboard';
import { LoginPage } from './pages/login';
import appStore from './redux/store';
import './App.css';
import { publicRoutes, privateRoutes } from './constants/routesConstants';
import AuthGuard from './guard/AuthGuard';

function App() {

  return (
    <div className="App">
      <Provider store={appStore}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='*' element={<h1>Not Found Page</h1>} />
            <Route path={publicRoutes.LOGIN} element={<LoginPage />} />

            <Route element={<AuthGuard />}>
              <Route path={privateRoutes.DASHBOARD} element={<DashboardPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App;
