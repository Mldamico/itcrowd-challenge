interface BrandSeed {
  id: number;
  name: string;
  logo_url: string;
}
interface ProductSeed {
  name: string;
  description: string;
  price: number;
  image_url: string;
  brandId: number;
}

interface SeedData {
  brands: BrandSeed[];
  products: ProductSeed[];
}

export const seedData: SeedData = {
  brands: [
    { id: 1, name: "Selú", logo_url: 'https://s3.eu-west-1.amazonaws.com/cdn.spydeals.nl/images/uploads/pcfSxiI15V0xDIW8A4MpnOXcZ0YSPU8Q9HFZFBbP.png' },
    { id: 2, name: "Perlea", logo_url: 'https://www.perlea.com.ar/one-page/images/logo_perlea.png' },
    { id: 3, name: "Mora", logo_url: 'https://acdn.mitiendanube.com/stores/001/283/008/themes/common/ogimage-845580895-1652109642-32d1cafcae1f985d215ef1b5cfca9a601652109643.jpg?0' }
  ],
  products: [
    {
      name: 'Conjunto Taza soft + cola less',
      description: 'Conjunto Selú taza soft del talle 85 al 100 con cola less. Color blanco, rosa y negro',
      price: 20000,
      image_url: 'https://res-console.cloudinary.com/arecyus/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/cm9zc2luYS9ja3VzZGdkdnAwMDE1MGx1ZzgzbXZnNGI0/template_primary',
      brandId: 1
    },
    {
      name: 'Conjunto Push Up + cola less',
      description: 'Conjunto Selú push up del talle 85 al 100 con cola less. Color blanco y negro',
      price: 20000,
      image_url: 'https://res-console.cloudinary.com/arecyus/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/cm9zc2luYS9ja3VzZGF4cGQwMDB3MGx1ZzZmdW00NHR1/template_primary',
      brandId: 1
    },
    {
      name: 'Bombacha Selu',
      description: 'Bombacha culotte de la linea de Selú en blanco, nougat y negro',
      price: 5000,
      image_url: 'https://res-console.cloudinary.com/arecyus/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/cm9zc2luYS9ja3F0a3NyNGwwMDBlMGwxamc3OWQwemRj/template_primary',
      brandId: 1
    },
    {
      name: 'Body sin busto',
      description: 'Body sin busto de la linea de Mora',
      price: 10000,
      image_url: 'https://res-console.cloudinary.com/arecyus/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/cm9zc2luYS9ja3Frdng4c3QwMDE1MGx2cTV4bHJmb3kz/template_primary',
      brandId: 3
    },
    {
      name: 'Corpiño Perlea',
      description: 'Corpiño reductor con aro de la linea de Perlea talles del 34C al 40C.',
      price: 15000,
      image_url: 'https://res-console.cloudinary.com/arecyus/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/cm9zc2luYS9ja3EzcTc0d3gwMDA5bmJ5c2NqY2M1enBh/template_primary',
      brandId: 2
    },
    {
      name: 'Corpiño reductor sin aro',
      description: 'Corpiño reductor sin aro de la linea de Perlea. Talles del 34C al 42C.',
      price: 14000,
      image_url: 'https://res-console.cloudinary.com/arecyus/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/cm9zc2luYS9ja3EzcTR3bWEwMDA3bmJ5czFwM2MxN3U0/template_primary',
      brandId: 2
    }
  ]
};
