import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "prisma/generated/client";


@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit{ // init the prisma service
    async onModuleInit() {
        await this.$connect()
    }
}