import { Routes, Route } from 'react-router-dom';
interface Props {
  children: React.ReactNode
}

const RouteWithNotFound = (props: Props) => {
  const { children } = props

  return (
    <Routes>
      {children}
      <Route path='*' element={<h1>Not Found Page</h1>} />
    </Routes>
  );
};

export default RouteWithNotFound;