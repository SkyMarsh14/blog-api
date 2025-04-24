import { ExtractJwt, Strategy } from "passport-jwt";
import passport from "passport";
import prisma from "../db/prisma.js";

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.ACCESS_TOKEN_SECRET,
};

passport.use(
  new Strategy(opts, async (payload, done) => {
    try {
      const user = await prisma.findUnique(payload.id);
      if (user) return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);
