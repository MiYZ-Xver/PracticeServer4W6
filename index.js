let express = require('express');
let app = express();

// json data
let fabric ={
    "data": [
        {
            name: "Acrylic",
            description: "A synthetic fiber made from polymer fibers, often used as a substitute for wool.",
            applications: "Commonly found in sweaters, blankets, and upholstery. It is lightweight, warm, and resistant to wrinkles.",
            
        },
        {
            name: "Aertex",
            description: "A lightweight, breathable fabric made from loosely woven cotton.",
            applications: "Used in sportswear and summer clothing due to its breathable qualities.",
            
        },
        {
            name: "Alpaca",
            description: "A natural fiber sourced from alpaca animals, similar to wool but softer and warmer.",
            applications: "Often used in luxury scarves, sweaters, and blankets.",
           
        },
        {
            name: "Canvas",
            description: "A heavy-duty, plain-woven fabric made from cotton or linen.",
            applications: "Used in sails, tents, bags, and artist's canvases.",
           
        },
        {
            name: "Cashmere",
            description: "A luxurious fiber obtained from cashmere goats, known for its softness and warmth.",
            applications: "Used in high-end sweaters, scarves, and coats.",
            
        },
        {
            name: "Chenille",
            description: "A soft, fuzzy fabric made from twisted yarns with a velvet-like texture.",
            applications: "Used in blankets, sweaters, and upholstery.",
           
        },
        {
            name: "Chiffon",
            description: "A lightweight, sheer fabric made from silk, nylon, or polyester.",
            applications: "Used in evening wear, scarves, and dresses.",
           
        },
        {
            name: "Cotton",
            description: "A soft, breathable natural fiber harvested from cotton plants.",
            applications: "Used universally in clothing, bed linens, towels, and countless other applications.",
           
        },
        {
            name: "Crepe",
            description: "A lightweight fabric with a crinkled or pebbled surface, often made from silk or wool.",
            applications: "Used in dresses, blouses, and formal wear.",
           
        },
        {
            name: "Damask",
            description: "A reversible, patterned fabric made of silk, wool, or synthetic fibers.",
            applications: "Often found in table linens, upholstery, and formal clothing.",
           
        },
        {
            name: "Denim",
            description: "A durable cotton twill fabric, typically blue and used for jeans.",
            applications: "Primarily used in jeans, jackets, and casual wear.",
            
        },
        {
            name: "Flannel",
            description: "A soft, brushed cotton or wool fabric that is warm and comfortable.",
            applications: "Commonly used in pajamas, shirts, and bedding.",
           
        },
        {
            name: "Georgette",
            description: "A lightweight, crinkled fabric made from silk or polyester.",
            applications: "Commonly used in dresses, blouses, and scarves.",
            
        },
        {
            name: "Gingham",
            description: "A lightweight cotton fabric with a checkered or plaid pattern.",
            applications: "Used in shirts, dresses, and tablecloths.",
            
        }
    ]
}

app.use('/',express.static('public'));

app.get('/data',(req,res)=>{
    console.log(req);
    res.json(fabric);
})

app.get('/data/:name',(req,res)=>{
    console.log(req.params.name);
    let user_name = req.params.name;
    let user_obj;
    for(let i=0;i<fabric.data.length;i++){
        if(user_name ==fabric.data[i].name){
            user_obj=fabric.data[i];
        }
    }
    console.log(user_obj);
    if(user_obj){
        res.json(user_obj);
    }else{
        res.json({status:"info not present"});
    }

})

app.listen(3000,()=>{
    console.log("app is listening at localhost:3000");
})
