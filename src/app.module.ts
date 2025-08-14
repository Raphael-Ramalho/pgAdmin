import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule], //Link one module to another
  controllers: [],
  providers: [],
})
export class AppModule {}
