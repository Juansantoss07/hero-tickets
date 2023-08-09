import mongoose from "mongoose";

export async function connect() {
    try{
        await mongoose.connect('mongodb+srv://juansantosscunha:u772ry0LQt9WYxa4@cluster0.k0jkw4g.mongodb.net/hero-tickets');

        console.log('connect sucess');
        
    } catch(error){
        console.error('~ file: database.ts:5 ~ connect ~ error:', error);
    }
}