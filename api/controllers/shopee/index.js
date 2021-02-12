exports.searchProduct = async (req, res) => {
  res.status(200).send({
    responseMessage: "success",
    responseCode: 200,
    data: [
      {
        product_id: 1,
      },
      {
        product_id: 2,
      },
    ],
  });
};
