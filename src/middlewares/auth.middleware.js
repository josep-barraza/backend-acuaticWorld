import jwt from 'jsonwebtoken'


const verificarToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) 
    {return res.status(401).json({ 
        ok:false,
        msg: "Token requerido" });}

  try {
    const desifrar = jwt.verify(token, process.env.JWT_SECRET);

    req.user = desifrar;   // 👈 guardamos el usuario
    next();

  } catch (err) {
    res.status(401).json({ message: "Token inválido" });
  }
};

export const middleware = {
    verificarToken

} 
