const Product = require("../models/Product");
const Cart = require("../models/cart");
const { STATUS_CODE } = require("../constants/statusCode");

exports.addProductToCart = (request, response) => {
  const { name, description, price } = request.body;
  
  // Dodajemy nowy produkt
  const product = {
    name,
    description,
    price: parseFloat(price)
  };
  
  Product.add(product);
  
  // Dodajemy produkt do koszyka
  Cart.add(name);
  
  response.status(STATUS_CODE.FOUND).redirect("/products/new");
};

exports.getProductsCount = (request, response) => {
  const count = Cart.getProductsQuantity();
  response.status(STATUS_CODE.OK).json({ count });
};