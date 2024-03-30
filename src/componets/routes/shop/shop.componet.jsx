import { Routes , Route } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.componet';
import Category from '../category/category.componet';
import './shop.styles.scss';

const Shop = () => {
  

  return (
    <Routes>
      <Route path=":category" element={<Category></Category>}></Route>
    </Routes>
  );
    
};

export default Shop;