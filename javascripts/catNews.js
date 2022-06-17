
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
            `https://newsdata.io/api/1/news?apikey=pub_84196d1cc6cc34ab31ded860a14a13762f53&language=en&country=in&category=${type}`);

        let data = await res.json();
        console.log(data.results);
        catNews(data.results)
        // return type;
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

    data.forEach(({ title, description, image_url, link, pubDate }) => 
    {

        let div = document.createElement('div');
        div.setAttribute('class', "image");

        let img = document.createElement('img');
        img.src = image_url;

        let date = document.createElement('p');
        date.innerText = pubDate;

        let p = document.createElement('p');
        p.innerText = description;

        let h3 = document.createElement('h3');
        h3.innerText = title;

        let site = document.createElement("a");
        site.setAttribute("target","detailNews.html");
        site.href = link;
        site.innerText = "Read more";

        div.append(img, date, h3, p, site);
        container.append(div);
    })
}

const querie = JSON.parse(localStorage.getItem("catQuery")) || [];
catHeadline(querie);

console.log(querie);




