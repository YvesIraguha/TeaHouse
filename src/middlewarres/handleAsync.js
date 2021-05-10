const asyncHandler = (cb) => async (req, res, next) => {
  try {
    await cb(req, res, next);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export default asyncHandler;
