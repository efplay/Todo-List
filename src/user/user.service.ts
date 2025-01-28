import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.services';

@Injectable() // decorator which mark the class as the provider for DI (Dependency Injection)
export class UserService { 
  // Get into PrismaService for interactions with the database
 constructor(private prisma: PrismaService) {}

  // Method for the giving user for the ID from database
   getById(id: string){ //async
    return this.prisma.user.findUnique({
      where:{
        id // Condition : look at for record with the specific ID value
      },
      include:{
        tasks:true // Also Loading  related tasks (tasks) user
      }
    })
  }
}
