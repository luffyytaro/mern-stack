import listModel from "../list.model.js";

export async function setList(req, res){
    try {
        let {list} = req.body;
        if(!list) return res.status(400).json({msg:"list cannot be empty"});
        await listModel.create({text: todo, completed: false});
        return res.status(201).json({msg:"list added successfully"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg:"some error occured"});
    }
}

export async function getList(req, res){
    try {
        let result = await listModel.find();
        return res.status(201).json({msg:"list fetched successfully",result});
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg:"some error occured"});
    }
}

export async function editList(req, res){
    try {
        let {newList,id} = req.body;
        if(!newList||!id) return res.status(400).json({msg:"invalid parameters"});
        await listModel.updateOne({_id:id},{text: newList});
        return res.status(201).json({msg:"list edited successfully"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg:"some error occured"});
    }
}



export async function delList(req, res){
    try {
        let {id} = req.body;
        if(!id) return res.status(400).json({msg:"id must be provided"});
        await listModel.deleteOne({_id: id});
        return res.status(201).json({msg:"list deleted successfully"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg:"some error occured"});
    }
}