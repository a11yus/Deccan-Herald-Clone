
import { navbar, addFunctionality } from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();
addFunctionality();

import { footer1, footer2, footer3 } from "../components/footer.js"
document.getElementById("f1-main").innerHTML = footer1();
document.getElementById("f2-main").innerHTML = footer2();
document.getElementById("con").innerHTML = footer3();


const catHeadline = async (type) => 
{
  
    try 
    {
        let res = await fetch(
            `https://newsapi.org/v2/top-headlines?country=in&category=${type}&apiKey=2cded7489353421890f0011cd5abdf1d`);

        let data = await res.json();
        console.log(data.articles);
        catNews(data.articles)
        return type;
    }

    catch(err)
    {
        console.log("err:", err);
    }
}

let catNews = (data) => 
{
    const container = document.querySelector("#category");
    container.innerHTML = null;

    data.forEach(({ title, description, urlToImage, url, publishedAt }) => 
    {

        let div = document.createElement('div');
        div.setAttribute('class', "image");

        let img = document.createElement('img');
        img.src = urlToImage;

        let p = document.createElement('p');
        p.innerText = description;

        let h3 = document.createElement('h3');
        h3.innerText = title;

        let date = document.createElement('p');
        date = date.innerText = publishedAt;

        let link = document.createElement("a");
        link.setAttribute("target","detailNews.html");
        link.href = url;
        link.innerText = "Read more";

        div.append(img, date, h3, p, link);
        container.append(div);
    })
}

const querie = JSON.parse(localStorage.getItem("catQuery")) || [];
catHeadline(querie);

console.log(querie);




