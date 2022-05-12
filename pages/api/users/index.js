import dbConnect from "../../../util/mongo";
import User from "../../../models/User";
import argon2 from "argon2";
export default async function handler(req, res) {
    const {
        method,
        query: {group}
    } = req;


    await dbConnect()

    if (method === "GET") {
        try {
            let actives;
            if (group) {
           actives = await User.find({
               userType: {
                   $in: [group],
               }
           });
            } else {
                actives = await User.find();
            }

            res.status(200).json(actives);
        } catch (err) {
            res.status(500).json(err)
        }
    }
    if(method==="POST"){
        const{
            firstName,
            lastName,
            personal,
            password,
            experience,
            address,
            emergencyContact,
            employeeInfo,
            isEmployee,
            userType
        } =req.body

        const newUser = new User({
            firstName,
            lastName,
            personal,
            password: await argon2.hash(password),
            experience,
            address,
            emergencyContact,
            employeeInfo,
            isEmployee,
            userType


        })
        try{

            const user = await User.create(newUser);
            res.status(201).json(user)
        }catch(err){
            res.status(500).json(err);
        }
    }
}
