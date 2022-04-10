// console.log(document.head); // получаем head
// console.log(document.documentElement); // получаем весть html документ
// console.log(document.body.childNodes); // получаем дочерний узел
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

// console.log(document.querySelector('current').parentNode.parentNode);
// console.log(document.querySelector('current').parentElement); // получение элемента
// console.log(document.querySelector('[data-current="3"]').nextSibling); // получение элемента через дата атрибут


for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}