import HttpError from "../helpers/HttpError";

export const checkExtension = (req, res, next) => {
  const extention = ("txt", "js", "ts", "json");
  const { filename } = req.body;
  const ext = filename.split(".").pop();
  if (!extention.includes(ext)) {
    next(HttpError(400, `App don't support files with ${ext} extention`));
  }
  next();
};
