import api from "./api-config";

export const getAllCategories = async () => {
  const res = await api.get("/categories");
  return res.data;
};
