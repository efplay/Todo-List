import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UserService } from 'src/user/user.service'
import { AuthDto } from './dto/auth.dto'

/**
 * AuthService
 *
 * This Service for to handle user authentication operations
 * It is responsible for validating user data, generating JWT (JSON Web Token)
 *
 * For next authorization and interaction with the user database
 * via UserService
 */

@Injectable()
export class AuthService {
	/**
	 * Constructor class AuthService
	 *
	 * There is the dependencies are implemented:
	 * JwtService: user for generation, validation and decoding JWT
	 * UserService: provides methods for searching and managing user data
	 *
	 * @param jwt A JwtService to handle tokens
	 * @param userService for work with the user data
	 */
	constructor(
		private jwt: JwtService, // Service with the JWT
		private userService: UserService // Service for work with the user data
	) {}

	/**
	 * Method login
	 *
	 * accepts an object with user data ( for example email,password) but does not perform and validation
	 * simply returns this data.
	 *
	 * @param dto Object AuthDto containing the user data login
	 *  This objected is expected to contain fiends such as email and password
	 * @returns Return objects AuthDto. At this point method simply returns
	 *  the incoming data without processing
	 */

	async login(dto: AuthDto) {
		// At this point method simply returns object AuthDto
		return dto
	}


	private issueTokens(userId:string){
		const data = {id:userId}

		const accessToken =  this.jwt.sign(data, {
			expiresIn: '24h'
		})

		const refreshToken = this.jwt.sign(data, {
			expiresIn = '3h'
		})
	}
}
