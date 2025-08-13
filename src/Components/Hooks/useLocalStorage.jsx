import React, {useState, useEffect} from "react";

const useLocalStorage = (initialState, key) => {
  const [value, setValue] = useState(() => {
    const storeItem = localStorage.getItem(key);
    return storeItem ? JSON.parse(storeItem) : initialState;
  });

  useEffect(
    function(){
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue]
};

export default useLocalStorage;
