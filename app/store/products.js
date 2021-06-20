import create from "zustand";
import {
  CONSUMER_SECRET,
  CONSUMER_KEY,
  BASE_URL,
} from "../../app/config/woocommerce/api/woocommerce_key";
import axios from "axios";

export const useProducts = create((set) => ({
  products: undefined,
  fetch: async (pond) => {
    const response = await axios.get(
      `${BASE_URL}products?consumer_key=${CONSUMER_KEY}&consumer_secret=${CONSUMER_SECRET}`
    );
    set({ products: response.data });
  },
}));
