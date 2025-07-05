import { Routes } from "../navigations/routes";
import { News } from "../types/news.types";

export type RootStackParamList = {
  [Routes.home]: undefined;
  [Routes.detail]: { item: News };
  [Routes.bottom]: undefined;
  [Routes.settings]: undefined;
};
