import * as bcrypt from 'bcrypt';

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

interface UserSeed {
  email: string;
  password: string;
}

interface SeedData {
  users: UserSeed[];
  brands: BrandSeed[];
  products: ProductSeed[];
}

export const seedData: SeedData = {
  users: [
    {
      email: 'admin@itcrowd.com',
      password: bcrypt.hashSync("123456", 10)
    }
  ],
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
      image_url: 'https://res.cloudinary.com/arecyus/image/upload/v1634302404/rossina/ckusdgdvp00150lug83mvg4b4.jpg',
      brandId: 1
    },
    {
      name: 'Conjunto Push Up',
      description: 'Conjunto Selú push up del talle 85 al 100 con cola less. Color blanco y negro',
      price: 20000,
      image_url: 'https://res.cloudinary.com/arecyus/image/upload/v1634302170/rossina/ckusdbdox000y0lug6lgc6r08.jpg',
      brandId: 1
    },
    {
      name: 'Bombacha Selu',
      description: 'Bombacha culotte de la linea de Selú en blanco, nougat y negro',
      price: 5000,
      image_url: 'https://res.cloudinary.com/arecyus/image/upload/v1625668066/rossina/ckqtkske6000d0l1jgk1s8hdk.jpg',
      brandId: 1
    },
    {
      name: 'Camiseta maternal',
      description: 'Camiseta maternal de la linea de Mora. Disponible en talle 1/2 y 3/4 en color blanco y piel.',
      price: 10000,
      image_url: 'https://res.cloudinary.com/arecyus/image/upload/v1624214481/rossina/ckq5jd6450000wdys62hgbsma.jpg',
      brandId: 3
    },
    {
      name: 'Corpiño Perlea',
      description: 'Corpiño reductor con aro de la linea de Perlea talles del 34C al 40C.',
      price: 15000,
      image_url: 'https://res.cloudinary.com/arecyus/image/upload/v1624104324/rossina/ckq3ps4bt0000nbysfo345yk6.jpg',
      brandId: 2
    },
    {
      name: 'Corpiño reductor sin aro',
      description: 'Corpiño reductor sin aro de la linea de Perlea. Talles del 34C al 42C.',
      price: 14000,
      image_url: 'https://res.cloudinary.com/arecyus/image/upload/v1624104494/rossina/ckq3pvr6s0002nbys50pl35sc.png',
      brandId: 2
    }
  ]
};
