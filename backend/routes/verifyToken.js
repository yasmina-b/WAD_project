const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next)=>{
    const token = req.cookies.accessToken;

    try{    
        const decodedToken = await jwt.verify(token, process.env.JWT_SEC);

        if(!decodedToken){
            return res.status(401).json("You are not authenticated")
        }

        req.user = decodedToken;
        next();
    }catch(err){
        return res.status(401).json("You are not authenticated")
    }
};

const verifyTokenAndAuthorization = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        }else{
            res.status(403).json("You are not allowed to do that!");
        }
    })
}

const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.user.isAdmin) {
        next();
      } else {
        res.status(403).json("You are not alowed to do that!");
      }
    });
  };


module.exports =  { verifyToken , verifyTokenAndAuthorization, verifyTokenAndAdmin};