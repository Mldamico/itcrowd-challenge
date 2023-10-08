import { Button, Table } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { deleteProductsById, getProducts } from '../../api/apiProducts';
import { Product } from '../../interfaces/products';
import toast from 'react-hot-toast';
import { CreateProductForm } from './CreateProductForm';

export function ProductsAdmin() {
  const [products, setProducts] = useState<Product[] | undefined>();
  const [product, setProduct] = useState<Product | undefined>();
  const [editMode, setEditMode] = useState(false);
  const [displayForm, setDisplayForm] = useState(false);
  useEffect(() => {
    getProducts(0, 100).then(res => {
      setProducts(res.data.products);
    });
  }, [products]);

  const deleteProduct = async (id: number) => {
    const token = localStorage.getItem("user");
    try {
      deleteProductsById(id, token!);
      toast('Product deleted successfully');
    } catch (err) {
      toast('Error deleting product');
    }
  };

  const editProduct = async (product: Product) => {
    setProduct(product);
    setDisplayForm(true);
    setEditMode(true);
  };

  const reset = () => {
    setProduct(undefined);
    setDisplayForm(false);
    setEditMode(false);
  };

  if (!products) return <p>Loading...</p>;
  return (
    <>
      <Table striped>
        <Table.Head>
          <Table.HeadCell>
            Product name
          </Table.HeadCell>
          <Table.HeadCell>
            Price
          </Table.HeadCell>
          <Table.HeadCell>
            description
          </Table.HeadCell>
          <Table.HeadCell>
            Edit
          </Table.HeadCell>
          <Table.HeadCell>
            Delete
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {products.map(product => (
            <Table.Row key={product.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {product.name}
              </Table.Cell>
              <Table.Cell>
                ${product.price}
              </Table.Cell>
              <Table.Cell>
                {product.description}
              </Table.Cell>
              <Table.Cell>
                <p
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 cursor-pointer"
                  onClick={() => editProduct(product)}
                >
                  Edit
                </p>
              </Table.Cell>
              <Table.Cell>
                <p
                  className="font-medium text-red-600 hover:underline dark:text-red-500 cursor-pointer"
                  onClick={() => deleteProduct(product.id)}
                >
                  Delete
                </p>
              </Table.Cell>
            </Table.Row>
          ))}

        </Table.Body>
      </Table>

      <div className='flex justify-center my-4'>
        {!displayForm ? <Button onClick={() => setDisplayForm(true)}>
          Create Product
        </Button>
          :
          <Button onClick={reset}>
            Close
          </Button>
        }
      </div>
      {displayForm && (
        <CreateProductForm product={product} edit={editMode} resetForm={reset} />
      )}
    </>
  );
}


