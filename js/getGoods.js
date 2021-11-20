const getGoods = () => {
    
    const links = document.querySelectorAll('.navigation-link');
    
    const getData = () => {
    fetch('/db/db.json')
    .then((res) => res.json()) //return promise
    .then ((data) => {
    console.log(data);
    localStorage.getItem('goods',JSON.stringify(data));
    })
   };

   links.forEach((link) => {
    link.addEventListener('click',(event) => {
        event.preventDefault();
        getData();
    })
    });

    localStorage.getItem('goods',JSON.stringify([1,2,3,4,5]));

    console.log(JSON.parse(localStorage.getItem('goods')));

    localStorage.removeItem('goods');
}

getGoods();