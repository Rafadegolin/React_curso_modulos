const User = require("../models/User");
const jwt = require("jsonwebtoken");
const jwtsecret = process.env.JWT_SECRET;

const authGuard = async (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    // check if header has a token
    if(!token) return res.status(401).json({ errors: ["Acesso negado."] }); // Valida se o token veio

    // check if token is valid
    try {
        const verified = jwt.verify(token, jwtsecret); // verica se o token combina com o secret
        req.user = await User.findById(verified.id).select("-password"); // tenta achar o usuário
        next();
    } catch (error) {
        res.status(401).json({ errors: ["Token inválido"] });
    }
};

module.exports = authGuard;