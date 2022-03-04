//получили данные

let xhr = new XMLHttpRequest();
xhr.open('GET', 'db.json');
xhr.responseType = 'json';
xhr.send();

xhr.onload = function() {
  if (xhr.status != 200) { 
    alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); 
  } else { 
    //отправляем данные
    let xhr1 = new XMLHttpRequest();
    let json  = JSON.stringify(xhr.response)
    xhr1.open("POST", 'https://jsonplaceholder.typicode.com/posts')
    xhr1.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr1.send(json);
}};

