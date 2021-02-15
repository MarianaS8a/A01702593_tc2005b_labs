let blusas = document.getElementById("blusa");
let collares = document.getElementById("collar");
let pants = document.getElementById("pants");

let total_blusas = 0;
let total_collares = 0;
let total_pants = 0;


blusas.onchange= () => {
    let products = document.getElementById("product1");
    total_blusas = 250*blusas.value;
    if(blusas.value == 0){
        products.innerHTML = "";
    }
    else if(blusas.value == 1){
        products.innerHTML = "1 Blusa $250";
    }
    
    else{
        products.innerHTML = blusas.value + " Blusas $" + total_blusas;
    }

    let total = total_blusas + total_collares + total_pants;
    let total_text = document.getElementById("total");
    let iva= total*0.16;
    total_text.innerHTML = "Total a pagar $" + (total+iva) + " ($" + iva + " de IVA)";
    document.getElementById("titulo_blusa").style.color="red";
}

collares.onchange= () => {
    let products = document.getElementById("product2");
    total_collares = collares.value*400;
    if(collares.value == 0){
        products.innerHTML = "";
    }
    else if(collares.value == 1){
        products.innerHTML = "1 Collar $400";
    }
    
    else{
        products.innerHTML = collares.value + " Collares $" + total_collares;
    }

    let total = total_blusas + total_collares + total_pants;
    let total_text = document.getElementById("total");
    let iva= total*0.16;
    total_text.innerHTML = "Total a pagar $" + (total+iva) + " ($" + iva + " de IVA)";
    document.getElementById("titulo_collar").style.color="red";

}

pants.onchange= () => {
    let products = document.getElementById("product3");
    total_pants = pants.value*400;
    if(pants.value == 0){
        products.innerHTML = "";
    }
    else if(pants.value == 1){
        products.innerHTML = "1 Pants $400";
    }
    
    else{
        products.innerHTML = pants.value + " Pants $" + pants.value*400;
    }

    let total = total_blusas + total_collares + total_pants;
    let total_text = document.getElementById("total");
    let iva= total*0.16;
    total_text.innerHTML = "Total a pagar $" + (total+iva) + " ($" + iva + " de IVA)";
    document.getElementById("titulo_pants").style.color="red";

}