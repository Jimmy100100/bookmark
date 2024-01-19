var nameInput = document.getElementById('bookmarkName');
var urlInput = document.getElementById('bookmarkURL');
var addBtn = document.getElementById('addBtn');
var tableBody = document.getElementById('tableBody');

var dataList = [];

function addData(){
    var data = {
        name:nameInput.value,
        url:urlInput.value,
    };

    dataList.push(data);
    clearForm();
    console.log(dataList);
    displayData();
};


function clearForm(){
    nameInput.value = "";
    urlInput.value = "";
};


function displayData(){
    var cartona = "";
    for( var i =0 ; i < dataList.length ; i++ ){
            cartona += `<tr>
            <td>${i}</td>
            <td>${dataList[i].name}</td>
            <td>
            <a href="${dataList[i].url}"><button class="btn btn-warning btn-sm">Visit</button></a>
            </td>
            <td>
            <button onclick="deleteItem(${i});" class="btn btn-danger btn-sm">delete</button>
            </td>
        
        </tr>`
    }
    
    document.getElementById("tableBody").innerHTML = cartona
};


function deleteItem(index){

productList.splice(index , 1);
    
displayData();

};





