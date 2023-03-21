import { Test, TestingModule } from '@nestjs/testing';
import { TinderCardsController } from './tinder-cards.controller';

describe('TinderCardsController', () => {
  let controller: TinderCardsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TinderCardsController],
    }).compile();

    controller = module.get<TinderCardsController>(TinderCardsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
