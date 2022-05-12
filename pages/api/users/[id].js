import dbConnect from "../../../util/mongo";
import User from "../../../models/User";

export default async function handler(req, res) {
    const {
        method,
        query: {id},

    } = req;


    await dbConnect()

    if (method === "GET") {
        try {
            const user = await User.findById(id);
            const {password, ...others} = user._doc

            res.status(200).json(others)
        } catch (err) {
            res.status(500).json(err)
        }
    }
    if (method === "PUT") {

        try {
            const user = await User.create(req.body);
            res.status(201).json(user)
        } catch (err) {
            res.status(500).json(err);
        }
    }
    if (method === "DELETE") {
        try {
            await User.findByIdAndDelete(id);
            res.status(200).json("User Deleted")
        } catch (err) {
            res.status(500).json(err);
        }

    }
}
