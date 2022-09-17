btn = document.querySelector('#btn');
list = document.querySelector('.ul-list');
input = document.querySelector('#input');

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addItem();
    }
});

btn.onclick = function () { addItem() };


function addItem() {
    if (input.value != '') {
        div = document.createElement('div');
        li = document.createElement('li');
        btn = document.createElement('button');

        btn.innerText = 'x';
        li.innerText = input.value;

        li.classList.add('list-item');
        li.setAttribute('onclick', "strike(this)");
        btn.setAttribute('type', 'button');
        btn.setAttribute('class', 'del-btn');
        btn.setAttribute('onclick', 'deleteItem(this)');

        div.append(li);
        div.append(btn);
        list.append(div);

        div.setAttribute('class', 'list-object');

        input.value = '';
    }
}

function strike(item) {
    item.classList.toggle('strike');
}

function deleteItem(btn) {
    btn.parentElement.remove()
}