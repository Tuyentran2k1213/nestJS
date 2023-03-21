import { Controller, Get, Param, Post, Query, Redirect, Req, Res, Body, Delete, HttpCode, Patch } from '@nestjs/common';
import { TinderCardsService } from '../../services/tinder-cards/tinder-cards.service';
import { TinderCard } from 'src/models/tinderCards.model';

@Controller('tinder')
export class TinderCardsController {
  constructor(private readonly appService: TinderCardsService) {}

  @Get('testingCode')
  getTestTinder(@Query('haha') haha, @Query('kk') kk): string {
    if(haha && kk) return `the query is with: ${haha} --- and --- ${kk}`;
    return this.appService.getTestTinder();
  }

  @Get('testRedirect')
  @Redirect('https://nestjs.com', 301)
  getTestRedirt(): Object {
    return { url: 'https://docs.nestjs.com/v5/' };
  }

  // get all card tinder 
  @Get('all-cards')
  async findAll(): Promise<TinderCard[]> {
    return this.appService.findAll();
  }

  // get all deleted tinder cards
  @Get('all-deleted-cards')
  async findAllDeleted(): Promise<TinderCard[]> {
    return this.appService.findAllDeleted();
  }

  // adding new cards
  @Post('insert')
  async insertCard(@Body('name') name: string, @Body('imgURL') imgURL: string): Promise<TinderCard> {
    return this.appService.insertCard(name, imgURL);
  }

  // delete card by id 
  @Delete('delete/:id')
  async deleteCard(@Param('id') ObjId: string): Promise<Object> {
    return this.appService.deleCard(ObjId);
  }

  // restore card by id
  @Patch('restore/:id')
  async restoreTinderCard(@Param('id') ObjId: string): Promise<Object> {
    return this.appService.restoreCard(ObjId);
  }

  // get new card
  @Get(':id')
  getTinderId(@Param('id') id: string): string {
    return `the param of it is: ${id}`
  }
}
