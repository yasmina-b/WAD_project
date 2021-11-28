const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const { verifyTokenAndAuthorization } = require("./verifyToken");

//REGISTER
router.post("/register", async (req,res) =>{
    if(req.body.password !== req.body.confirmPassword){
        return res.status(401).json({error: 'Passwords must match'});
    }

    const newUser = new User({
        name: req.body.name,
        lastName: req.body.lastname,
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
          ).toString(),
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
      } catch (err) {
        res.status(500).json(err);
      }
});

//LOGIN

router.post("/login", async (req,res)=>{
    try{
        const user = await User.findOne(
            {
                username: req.body.username
            }
        );

        !user && res.status(401).json("Wrong username");

        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        );

        const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        OriginalPassword !== req.body.password &&
            res.status(401).json("Wrong credentials");

        const accessToken = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin,
            },
            process.env.JWT_SEC,
                {expiresIn:"3d"}
            );

        const {password, ...others} = user._doc;
        
        res.cookie('accessToken', accessToken, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
            maxAge: 259200000,
            path: '/'
        })
        res.status(200).json({...others, accessToken});

    }catch (err) {
        res.status(500).json(err);
    }

});

router.get("/me", verifyTokenAndAuthorization, async (req,res) => {
    if(req.user){
        return res.status(200).json({user: req.user});
    }

    return res.status(401).json({error: 'Unauthorized'})
})

module.exports = router;