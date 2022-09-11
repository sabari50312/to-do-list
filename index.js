btn = document.querySelector('#btn');
list = document.querySelector('.ul-list');
input = document.querySelector('#input');

btn.onclick = function () {
    if (input.value != '') {
        div= document.createElement('div');
        li = document.createElement('li');
        btn = document.createElement('button');

        btn.innerText = 'x';
        li.innerText = input.value;

        li.setAttribute('class', 'list-item');
        btn.setAttribute('type', 'button');
        btn.setAttribute('class', 'del-btn');
        btn.setAttribute('onclick','deleteItem(this)');

        div.append(li);
        div.append(btn);
        list.append(div);

        div.setAttribute('class', 'list-object');

        input.value = '';
    }
};


function deleteItem(btn) {
    btn.parentElement.remove()
}