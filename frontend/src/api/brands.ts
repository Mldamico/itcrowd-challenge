
import { Brand } from "../interfaces/brand";
import axios from "./axios";

const getBrands = () => axios.get<Brand[]>("/brands");

export {
  getBrands,
};
