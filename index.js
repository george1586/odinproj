const path=require('path');
const express=require('express');
const app=express();

app.get("/", (req,res)=>
{
    res.sendFile(path.join(__dirname,'/index.html'));
}
);

app.get("/about", (req,res)=>
{
    res.sendFile(path.join(__dirname,'/about-me.html'))
});

app.get("/contact",(req,res)=>
{
    res.sendFile(path.join(__dirname,"contact-me.html"))
})

app.use((req,res,next)=>
{
    res.status(404).sendFile(path.join(__dirname,'/404.html'))
})

app.listen(8000,()=>
{
    console.log("Listening on port 8000");
});