import axios from 'axios';

axios.defaults.baseURL = 'https://paw-hut.b.goit.study';

export async function getCategories() {
  const response = await axios.get('api/categories');
  response.data.unshift('Всі');
  return response.data;
}

export async function getPets(page = 1, limit = 8, categoryId = null) {
  const params = {
    page,
    limit,
  };

  if (categoryId) {
    params.categoryId = categoryId;
  }

  const response = await axios.get('/api/animals', { params });

  return response.data;
}
