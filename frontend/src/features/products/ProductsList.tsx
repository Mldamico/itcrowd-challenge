import { useEffect, useState } from 'react';
import { Product } from '../../interfaces/products';
import { getProducts } from '../../api/apiProducts';
import ProductCard from './ProductCard';
import { PaginationComponent } from '../ui/Layout/PaginationComponent';

export const PAGESIZE = 3;

export const ProductsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState<Product[] | undefined>(undefined);
  const [productCount, setProductCount] = useState<number | undefined>();

  useEffect(() => {
    var offset = (currentPage - 1) * PAGESIZE;
    getProducts(offset, PAGESIZE).then((product) => {
      setProducts(product.data.products);
      setProductCount(product.data.totalCount);
    });
  }, [currentPage]);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (!productCount) return <p>Loading...</p>;

  return (
    <>
      <PaginationComponent currentPage={currentPage} totalCount={productCount} onPageChange={onPageChange} />
      <div className='grid grid-cols-3 gap-4 mx-8'>
        {products?.map(product => (<ProductCard key={product.id} product={product} />))}
      </div>
      <PaginationComponent currentPage={currentPage} totalCount={productCount} onPageChange={onPageChange} />
    </>
  );
};
