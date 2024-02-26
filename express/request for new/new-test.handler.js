export function getData(req,res) {
    console.log(req.query);
    return res.end("data recieved");
}