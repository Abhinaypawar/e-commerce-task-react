import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductListPage from './pages/ProductListPage';
// import CartPage from './pages/CartPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/cart" element={<CartPage/>} />
      </Routes>
    </Router>
  );
}

export default App;