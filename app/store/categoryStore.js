import create from "zustand";
import categores from "../components/category/Data";

const useCatgoryStore = create((set) => ({
  categories: categores,
}));

export default useCatgoryStore;
