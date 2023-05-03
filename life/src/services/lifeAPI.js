import authApi from "./authAPIConfig";

export async function getCategories(data) {
  const response = await authApi.get('/categories/', data)
  return response
}

export async function getProducts(data) {
  const response = await authApi.get('/products/', data)
  return response
}

