module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send({ found: 'mojo' });
  });

  app.get('/api', function(req, res) {
    res.json({ message: 'MOJO!' });
  });

  app.get('/api/product', function(req, res) {
    res.json({ message: 'THE PRODUCTS!' });
  });
}
