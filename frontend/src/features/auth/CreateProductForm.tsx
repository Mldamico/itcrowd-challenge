import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Brand } from "../../interfaces/brand";
import { getBrands } from "../../api/brands";
import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";
import { Dropzone } from "./Dropzone";
import { createProduct, updateProduct } from "../../api/apiProducts";
import toast from "react-hot-toast";
import { Product } from "../../interfaces/products";
import { Loading } from "../ui/Layout/Loading";


interface Props {
  product?: Product;
  edit?: boolean;
  resetForm: () => void;
}

type FormValues = {
  name: string;
  description: string;
  image_url: string;
  price: number;
  brandId: number;
};

export const CreateProductForm = ({ product, edit = false, resetForm }: Props) => {
  const [brands, setBrands] = useState<Brand[] | undefined>();
  const [imageUrl, setImageUrl] = useState('');
  const { reset, register, handleSubmit } = useForm<FormValues>();

  useEffect(() => {
    getBrands().then(result => {
      setBrands(result.data);
    });

  }, []);

  useEffect(() => {
    if (product) {
      reset(product);
      setImageUrl(product.image_url);
    };
  }, [product, reset]);


  const onSubmit = async (data: FormValues) => {
    const productToSave = {
      ...data,
      price: +data.price,
      brandId: +data.brandId,
      image_url: imageUrl
    };
    const token = localStorage.getItem("user");

    if (!edit) {
      try {
        await createProduct(productToSave, token!);
        toast.success('Product created!');
      } catch (err) {
        toast.error('Something went wrong!');
      }
    } else {
      try {
        let productToEdit = {
          brandId: productToSave.brandId,
          name: productToSave.name,
          image_url: productToSave.image_url,
          description: productToSave.description,
          price: productToSave.price
        };
        await updateProduct(product!.id, productToEdit, token!);
        toast.success('Product updated!');
      } catch (err) {
        toast.error('Something went wrong!');
      }

    }
    resetForm();
  };
  if (!brands) return <Loading />;
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex max-w-md mx-auto flex-col gap-4'>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="name"
            value="Your name"
          />
        </div>
        <TextInput
          {...register("name")}
          id="name"
          placeholder="Product Name"
          required
          type="text"
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="price"
            value="Price"
          />
        </div>
        <TextInput
          {...register("price")}
          id="price"
          required
          type="number"
          placeholder="Price"
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="description"
            value="Description"
          />
        </div>
        <Textarea
          {...register("description")}
          id="description"
          placeholder="Description for the product"
          required
          rows={4}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="brands"
            value="Choose the brand"
          />
        </div>
        <Select
          id="brands"
          required
          {...register("brandId")}
        >
          {brands?.map(brand => (
            <option key={brand.id} value={brand.id}>{brand.name}</option>
          ))}

        </Select>
      </div>

      <div>
        <Dropzone setimage={setImageUrl} name="file" image={imageUrl} />
      </div>

      <Button type="submit">
        {!edit ? 'Upload product' : 'Edit product'}
      </Button>
    </form>
  );
};
