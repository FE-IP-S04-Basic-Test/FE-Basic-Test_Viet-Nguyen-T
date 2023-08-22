const addToCart = (product) => {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  cart.push({
    ...product,
    quantity: product.quantity,
  });
  localStorage.setItem('cart', JSON.stringify(cart));
};

const products = [
  {
    id: 1,
    name: 'Trà sữa truyền thống',
    price: 30000,
  },
  {
    id: 2,
    name: 'Trà sữa Thái xanh',
    price: 32000,
  },
  {
    id: 3,
    name: 'Trà sữa đặc biệt',
    price: 40000,
  },
];

const sugars = [
  {
    id: 1,
    amount: 0,
    label: '0%',
  },
  {
    id: 2,
    amount: 50,
    label: '50%',
  },
  {
    id: 3,
    amount: 100,
    label: '100%',
  },
];

const ices = [
  {
    id: 1,
    amount: 0,
    label: '0%',
  },
  {
    id: 2,
    amount: 50,
    label: '50%',
  },
  {
    id: 3,
    amount: 100,
    label: '100%',
  },
];

const quantity = 1;

let data = {
  ...products[0],
  ice: ices[2],
  sugar: sugars[2],
  quantity,
};
console.log(data);
addToCart(data);
