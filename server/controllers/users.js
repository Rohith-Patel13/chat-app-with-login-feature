

exports.Register = async (requestObject,responseObject)=>{
    try{
        responseObject.status(201).send({recieved:requestObject.body})
    }catch(error){
        console.log(error.message)
        responseObject.status(500).send(error.message)
    }
}
