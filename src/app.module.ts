import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as cors from 'cors'

import { TinderCardsController } from './controllers/tinder-cards/tinder-cards.controller';

import { TinderCardsModule } from './modules/tinder-cards/tinder-cards.module';
import { TinderCardSchema, TinderCard } from './models/tinderCards.model';
import { TinderCardsService } from './services/tinder-cards/tinder-cards.service';
import { dbAddress } from 'src/utils/configs/envConfig';

@Module({
  imports: [MongooseModule.forRoot(dbAddress), 
  MongooseModule.forFeatureAsync([
    {name: TinderCard.name, useFactory: () => {
    const schema = TinderCardSchema;
        schema.plugin(require('mongoose-delete'), { deletedAt: true, overrideMethods: 'all' });
        return schema;
  }},
]), 
TinderCardsModule],
  controllers: [TinderCardsController],
  providers: [TinderCardsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(cors())
      .forRoutes('tinder')
  }
}