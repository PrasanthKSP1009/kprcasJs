 document.querySelector('h1').style.backgroundColor = 'green';
 document.querySelector(".query").style.backgroundColor = 'red';
 classList = document.querySelectorAll('.query-all');
 for(i=0;i<classList.length;i++) {
    classList[i].style.backgroundColor = 'blue';
 }

 classList = document.querySelectorAll('h1,h2');
 for(i=0;i<classList.length;i++) {
    classList[i].style.backgroundColor = 'blue';
 }