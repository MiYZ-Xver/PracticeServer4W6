console.log("page is loading");
//1. Make sure the page loads first

window.addEventListener('load',function(){
    console.log("page has loaded");
    //2. Request data(fetch API)
    fetch('fabric_file.json')
    .then(function(response){
        //3. Then get the status of the request
        // console.log(response);
        return response.json()
    } )
    .then(function(data){
        //4. Then access the data
        // console.log(data.Material);
        let MaterialArray=data. Material;
        let button= document.getElementById('click-random-button');
        button.addEventListener('click',function(){
            let randomNumber =Math.floor(Math.random()*MaterialArray.length)
            let MaterialNameElement=document.getElementById('material-name');
            MaterialNameElement.innerHTML=data.Material[randomNumber].name;
            let WashElement=document.getElementById('washing-mode');
            WashElement.innerHTML=data.Material[randomNumber].washingMode;
            let DryElement=document.getElementById('drying-mode');
            DryElement.innerHTML=data.Material[randomNumber].dryingMode;
        })
        
        let placeholder = document.querySelector("#data-output");
        let out = "";
        for(let item of MaterialArray){
            out+=`
            <tr>
                <td>${item.name}</td>
                <td>${item.washingMode}</td>
                <td>${item.dryingMode}</td>
                <td>${item.description}</td>
                <td>${item.applications}</td>
            `;
        }
        placeholder.innerHTML= out;
    })
    
})


        


