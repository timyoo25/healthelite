import api from "./api-config";

export const getAllProducts = async () => {
  const res = await api.get(`/products`);
  return res.data;
};

export const getOneProduct = async (id) => {
  const res = await api.get(`/products/${id}`);
  return res.data;
};

export const postProduct = async (productData) => {
  const res = await api.post("/products/", { product: productData });
  return res.data;
};

export const putProduct = async (id, productData) => {
  const res = await api.put(`/products/${id}`, { product: productData });
  return res.data;
};

export const deleteProduct = async (id) => {
  await api.delete(`/products/${id}`);
};
