import { Schema, model, connect } from 'mongoose';
import { IHand } from '../types/index';

const handSchema = new Schema<IHand>({
    numberOfPlayers: Number,
    blinds : { 
        sb: Number,
        bb: Number
    }
});

const Hand = model<IHand>('Hand', handSchema);

export const run = async () => {
    connect('mongodb+srv://jackmac:OKZYNRdz2laoAlcF@poker-db.qh6fgad.mongodb.net/?retryWrites=true&w=majority');

    const user = new Hand({
        numberOfPlayers: 10,
        blinds: {
            sb: 2,
            bb: 4
        }
    })

    await user.save(); 
    console.log(user);
       
}
