import { ref } from "vue";

const useCount = (initialRef: number) => {
  const count = ref(initialRef);

  const increment = () => {
    count.value++;
  };
  const decrement = () => {
    count.value--;
  };
  const reset = () => {
    count.value = 0;
  };

  return {
    count,
    increment,
    decrement,
    reset,
  };
};

export default useCount;
