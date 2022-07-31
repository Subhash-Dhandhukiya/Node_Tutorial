const getAllProductsStatic = async (req, res) => {
  throw new Error("Testing aync erros");
  res.status(200).json({ msg: "Product Testing Route" });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "Product Route" });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
