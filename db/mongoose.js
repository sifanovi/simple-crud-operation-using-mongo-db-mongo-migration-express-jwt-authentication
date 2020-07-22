const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://root:root@cluster0.i6yxo.mongodb.net/dine-in-tracker?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
},(error,result)=>
{
    if(error)
    {
        console.log(error);
    }
    else{
        console.log("connected");
    }
    
})