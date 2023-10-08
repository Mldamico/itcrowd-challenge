import { useEffect, useState } from 'react';
import { Product } from '../../interfaces/products';
import { getProducts } from '../../api/apiProducts';
import ProductCard from './ProductCard';
import { PaginationComponent } from '../ui/Layout/PaginationComponent';
import { Button, TextInput } from 'flowbite-react';

export const PAGESIZE = 3;

export const ProductsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState<Product[] | undefined>(undefined);
  const [productCount, setProductCount] = useState<number | undefined>();
  const [searchProduct, setSearchProduct] = useState('');

  useEffect(() => {
    const offset = (currentPage - 1) * PAGESIZE;
    getProducts(offset, PAGESIZE).then((res) => {
      setProducts(res.data.products);
      setProductCount(res.data.totalCount);
    });
  }, [currentPage]);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const onSearch = () => {
    const offset = (currentPage - 1) * PAGESIZE;
    getProducts(offset, PAGESIZE, searchProduct).then((res) => {
      setProducts(res.data.products);
      setProductCount(res.data.totalCount);
    });
  };




  if (!productCount) return <p>Loading...</p>;

  return (
    <>
      <PaginationComponent currentPage={currentPage} totalCount={productCount} onPageChange={onPageChange} />
      <div className="flex justify-center my-4 gap-3">
        <TextInput value={searchProduct} onChange={e => setSearchProduct(e.target.value)} className='w-[50%]' />
        <Button onClick={onSearch}>Search</Button>
      </div>
      <div className='grid grid-cols-3 gap-4 mx-8'>
        {products?.map(product => (<ProductCard key={product.id} product={product} />))}
      </div>
      <PaginationComponent currentPage={currentPage} totalCount={productCount} onPageChange={onPageChange} />
    </>
  );
};
