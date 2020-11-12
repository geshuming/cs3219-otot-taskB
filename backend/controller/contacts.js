let pool = require('../database');

// Handle index actions
exports.index = function (req, res) {
  pool.query('SELECT * from contacts', function (error, results, fields) {
    if (error) res.send(error);

    console.dir(results);

    res.json({
      message: 'Viewing all contacts',
      data: results
    });
  })
};

// Handle create contact actions
exports.new = function (req, res) {
  pool.query('INSERT INTO contacts SET ?', 
    {name: req.body.name, email: req.body.email, phone: req.body.phone}, 
    function (error, results, fields) {
      if (error) res.send(error);

      console.dir(results);

      res.json({
        message: 'New contact created!',
        data: results
      });
  });
};

// Handle view contact info
exports.view = function (req, res) {
  pool.query('SELECT * FROM contacts WHERE id = ?', 
    req.params.contact_id, 
    function (error, results, fields) {
      if (error) res.send(error);

      console.dir(results);

      res.json({
        message: 'Contact details found',
        data: contact
      });
  });
};

// Handle update contact info
exports.update = function (req, res) {
  pool.query('UPDATE contacts SET name = ?, email = ?, phone = ? WHERE id = ?', 
    [req.body.name, req.body.email, req.body.phone, parseInt(req.params.contact_id)], 
    function (error, results, fields) {
      if (error) res.send(error);

      console.dir(results);

      res.json({
        message: 'Contact updated!',
        data: results
      });
  });
};

// Handle delete contact
exports.delete = function (req, res) {
  pool.query('DELETE FROM contacts WHERE id = ?', 
    [parseInt(req.params.contact_id)], 
    function (error, results, fields) {
      if (error) res.send(error);

      console.dir(results);

      res.json({
        message: 'Contact deleted!',
        data: results
      });
  });
};