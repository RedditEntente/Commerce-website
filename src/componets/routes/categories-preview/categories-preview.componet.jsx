

import { Fragment, useContext } from 'react';
import CategoryPreview from '../../category-preview/category-preview.componet';

import { CategoriesContext } from '../../../contexts/categories.context';



function CategoriesPreview() {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return <CategoryPreview key={title} title={title} products={products}></CategoryPreview>;

      })}
    </Fragment>
  );
}

export default CategoriesPreview;