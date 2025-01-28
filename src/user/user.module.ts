import { Module } from '@nestjs/common'
// Import the `@Module` decorator from NestJS, which is used to create the module.
import { UserService } from './user.service'
// Import the `UserService` service, which contains business logic related to users.
import { UserController } from './user.controller'
// Import the `UserController` controller, which is responsible for processing HTTP requests.
import { PrismaService } from 'src/prisma.services'
// Import the `PrismaService` that is used to interact with the database via Prisma ORM.

@Module({
	//The @Module decorator, which combines components (controllers, providers..)
	// Specify the controllers that are included in this module. In this case it is `UserController`.
	controllers: [UserController], // Controllers (UserController) are responsible for processing HTTP requests and sending responses to the client.
	// Specify the providers (services) that are available in this module. These are `UserService` and `PrismaService`.
	providers: [UserService, PrismaService], // Providers (UserService, PrismaService) are used to encapsulate business logic and/or database interaction.
	exports: [UserService]
}) //  Providers are injected into other components using Dependency Injection.
export class UserModule {}
// Export the `UserModule` class, which represents a user module. This module will be connected to the root application or other modules.
