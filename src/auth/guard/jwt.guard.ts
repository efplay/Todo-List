import { AuthGuard } from "@nestjs/passport";
// Import `AuthGuard` from the `@nestjs/passport` library. This is a base class that integrates with Passport.js to perform authentication.

export class JwtAuthGuard extends AuthGuard('jwt') {}
// Create the `JwtAuthGuard` class, which extends (inherits) the functionality of the `AuthGuard` base class.
// We specify the string `'jwt'` in the `AuthGuard` constructor so that it uses the JWT authentication strategy.
// This strategy must be previously defined (e.g. via `@nestjs/passport` using JWT).