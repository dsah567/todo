import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.jwt_token;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;// it wii contain { id: '..', iat: .., exp: ... }
    next();
  } catch (error) {
    res.status(500).json({ message: "server error", error: error.message });
  }
};

export default auth;