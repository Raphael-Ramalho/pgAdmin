import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';

/**
 * The module class encapsulate a set of related controllers, providers (services and repositories)
 * and other modules, providing a clear and logical structure for the app */
@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserRepository],
})
export class UserModule {}
