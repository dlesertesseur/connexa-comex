const dynamicImport = async (path) => {
  const {comp} = await import(`./${path}/index.jsx`);
  return(comp)
};

const getFromLocalStorage = (key) => {
  const value = localStorage.getItem(key);

  let user = null;
  if (value !== null) {
    user = JSON.parse(value);
  }
  return user;
};

const setToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const removeFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};

export {dynamicImport, getFromLocalStorage, setToLocalStorage, removeFromLocalStorage}