let http = new XMLHttpRequest();
http.open('get', '/assets/data.json', true);
http.send();
http.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
        let items = JSON.parse(this.responseText);
        let projects_output = "";
        let news_output = "";
        let talks_output = "";
        console.log(items.projects);
        for (let item of items.projects) {
            projects_output += `
                <div>${item.description}</div>
            `;
        }
        for (let item of items.news) {
            news_output += `
            <div class="d-flex justify-content-start news-items">
                <div class="id" style="padding-top: 20px;">${item.id}</div>
                <div>
                    <span class="date">${item.date}</span>
                    <div class="description">${item.description}</div>
                </div>
            </div>
            `;
        }
        for (let item of items.talks) {
            talks_output += `
            <div class="d-flex justify-content-start news-items">
                <div class="id" style="padding-top: 20px;">${item.id}</div>
                <div>
                    <span class="date">${item.date}</span>
                    <div class="description">${item.description}</div>
                </div>
            </div>
            `;
        }
        for (let item of items.projects) {
            projects_output += `
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <i class="bi bi-folder2 my-3"></i>
                        <h5 class="card-title">${item.title} --</h5>
                        <p class="card-text">${item.description}</p>
                    </div>
                    <div class="card-footer bg-transparent">
                        <div class="d-flex justify-content-between">
                            <div class="date">${item.date}</div>
                            <a href="${item.url}"><i class="bi bi-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            `;
            console.log("hey");
        }
        document.querySelector(".talks").innerHTML = talks_output;
        document.querySelector(".news").innerHTML = news_output;
        document.querySelector(".projects").innerHTML = projects_output;
    }
}
