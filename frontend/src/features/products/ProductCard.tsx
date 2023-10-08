'use client';

import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { Product } from '../../interfaces/products';

interface IProductCard {
  product: Product;
  showDetails?: boolean;
}

export default function ProductCard({ product, showDetails = false }: IProductCard) {

  return (
    <Card
      horizontal={showDetails}
      imgAlt={product.name}
      imgSrc={product.image_url}
    >
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          <p>
            {product.name}
          </p>
        </h5>
      </a>

      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          {showDetails && (
            <>
              <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
                {product.description}
              </p>
              <img className='w-16 ml-auto' src={product.brand?.logo_url} />
            </>
          )}
          ${product.price}

        </span>


        {!showDetails &&
          (
            <Link
              className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              to={`/products/${product.id}`}
            >

              View Details

            </Link>
          )


        }

      </div>
    </Card>
  );
}


