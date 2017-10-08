var buttonAdd = document.getElementById('addElem');
var list = document.getElementById('list');

buttonAdd.addEventListener('click', function(e) {
    var newItem = document.createElement('li');
    newItem.innerHTML = 'item ' + list.getElementsByTagName('li').length;
    list.appendChild(newItem);
    
});