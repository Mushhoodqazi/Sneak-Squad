const express = require("express");
const stripe = require("stripe")(
  "sk_test_51NQykkFTywI6OttIKZJJUGt0pZvCfkzXFxIku25oXeENUmRil9VObM2ad11CrvufH894LaeNmUE8siJ3vNYBzYGi00OCLBMkzJ"
);
const router = express.Router();

router.post("/payment", async (req, res) => {
  const { amount, currency, description, source } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      description,
      payment_method: source,
      confirm: true,
    });

    // Payment succeeded
    res.json({ paymentStatus: paymentIntent.status });
  } catch (error) {
    // Payment failed
    res.json({ error: error.raw.message });
  }
});

module.exports = router;
