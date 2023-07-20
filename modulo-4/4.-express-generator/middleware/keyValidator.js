const validator = (req, res, next) => {
  if (req.headers.authorization) {
    next();
  }
  res.status(401).json({ message: "Not authorized" });
};

const timeTracker = (req, res, next) => {
  console.log(Date.now());
  next();
};

module.exports = { validator, timeTracker };
