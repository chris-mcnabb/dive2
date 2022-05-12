import dbConnect from "../../../util/mongo";
import Favorite from "../../../models/Favorite";

export default async function handler(req, res) {
    const {
        method,
        query: {favorite},

    } = req;


    await dbConnect()

    if(method==="GET"){

        try {
            let favorites;
            if (favorite) {

                favorites = await Favorite.find(
                    {userId: favorite}
                );
            }else {
                favorites = await Favorite.find();
            }
            res.status(200).json(favorites);
        }catch(err){
            res.status(500).json(err)
        }

    }
    if(method==="POST"){

        try{
            const favorite = await Favorite.create(req.body);
            res.status(201).json(favorite)
        }catch(err){
            res.status(500).json(err);
        }
    }
    if(method === 'PUT'){
        const items = req.body
        console.log(favorite)
      try{
            const updatedFavorite = await Favorite.findOneAndUpdate(
                {userId: favorite},
                {$push: {items: {...items}}}
            )
            res.status(200).json(updatedFavorite)
        }catch(err){
            res.status(500).json(err);
        }
    }
}

