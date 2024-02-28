import testModel from "../test.model.js";


export async function testSet(req,res) {
    try {
        let {name, place} = req.body;
        if (!name ||!place) {
            return res.status(400).json({msg :"fields cannot be empty"});
        }
        await testModel.create({name, place});
        return res.status(201).json({msg:"record created"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg:"error occured"})
    }
}