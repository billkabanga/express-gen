//Import contact model
const Contact = require('./model');

// Handle index actions
exports.index = (req, res) => {
  Contact.get((err, contacts) => {
    if (err) {
      res.json({
        status: "error",
        message: err,
      })
    }
    res.json({
      status: "success",
      message: "Contacts retrieved successfully",
      data: contacts
    });
  });
};

//handle create contact actions
exports.new = (req, res) => {
  const contact = new Contact();
  contact.name = req.body.name ? req.body.name : contact.name;
  contact.gender = req.body.gender;
  contact.email = req.body.email;
  contact.phone = req.body.phone;
  //save contact and check for errors
  contact.save(err => {
    if (err) {
      res.json(err)
    }
    res.json({
      message: 'New contact created',
      data: contact
    });
  });
};

//handle view contact info
exports.view = (req, res) => {
  Contact.findById(req.params.contactId, (err, contact) => {
    if (err) {
      res.send(err)
    }
    res.json({
      message: 'Contact details returned',
      data: contact
    });
  });
}

//handle update contact info
exports.update = (req, res) => {
  Contact.findById(req.params.contactId, (err, contact) => {
    if (err) {
      res.send(err)
    }
    console.log(req.body)
    contact.name = req.body.name ? req.body.name : contact.name;
    contact.gender = req.body.gender;
    contact.email = req.body.email;
    contact.phone = req.body.phone;

    contact.save(err => {
      if (err) {
        res.json(err)
      }
      res.json({
        message: 'Contact updated successfully',
        data: contact
      });
    });
  });
}
