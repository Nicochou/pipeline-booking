var PriceService = require('../services/price.service')    
exports.getPrice = async function (req, res, next) {

  try {
    var price = 345;
      //var prices = await PriceService.calcPrice()
      return res.status(200).json({ status: 200, data: prices, message: "Succesfully Price Calculated" });
  } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
  }
}

