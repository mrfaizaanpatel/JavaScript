fetch("http://localhost:8080/products")
.then(data=>data.json())
.then(data=>{
    console.log(data);
    data["_embedded"]["products"].forEach((product)=>{
        console.log(product);
        const a=document.createElement("a");
        a.texrtContent=product["productName"];
        document.body.appendChild(a);
    })
})