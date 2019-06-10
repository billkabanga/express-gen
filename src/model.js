const mongoose =  require('mongoose');

//Setup schema
const contactSchema = mongoose.Schema({
  name: String,
  email: String,
  gender: String,
  phone: String,
  createDate: {
    type: Date,
    default: Date.now
  }
});

//export contact model
const Contact = module.exports = mongoose.model('contact', contactSchema);

module.exports.get = (callback, limit) => {
  Contact.find(callback).limit(limit);
}
