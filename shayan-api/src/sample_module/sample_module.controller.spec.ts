import { Test, TestingModule } from '@nestjs/testing';
import { SampleModuleController } from './sample_module.controller';

describe('SampleModuleController', () => {
  let controller: SampleModuleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SampleModuleController],
    }).compile();

    controller = module.get<SampleModuleController>(SampleModuleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
