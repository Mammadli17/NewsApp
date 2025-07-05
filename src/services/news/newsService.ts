import axios from 'axios';
import { News } from '../../types/news.types';

interface NewsResponse {
  total: number;
  page: number;
  take: number;
  data: News[];
}

export const fetchNews = async (page: number, take: number): Promise<NewsResponse> => {
  const response = await axios.get<NewsResponse>(
    `https://node-api-starter-1.onrender.com/api/news?skip=${page}&take=${take}`
  );
  return response.data;
};
