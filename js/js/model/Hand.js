import { Schema, model, connect } from 'mongoose';
const handSchema = new Schema({
    numberOfPlayers: Number,
    blinds: {
        sb: Number,
        bb: Number
    }
});
const Hand = model('Hand', handSchema);
export const run = async () => {
    connect('mongodb+srv://jackmac:OKZYNRdz2laoAlcF@poker-db.qh6fgad.mongodb.net/?retryWrites=true&w=majority');
    const user = new Hand({
        numberOfPlayers: 10,
        blinds: {
            sb: 2,
            bb: 4
        }
    });
    await user.save();
    console.log(user);
};
