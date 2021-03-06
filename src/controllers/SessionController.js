//index, show, store, update, destroy
const User = require('../models/User')

module.exports = {
   async store(req, res){
        const email = req.body.email;

        // const user = await User.create({ email })

        let user = await User.findOne({ email : email });

        if (!user){
            user = await User.create({ email: email})
        }

        return res.json(user);
    }
}