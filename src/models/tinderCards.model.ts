import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongooseDelete from 'mongoose-delete';

export type TinderCardDocument = HydratedDocument<TinderCard>;

@Schema()
export class TinderCard {
    @Prop()
    name: string;

    @Prop()
    imgURL: string;
}

export const TinderCardSchema = SchemaFactory.createForClass(TinderCard);

// Add mongoose-delete plugin to the schema
// TinderCardSchema.plugin(mongooseDelete, { deletedAt: true, overrideMethods: true });