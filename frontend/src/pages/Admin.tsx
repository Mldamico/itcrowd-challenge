import { useEffect } from "react";
import { getCurrentUser } from "../api/apiAuth";
import { useNavigate } from "react-router-dom";
import { ProductsAdmin } from "../features/auth/ProductsAdmin";


export const Admin = () => {
  const getToken = localStorage.getItem("user");
  const navigate = useNavigate();
  useEffect(() => {
    if (!getToken) {
      navigate('/login');
    }
    refetchToken();
  }, []);

  const refetchToken = () => {
    if (!getToken) return;
    getCurrentUser(getToken).then(res => {
      localStorage.setItem('user', res.data.token);
    }).catch(() => {
      navigate('/login');
    });
  };



  return (
    <>
      <ProductsAdmin />
    </>
  );
};
