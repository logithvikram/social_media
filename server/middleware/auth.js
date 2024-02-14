import jwt from "jsonwebtoken";

export default async function verifyToken(req, res, next) {
    try {
        let token = req.header("Authorization");

        if (!token)
            return res.status(403).send("Access Denied");

        token = token.replace("Bearer ", "");

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}