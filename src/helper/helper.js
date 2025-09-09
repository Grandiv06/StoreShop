const shorText = (text) => {
  return text.split(" ").slice(0, 3).join("");
};
const searchProducts = (products, search) => {
  if (!search) return products;
  const searchedProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search)
  );
  return searchedProducts;
};

const filterProducts = (products, category) => {
  if (!category) return products;
  const filteredProducts = products.filter((p) => p.category === category);
  return filteredProducts;
};

const createQueryObject = (currentQuery, newQuery) => {
  if (newQuery.categories === "all") {
    const { categories, ...rest } = currentQuery;
    return rest;
  }
  if (newQuery.search === "") {
    const { search, ...rest } = currentQuery;
    return rest;
  }

  return {
    ...currentQuery,
    ...newQuery,
  };
};

const getInitialQuery = (searchParams) => {
  const query = {};
  const category = searchParams.get("categories");
  const search = searchParams.get("search");
  if (category) query.category = category;
  if (search) query.search = search;
  return query;
};

const sumProducts = (product) => {
  const itemsCounter = product.reduce(
    (counter, product) => counter + product.quantity,
    0
  );
  const total = product
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);

  return { itemsCounter, total };
};
const productQuantity = (state, id) => {
  const index = state.selectedItem.findIndex((item) => item.id === id);
  if(index === -1){
    return 0;
  }else {
    return state.selectedItem[index].quantity;
  }
};
export {
  shorText,
  searchProducts,
  filterProducts,
  createQueryObject,
  getInitialQuery,
  sumProducts,
  productQuantity,
};
