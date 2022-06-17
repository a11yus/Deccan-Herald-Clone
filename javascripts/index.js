
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
            `https://newsdata.io/api/1/news?apikey=pub_84196d1cc6cc34ab31ded860a14a13762f53&language=en&country=in&q=${queries}`);

        let data = await res.json();

        console.log(data.results);
        append(data.results);
         
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

    data.forEach(({  title, description, image_url, link, pubDate }) => 
    {
        let div = document.createElement('div');
        div.setAttribute('class', "box");

        let date = document.createElement('p');
        date.innerText = pubDate;

        let site = document.createElement("a");
        site.setAttribute("target","detailNews.html");
        site.href = link;
        site.innerText = "Read more";

        let img = document.createElement('img');
        img.src = image_url;
        img.style.width = "200px";
        img.style.height = "200px";

        let p = document.createElement('p');
        p.innerText = description;

        let h3 = document.createElement('h3');
        h3.innerText = title;

        let div1 = document.createElement('div');
        div1.append(h3, p, site, date);
        div1.setAttribute('class', "inside");

        div.append(img, div1);
        container.append(div);
    })
}
currentNews("modi");
currentNews("sports");
currentNews("food");


//fields news like business and all

const fieldHeadline = async (field) => 
{
  
    try 
    {
        let res = await fetch(
            `https://newsdata.io/api/1/news?apikey=pub_84196d1cc6cc34ab31ded860a14a13762f53&country=in&category=${field}`);

        let data = await res.json();
        console.log(data.results);
        fieldNews(data.results)
        // return type;
    }

    catch(err)
    {
        console.log("err:", err);
    }
}

let fieldNews = (data) => 
{
    const container = document.querySelector("#results");
    // container.innerHTML = null;

    data.forEach(({ title, description, image_url, link, pubDate }) => 
    {

        let div = document.createElement('div');
        div.setAttribute('class', "frame");

        let img = document.createElement('img');
        img.src = image_url;
        img.style.width = "200px";
        img.style.height = "200px";

        let p = document.createElement('p');
        p.innerText = description;

        let h3 = document.createElement('h3');
        h3.innerText = title;

        let date = document.createElement('p');
        date.innerText = pubDate;

        let site = document.createElement("a");
        site.setAttribute("target","detailNews.html");
        site.href = link;
        site.innerText = "Read more";

        div.append(img, date, h3, p, site);
        container.append(div);
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

fieldHeadline("sports");
fieldHeadline("politics");


