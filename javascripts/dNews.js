
import { navbar, addFunctionality } from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();
addFunctionality();

import { footer1, footer2, footer3 } from "../components/footer.js"
document.getElementById("f1-main").innerHTML = footer1();
document.getElementById("f2-main").innerHTML = footer2();
document.getElementById("con").innerHTML = footer3();

const searchNews = async (queries) => 
{
    try 
    {
        let res = await fetch(
            `https://newsapi.org/v2/top-headlines?q=${queries}&apiKey=62fdb7cc54bf49f196788c0ae4f6418d`);

        let data = await res.json();
        console.log(data.articles);
        showNews(data.articles)
    }

    catch(err)
    {
        console.log("err:", err);
    }
}

let showNews = (data) => 
{
    const container = document.querySelector("#detail_news");
    container.innerHTML = null;

    data.forEach(({ title, description, urlToImage, url }) => 
    {
        let div = document.createElement('div');
        div.setAttribute('class', "box");

        let link = document.createElement("a");
        link.setAttribute("target","detailNews.html");
        link.href = url;
        link.innerText = "Read more";

        let img = document.createElement('img');
        img.src = urlToImage;
        img.style.width = "200px";
        img.style.height = "200px";

        let p = document.createElement('p');
        p.innerText = description;

        let h3 = document.createElement('h3');
        h3.innerText = title;

        let div1 = document.createElement('div');
        div1.append(h3, p, link);
        div1.setAttribute('class', "inside");

        div.append(img, div1);
        container.append(div);
    })
}

const query = JSON.parse(localStorage.getItem("newsQuery")) || [];

searchNews(query);




