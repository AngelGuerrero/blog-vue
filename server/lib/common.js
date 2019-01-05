function response(affedtedRows, res) {
  if (affedtedRows == 0) {
    return res.status(404).json({ message: 'No data found' });
  }
  
  res.status(200).json(affedtedRows);
};

module.exports = { response }