import { IsEmail, IsString, MinLength } from 'class-validator'
// import decorators from library 'class-validator' for checking input data

export class AuthDto {
	/**
	 * Address email of user
	 * @example "user@example.com"
	 */
	@IsEmail()
	// check , that value is a valid email-address
	email: string

	/**
	 * Password of user
	 * @description Password must be at least 6 char long
	 * @example "password123"
	 */
	@MinLength(6, {
		message: 'Password must be at least 6 characters long'
	})

	// Install the minimal long string (6 symbols) and custom message in case of validation error
	@IsString()
	// check , that value is a string
	password: string
}
