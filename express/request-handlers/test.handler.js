export function getData(req,res) {
    console.log(req.query);
    return res.end("data recieved");
}

export function postData(req,res) {
    console.log(req.body);
    return res.end("data obtained");
}


