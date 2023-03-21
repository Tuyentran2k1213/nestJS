import { Test, TestingModule } from '@nestjs/testing';
import { TinderCardsService } from './tinder-cards.service';

describe('TinderCardsService', () => {
  let service: TinderCardsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TinderCardsService],
    }).compile();

    service = module.get<TinderCardsService>(TinderCardsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
