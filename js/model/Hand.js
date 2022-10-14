import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const handSchema = new Schema({
    numberOfPlayers: Number,
    blinds: { sb: Number, bb: Number }
});
const HandModel = model('Hand', handSchema);
export default HandModel;
