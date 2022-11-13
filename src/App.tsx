import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { LoginPage } from './pages/login';
import appStore from './redux/store';
import { publicRoutes, privateRoutes } from './constants/routesConstants';
import AuthGuard from './guard/AuthGuard';
import PrivateDashboard from './pages/dashboard/PrivateDashboard';
import './App.css';

function App() {

  return (
    <div className="App">
      <Provider store={appStore}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navigate to={privateRoutes.PRIVATE} />} />
            <Route path='*' element={<h1>Not Found Page</h1>} />
            <Route path={publicRoutes.LOGIN} element={<LoginPage />} />

            <Route element={<AuthGuard />}>
              <Route path={`${privateRoutes.PRIVATE}/*`} element={<PrivateDashboard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App;
