import { createParamDecorator, ExecutionContext } from '@nestjs/common'
// import interface of the User from  Prisma-generate-client
import { User } from 'prisma/generated/client'

/**
 * Decorator `@currentUser` used for take current user
 * from request. He allows retrieve the all object or
 * current field form it
 */
export const CurrentUser = createParamDecorator(
	/**
	 * @param data - Key from object User (optional param). If indicated,
	 * return current field user. If no, return all the object.
	 * @param ctx Context of execution, done from NestJS,used for
	 * retrieving the query object.
	 * @returns  Field from object user or all the object user.
	 */
	(data: keyof User, ctx: ExecutionContext) => {
		// Retrieving object from request context execution
		const request = ctx.switchToHttp().getRequest()

		// Retrieving object user from request
		const user = request.user

		// Returning or current user or all the object
		return data ? user[data] : user
	}
)
