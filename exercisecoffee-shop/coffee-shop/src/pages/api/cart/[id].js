import { db } from "@/server/db";

export default function handler(req, res) {
  if (req.method === "DELETE") {
    const id = req.query.id;
    const numberId = Number(id);
    db.cart.delete(numberId);
    res.status(200).json({ message: "cart item removed" });
    // TODO #3 Implement the PUT method here and handle incrementing and decrementing the quantity of an item in the cart
  } else if (req.method === "PUT") {
    const id = req.query.id;
    const numberId = Number(id);
    const updatedCartItem = db.cart.updateById(numberId, req.body.quantity);
    res.status(200).json({ message: "cart item updated", updatedCartItem });
  } else {
    res
      .status(404)
      .json({ message: "We only support DELETE and PUT requests" });
  }
}