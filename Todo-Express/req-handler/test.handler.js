import todoModel from  "../model/todo.model.js";

export async function setTodo(req, res){
    try {
        let {todo} = req.body;
        if(!todo) return res.status(400).json({msg:"todo cannot be empty"});
        await todoModel.create({text: todo, completed: false});
        return res.status(201).json({msg:"todo added successfully"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg:"some error occured"});
    }
}

export async function getTodo(req, res){
    try {
        let result = await todoModel.find();
        return res.status(201).json({msg:"todo fetched successfully",result});
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg:"some error occured"});
    }
}

export async function editTodo(req, res){
    try {
        let {newTodo,id} = req.body;
        if(!newTodo||!id) return res.status(400).json({msg:"invalid parameters"});
        await todoModel.updateOne({_id:id},{text: newTodo});
        return res.status(201).json({msg:"todo edited successfully"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg:"some error occured"});
    }
}



export async function delTodo(req, res){
    try {
        let {id} = req.body;
        if(!id) return res.status(400).json({msg:"id must be provided"});
        await todoModel.deleteOne({_id: id});
        return res.status(201).json({msg:"todo deleted successfully"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg:"some error occured"});
    }
}
