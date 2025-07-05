import { create } from 'zustand';
import { News } from '../../types/news.types';
import { fetchNews } from '../../services/news/newsService';

interface NewsState {
  news: News[];
  page: number;
  total: number;
  isLoading: boolean;
  hasMore: boolean;
  fetchNextPage: () => Promise<void>;
  reset: () => void;
}

export const useNewsStore = create<NewsState>((set, get) => ({
  news: [],
  page: 1,
  total: 0,
  isLoading: false,
  hasMore: true,

  fetchNextPage: async () => {
    const { page, news, isLoading, hasMore } = get();
    if (isLoading || !hasMore) return;

    set({ isLoading: true });

    try {
      const take = 20;
      const response = await fetchNews(page, take);
      const newData = response.data;

      set({
        news: [...news, ...newData],
        total: response.total,
        page: page + 1,
        hasMore: news.length + newData.length < response.total,
        isLoading: false,
      });
    } catch (err) {
      console.error('News fetch failed:', err);
      set({ isLoading: false });
    }
  },

  reset: () => {
    set({ news: [], page: 1, total: 0, hasMore: true });
  }
}));
