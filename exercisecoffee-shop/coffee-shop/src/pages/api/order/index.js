import { db } from "@/server/db";

export default function ordering(req, res) {
    if (req.method === "GET") {
      const sendOrders = db.orders.get();
      res.status(200).json({ order: sendOrders });
    } //else if (req.method === "POST") {
    //   const menuId = req.body.id;
    //   const itemInCartAlready = db.cart.getById(menuId);
    //   if (itemInCartAlready) {
    //     db.cart.updateById(menuId, itemInCartAlready.quantity + 1);
    //   } else {
    //       db.cart.add(req.body);
    //     }
    //     res.status(200).json({ message: "Item added to cart" });
    //   } else {
    //     res.status(404).json({ message: "We only support GET requests" });
    //   }
    }