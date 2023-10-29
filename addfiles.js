console.log(document);
var headerTitle=document.getElementById('header-title');
headerTitle.textContent='Hello';
console.log(DocumentType);
console.log(document.links);
headerTitle.innerHTML='<h4>My items</h4>';
var header=document.getElementById('main-header');
header.style.borderBottom='solid 4px #000';
var items=document.getElementsByClassName('title');
console.log(items);
items[0].style.fontWeight='bold';
items[0].style.color="green";
var items=document.getElementsByClassName('list-group-item');
console.log(items);
items[2].style.backgroundColor="green";
items[0].style.fontWeight='bold';
items[1].style.fontWeight='bold';
items[2].style.fontWeight='bold';
items[3].style.fontWeight='bold';

var li=document.getElementsByTagName('li');
console.log(li);
li.add='Hello sir';
for(var i=0;i<li.length;i++)
{
    li[i].style.fontWeight='bold';
}
li[4].style.color='coral';


var items=document.querySelector('.list-group-item');
console.log(items);
var secondItem=document.querySelector('.list-group-item:nth-child(1)');
secondItem.style.backgroundColor='green';
var nextItem=document.querySelector('.list-group-item:nth-child(2)');
nextItem.style.display='none';

var nthItem=document.querySelectorAll('.list-group-item');
console.log(nthItem);
nthItem[2].style.color='green';
var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='green';
}

var itemList=document.querySelector('#items');
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor="#a2f3f4";
console.log(itemList.parentElement.parentElement.parentElement);

console.log(itemList.childNodes);
console.log(itemList.children);
itemList.children[1].style.color="skyblue";

console.log(itemList.firstElementChild);
itemList.firstElementChild.style.color='yellow';
console.log(itemList.firstChild);

console.log(itemList.lastElementChild);
itemList.lastElementChild.style.backgroundColor='blue';
console.log(itemList.lastChild);

console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);

console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);

var newDiv=document.createElement('div');
newDiv.className='hello';
newDiv.id='hello1';
newDiv.setAttribute('title','Hello Div');

var newDivText=document.createTextNode('Hello World');
newDiv.appendChild(newDivText);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
console.log(newDiv);
newDiv.style.fontSize='40px';
container.insertBefore(newDiv,h1);

var newDiv2=document.createElement('div');
newDiv2.className='hello';
newDiv2.id='hello1';
newDiv2.setAttribute('title','Hello Div');

var newDiv2Text=document.createTextNode('Hello sir');
newDiv2.appendChild(newDiv2Text);

var title=document.querySelector('.list-group-items');
var li=document.querySelector(' header h2 ');
container.insertBefore(newDiv2,li);
console.log(newDiv2);
