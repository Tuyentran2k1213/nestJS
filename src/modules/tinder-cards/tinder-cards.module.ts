import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TinderCard, TinderCardSchema } from '../../models/tinderCards.model';
import { TinderCardsService } from 'src/services/tinder-cards/tinder-cards.service';
import { TinderCardsController } from 'src/controllers/tinder-cards/tinder-cards.controller';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {name: TinderCard.name, useFactory: () => {
      const schema = TinderCardSchema;
          schema.plugin(require('mongoose-delete'), { deletedAt: true, overrideMethods: 'all' });
          return schema;
    }},
  ]),
  ],
  providers: [TinderCardsService],
  controllers: [TinderCardsController],
})
export class TinderCardsModule {};
  