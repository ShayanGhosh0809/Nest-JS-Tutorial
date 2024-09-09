import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SampleModuleModule } from './sample_module/sample_module.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [SampleModuleModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
