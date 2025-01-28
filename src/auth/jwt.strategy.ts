import { Injectable } from '@nestjs/common' // Decorator to indicate a service that can be injected into other parts of the program.
import { ConfigService } from '@nestjs/config' // Service for working with configuration variables.
import { PassportStrategy } from '@nestjs/passport' // A class for creating authentication strategies using Passport.
import { ExtractJwt, Strategy } from 'passport-jwt' // Tools for working with JWT (token extraction and JWT strategy).
import { UserService } from 'src/user/user.service' // Service for working with users (for example, to retrieve a user from the database).

@Injectable() // A decorator that marks the class as a NestJS service.  // Indicates the service for injection.
export class JwtStrategy extends PassportStrategy(Strategy) {
	// The `JwtStrategy` class extends the standard JWT strategy provided by the Passport library.
	constructor(
		private configService: ConfigService, // Inject ConfigService to access environment variables. // Getting environment variables.
		private userService: UserService // Inject UserService to interact with the user base.  // Working with users.
	) {
		// Call the constructor of the parent class PassportStrategy with the JWT configuration.
		super({
			// Settings for extracting the JWT token from the Authorization header in the format “Bearer <token>”.
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extracting the token from the Authorization header.
			// Indicates that the token can be verified even after the expiration date (usually not recommended).
			ignoreExpiration: true, // Ignoring the expiration of the token (dangerous)
			// Secret key for token verification, obtained from the configuration (environment variable `JWT_SECRET`).
			secretOrKey: configService.get('JWT_SECRET') // Secret for token verification.
		})
	}
	// The `validate` method is called after successful token validation.
	async validate({ id }: { id: string }) {
		// Token validation. Returns user data.
		// Extract the user ID from the decoded token (Payload).
		return this.userService.getById(id) // Search for a user by ID.
		// Return the user from the database by ID. This adds the user to the `req.user` object.
	}
}
