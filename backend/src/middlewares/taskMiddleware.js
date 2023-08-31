const validateBody = (req, res, next) => {
  const { body } = req;

  if(body.title == undefined || body.status == undefined){
    return res.status(400).json({ messange: 'O campo title e status são obrigátorios.'});
  }
  if(body.title == '' || body.status == ''){
    return res.status(400).json({ messange: 'Os campos titulos e status não podem estar vazios.'});
  }
  next();
};


module.exports = {
  validateBody,
};