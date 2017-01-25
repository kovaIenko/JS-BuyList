/**
 * Created by Ruslan on 21.01.2017.
 */



function remove(parent,child,basket_parent,basket_child) {
    var father=document.getElementById(parent);
    var son=document.getElementById(child);
    var basket_father=document.getElementById(basket_parent);
    var basket_son=document.getElementById(basket_child);
    father.removeChild(son);
    basket_father.removeChild(basket_son);
}


function to_minus(name,name_minus,name_product_basket) {
    var values_minus=document.getElementById(name).innerText;
    var value_basket_name_minus=document.getElementById(name_product_basket).innerText;
    +value_basket_name_minus--;
    +values_minus--;
    if(values_minus==1){
        document.getElementById(name_minus).disabled=true;
        document.getElementById(name_minus).style.opacity=0.6;
    }
    document.getElementById(name_product_basket).innerHTML=value_basket_name_minus;
    document.getElementById(name).innerHTML=values_minus;
}


function to_plus(name,name_minus,name_product_basket) {
    var values_plus=document.getElementById(name).innerText;
    var value_basket_name=document.getElementById(name_product_basket).innerText;
    +value_basket_name++;
    +values_plus++;
    if(values_plus==2){
        document.getElementById(name_minus).disabled=false;
        document.getElementById(name_minus).style.opacity=1;
    }
    document.getElementById(name_product_basket).innerHTML=value_basket_name;
    document.getElementById(name).innerHTML=values_plus;

}

function createNewProduct() {
    var nameNewElem=document.getElementById('name').value;
    var lastElem=document.getElementById('tomatos');
    var newProduct=lastElem.cloneNode(true);
    var parents=document.getElementById('products');

    alert(newProduct.getElementsByTagName('span'));

    parents.appendChild(newProduct);


}
// function  createNewProduct() {
//     var nameNewElem=document.getElementById('name').value;
//
//     var newDiv=document.createElement('div');
//
//       newDiv.id=nameNewElem;
//     newDiv.className='product';
//
//     var parents=document.getElementById('products');
//
//     var inneNewDiv1=document.createElement('div');
//       inneNewDiv1.className="product_div";
//
//
//     var inner_name=document.createElement('div');
//     inner_name.className="name_products";
//
//
//     var inner_span=document.createElement('span');
//     inner_span.class='span_product_name';
//
//        inner_span.setIdAttribute('')='ba';
//     document.getElementById("ba").innerHTML =  nameNewElem;
//     alert(document.getElementById('ba'));
//
//
//
//      inneNewDiv1.appendChild(inner_name);
//     newDiv.appendChild(inneNewDiv1);
//     parents.appendChild(newDiv);
//
//
//
// }
/**
 * Created by Ruslan on 25.01.2017.
 */
