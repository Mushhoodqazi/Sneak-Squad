import Signupmodel from "../models/Signup.js";
import bcrypt from "bcrypt";
export const Logincontroller = async (req, res) => {
  const { email, password } = req.body;
  console.log(
    "🚀 ~ file: Logincontroller.js:5 ~ Logincontroller ~ req.body:",
    req.body
  );
  try {
    const ifexists = await Signupmodel.findOne({ email });
    console.log(
      "🚀 ~ file: Logincontroller.js:8 ~ Logincontroller ~ ifexists:",
      ifexists
    );
    if (ifexists) {
      const match = await bcrypt.compare(password, ifexists.password);
      console.log(
        "🚀 ~ file: Logincontroller.js:10 ~ Logincontroller ~ match:",
        match
      );

      if (match) {
        res.status(200).send({ message: "Login sucessfull" });
      } else {
        res.status(500).send({ message: "incorrect email or password" });
      }
    } else {
      res.status(404).send({ message: "incorrect email or password" });
    }
  } catch {}
};
