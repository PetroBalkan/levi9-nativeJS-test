window.onload = (ev) => {
    let news = [];
    const newsList = document.getElementById('news-list');
    getNews()
        .then(res => {
            news = news.concat(res);

            if (!news.length) {

                return newsList.innerHTML = `<h1 class="empty-list">Geen nieuws</h1>`;
            }

            news.forEach((item, index) => {
                newsList.innerHTML += `
                    <img class="image-preview" src="assets/images/${item.img}">
                    <div class="news">
                        <div class="date ${index !== news.length - 1 ? 'not-last' : ''}">${item.date}</div>
                        <div class="right-side">
                            <h1 class="title">${item.title}</h1>
                            <div class="description">${item.description}</div>
                        </div>
                    </div>
                `;
            });
        })
        .catch(error => {
            return newsList.innerHTML = `
                <h1 class="empty-list">
                    Er is een fout opgetreden :( Vernieuw deze pagina of probeer het later opnieuw!
                </h1>`;
        });
};

function getNews() {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = () => {
            if (xhr.status !== 200) {

                return reject();
            }
            resolve(JSON.parse(xhr.responseText));
        };
        xhr.open('get', 'assets/data/db.json', true);
        xhr.send();
    })
}