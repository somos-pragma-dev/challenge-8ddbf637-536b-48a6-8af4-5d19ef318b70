import { PassportStatic } from 'passport';
import { Strategy as OAuth2Strategy } from 'passport-oauth2';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import { Request } from 'express';

export const configureAuth = (passport: PassportStatic) => {
  passport.use(
    new OAuth2Strategy({
      authorizationURL: 'https://oauth2provider.com/authorize',
      tokenURL: 'https://oauth2provider.com/token',
      clientID: 'YOUR_CLIENT_ID',
      clientSecret: 'YOUR_CLIENT_SECRET',
      callbackURL: 'http://localhost:3000/auth/callback',
    }, (accessToken, refreshToken, profile, done) => {
      return done(null, { accessToken, refreshToken, profile });
    })
  );

  passport.use(
    new JwtStrategy({
      jwtFromRequest: ExtractJwt.fromExtractors([(req: Request) => {
        let token = null;
        if (req && req.cookies) {
          token = req.cookies['jwt'];
        }
        return token;
      }]),
      secretOrKey: 'YOUR_SECRET_KEY',
    }, (jwtPayload, done) => {
      return done(null, jwtPayload);
    })
  );
};