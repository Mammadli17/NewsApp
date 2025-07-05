import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { News } from '../../types/news.types';
import { fetchNews } from '../../services/news/newsService';

interface NewsWithSave extends News {
  isSaved: boolean;
}

interface NewsState {
  news: NewsWithSave[];
  saved: NewsWithSave[];
  page: number;
  total: number;
  isLoading: boolean;
  hasMore: boolean;
  isSavedLoading: boolean;
  fetchNextPage: () => Promise<void>;
  reset: () => void;
  toggleSave: (id: number) => void;
  loadSaved: () => Promise<void>;
  loadCachedNews: () => Promise<void>;
}

const SAVED_KEY = 'saved_news';
const NEWS_CACHE_KEY = 'news_cache';

export const useNewsStore = create<NewsState>((set, get) => ({
  news: [],
  saved: [],
  page: 1,
  total: 0,
  isLoading: false,
  hasMore: true,
  isSavedLoading: true,

  loadSaved: async () => {
    try {
      const savedStr = await AsyncStorage.getItem(SAVED_KEY);
      const saved: NewsWithSave[] = savedStr ? JSON.parse(savedStr) : [];
      set({ saved, isSavedLoading: false });
    } catch (e) {
      console.error('AsyncStorage oxunanda xəta:', e);
      set({ isSavedLoading: false });
    }
  },

  loadCachedNews: async () => {
    try {
      const cachedStr = await AsyncStorage.getItem(NEWS_CACHE_KEY);
      const cachedNews: NewsWithSave[] = cachedStr ? JSON.parse(cachedStr) : [];
      set({ news: cachedNews });
    } catch (e) {
      console.error('Cache oxunanda xəta:', e);
    }
  },

  fetchNextPage: async () => {
    const { page, news, isLoading, hasMore, saved, isSavedLoading } = get();
    if (isLoading || !hasMore || isSavedLoading) return;

    set({ isLoading: true });

    const take = 20;
    try {
      const response = await fetchNews(page, take);
      const savedIds = saved.map(item => item.id);

      const newData = response.data.map((item: News) => ({
        ...item,
        isSaved: savedIds.includes(item.id),
      }));

      const updatedNews = [...news, ...newData];

      await AsyncStorage.setItem(NEWS_CACHE_KEY, JSON.stringify(updatedNews));

      set({
        news: updatedNews,
        total: response.total,
        page: page + 1,
        hasMore: updatedNews.length < response.total,
        isLoading: false,
      });
    } catch (err) {
      console.error('Xəta:', err);

      if (page === 1 && news.length === 0) {
        try {
          const cachedStr = await AsyncStorage.getItem(NEWS_CACHE_KEY);
          const cachedNews: NewsWithSave[] = cachedStr ? JSON.parse(cachedStr) : [];
          set({ news: cachedNews, hasMore: false });
        } catch (e) {
          console.error('Local cache oxunanda xəta:', e);
        }
      }

      set({ isLoading: false });
    }
  },

  toggleSave: async (id: number) => {
    const { news, saved } = get();

    const updatedNews = news.map(item =>
      item.id === id ? { ...item, isSaved: !item.isSaved } : item
    );

    const targetItem = news.find(item => item.id === id);
    let updatedSaved: NewsWithSave[] = [];

    if (targetItem) {
      if (targetItem.isSaved) {
        updatedSaved = saved.filter(item => item.id !== id);
      } else {
        updatedSaved = [...saved, { ...targetItem, isSaved: true }];
      }
    }

    set({ news: updatedNews, saved: updatedSaved });

    try {
      await AsyncStorage.setItem(SAVED_KEY, JSON.stringify(updatedSaved));
    } catch (e) {
      console.error('AsyncStorage yazılanda xəta:', e);
    }
  },

  reset: () => {
    set({ news: [], page: 1, total: 0, hasMore: true });
  }
}));
