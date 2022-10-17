var modal_store = document.getElementById("StoreWindow");
var openwindowbutton_store = document.getElementById("StoreButton");
var closebutton_store = document.getElementById("CloseStore");

openwindowbutton_store.onclick = function() {
    modal_store.style.display = "flex";
}

closebutton_store.onclick = function() {
    modal_store.style.display = "none";
}

//////////////////////////////////////////////////////////////////////////////


var modal_openworld = document.getElementById("OpenWorldWindow");
var openwindowbutton_openworld = document.getElementById("OpenWorldButton");
var closebutton_openworld = document.getElementById("CloseOpenWorld");

openwindowbutton_openworld.onclick = function() {
    modal_openworld.style.display = "flex";
}

closebutton_openworld.onclick = function() {
    modal_openworld.style.display = "none";
}

//////////////////////////////////////////////////////////////////////////////

var product = document.getElementById("ItemBox")
var uploadproduct = document.getElementById("UploadProduct");

uploadproduct.onclick = function() {
    product.style.display = "blcok";
}

