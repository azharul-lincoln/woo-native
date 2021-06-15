import create from "zustand";

const increaseCount = (set, count) => {
  return set((state) => ({ bears: state.bears + count }));
};

const useStore = create((set) => ({
  bears: 0,
  increasePopulation: (count) => increaseCount(set, count),
  removeAllBears: () => set({ bears: 0 }),
}));

export default useStore;

//On App.js

// const bears = useStore((state) => state.bears);
// const increasePopulation = useStore((state) => state.increasePopulation);

{
  /* <Text>{bears}</Text>
<Button
  title="Increse"
  style={{ width: "50%" }}
  onPress={() => increasePopulation(3)}
/> */
}
