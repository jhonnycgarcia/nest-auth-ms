import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class AuthService extends PrismaClient implements OnModuleInit {
    private readonly logger = new Logger(AuthService.name);

    constructor() {
        super();
    }

    async onModuleInit() {
        await this.$connect();
        this.logger.log('Connected to database');
    }
}
