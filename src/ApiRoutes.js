//Initialise express router
let router = require('express').Router();

//Set default API response
router.get('/', (req, res) => {
  res.json({
    status: 'API is up',
    message: 'Welcome to my Express app'
  });
});

//import contact controller
const contactController = require('./controller');

router
  .route('/contacts')
  .get(contactController.index)
  .post(contactController.new);


router.route('/contacts/:contactId')
  .get(contactController.view)
  .put(contactController.update)
// Export API routes
module.exports = router;
