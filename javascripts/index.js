
import { navbar, addFunctionality } from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();
addFunctionality();

import { footer1, footer2, footer3 } from "../components/footer.js"
document.getElementById("f1-main").innerHTML = footer1();
document.getElementById("f2-main").innerHTML = footer2();
document.getElementById("con").innerHTML = footer3();

import { sidebar } from "../components/sidebar.js";
document.getElementsByClassName("sidebar").innerHTML = sidebar();

// news for the home page
const currentNews = async (queries) => 
{
    try 
    {
        let res = await fetch(
            `https://newsapi.org/v2/top-headlines?q=${queries}&apiKey=2cded7489353421890f0011cd5abdf1d`);

        let data = await res.json();
        
        append(data.articles) 
    }

    catch(err)
    {
        console.log("err:", err);
    }
}

let append = (data) => 
{
    const container = document.querySelector("#container");
    // container.innerHTML = null;

    data.forEach(({ title, description, url, urlToImage }) => 
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
currentNews("modi");
currentNews("general");
currentNews("entertainment");
currentNews("sports");
currentNews("science");
currentNews("technology");


//fields news like business and all

const fieldHeadline = async (field) => 
{
    try 
    {
        let res = await fetch(
            `https://newsapi.org/v2/top-headlines?country=in&category=${field}&apiKey=2cded7489353421890f0011cd5abdf1d`);

        let data = await res.json();
        console.log(data.articles);
        fieldNews(data.articles)
    }

    catch(err)
    {
        console.log("err:", err);
    }
}


let fieldNews = (data) => 
{
    const box = document.querySelector("#results");
    // box.innerHTML = null
    
    data.forEach(({ title, description, url, urlToImage }) => 
    {
        let frame = document.createElement('div');
        frame.setAttribute('class', "frame")

        let img = document.createElement('img');
        img.src = urlToImage;
        img.style.width = "200px";
        img.style.height = "200px";

        let p = document.createElement('p');
        p.innerText = description;

        let h3 = document.createElement('h3');
        h3.innerText = title;

        let link = document.createElement("a");
        link.setAttribute("target","detailNews.html");
        link.href = url;
        link.innerText = "Read more";

        frame.append(img, h3, p, link);
        box.append(frame);
    })
}

const fields = document.querySelector("#fields").children;

for ( let field of fields )
{
    field.addEventListener("click", () => {
        fieldHeadline(field.id);
        console.log(field.id);
        localStorage.setItem("catQuery", JSON.stringify(field.id));
        window.location.href = "catNews.html";
    })
}

fieldHeadline("general");
fieldHeadline("business");

