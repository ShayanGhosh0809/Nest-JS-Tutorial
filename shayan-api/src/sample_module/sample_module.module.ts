import { Module } from '@nestjs/common';
import { SampleModuleController } from './sample_module.controller';
import { SampleModuleService } from './sample_module.service';

@Module({
  controllers: [SampleModuleController],
  providers: [SampleModuleService],
})
export class SampleModuleModule {}
