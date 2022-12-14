const InventoryItem = require('../models/InventoryItem')

module.exports = {
 
  createInventoryItem: async (req, res) => {
    try {
     await InventoryItem.create({
        tool: req.body.tool,
        amount: req.body.amount,
        post: req.params.id,
      });
      console.log("Inventory item has been added!");
      res.redirect("/post/"+req.params.id);
    } catch (err) {
      console.log(err);
    }
  },
  deleteInventoryItem: async(req, res) => {
    try {
      await InventoryItem.deleteOne({_id: req.params.inventoryitemid})
      res.redirect("/post/"+req.params.postid);
    } catch (err){
      console.log(err)
    }
  },
};
