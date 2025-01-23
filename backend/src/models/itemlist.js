const itemlist = mongoose.Schema({
    pizza_type: {
     type: String,
     required: true
    },
    size: {
     type: String,
     required: true
    },
    price: {
     type: Number,
     required: true
    },
    dis_price: {
     type: Number,
    },
    uri: {
     type: String,
     required: true
    }
   })
   //Creating the collection Address
   const item = mongoose.model('item', itemlist)

   export default item;
