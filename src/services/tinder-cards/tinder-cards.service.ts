import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TinderCard, TinderCardDocument } from 'src/models/tinderCards.model';

interface TinderModel extends  Model<TinderCardDocument> {
  delete: any;
  restore: any;
  findDeleted: any;
}

@Injectable()
export class TinderCardsService {
  constructor(@InjectModel(TinderCard.name) private readonly tinderCardsModel: TinderModel) {}

  getTestTinder(): string {
    return 'tinder from nestjs meow meow';
  }

  async findAll(): Promise<TinderCard[]> {
    return this.tinderCardsModel.find(); }

  async findAllDeleted(): Promise<TinderCard[]> {
    return this.tinderCardsModel.findDeleted();
  }

  async deleCard(objId): Promise<Object> {
    try {
      const cardTinder = await this.tinderCardsModel.find({ _id: objId });
      
      if(!cardTinder.length) throw new HttpException('not found card', HttpStatus.NOT_FOUND);

      const result = await this.tinderCardsModel.delete({ _id: objId });
      return result;
    } catch(err){
      throw new HttpException(err.message, HttpStatus.NOT_FOUND);
    }
  }

  async restoreCard(objId): Promise<TinderCard> {
    try {
      const cardTinder = await this.tinderCardsModel.findDeleted({ _id: objId });
      
      if(!cardTinder.length) throw new HttpException('not found card', HttpStatus.NOT_FOUND);

      const result = await this.tinderCardsModel.restore({ _id: objId });
      return result;
    } catch(err){
      throw new HttpException(err.message, HttpStatus.NOT_FOUND);
    }
  }

  async insertCard(name: string, imgURL: string): Promise<TinderCard> {
    const newCard = new this.tinderCardsModel({
      name,
      imgURL
    });
    const result = await newCard.save();
    return result;
  }
}

