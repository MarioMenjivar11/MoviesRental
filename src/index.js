import app from './app';

const dotenv = require('dotenv');
dotenv.config();

// const passport = require('passport');
// const passportJWT = require('passport-jwt');
// const JwtStrategy = passportJWT.Strategy;
// const ExtractJwt = passportJWT.ExtractJwt;

// const options = {
//     jwtFromRequests: ExtractJwt.fromAuthHeaderAsBearerToken(),
//     secretOrKey: process.env.SECRET_OR_KEY
// };

// const strategy = new JwtStrategy(options,(payload, next) => {
//     //get user from DB
//     const user = null;
//     next(null, user);
// });
// passport.use(strategy);
// app.use(passport.initialize());

const PORT = process.env.PORT || 4000;

async function main(){
    await app.listen(PORT);
    console.log('server on port 4000');
};

main();