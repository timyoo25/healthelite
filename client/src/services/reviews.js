import api from "./api-config";

export const getAllReviews = async (productId) => {
  const res = await api.get(`/products/${productId}/reviews`);
  return res.data;
};

export const postReview = async (productId, reviewData) => {
  const res = await api.post(`/products/${productId}/reviews`, {
    review: reviewData,
  });
  return res.data;
};

export const putReview = async (productId, id, reviewData) => {
  const res = await api.put(`/products/${productId}/reviews/${id}`, {
    review: reviewData,
  });
  return res.data;
};

export const deleteReview = async (productId, id) => {
  await api.delete(`/products/${productId}/reviews/${id}`);
};
