import { UseGuards } from "@nestjs/common";
// Import the `UseGuards` decorator from NestJS, which is used to apply protection mechanisms to routes.
import { JwtAuthGuard } from "../guard/jwt.guard";
// Import the `JwtAuthGuard` security mechanism, which is responsible for validating JWT.




export const Auth = () => UseGuards(JwtAuthGuard)
// Export the `Auth` function, which returns the result of calling the `UseGuards` decorator using `JwtAuthGuard`.
// Now `@Auth()` can be used instead of `@UseGuards(JwtAuthGuard)` in controllers.