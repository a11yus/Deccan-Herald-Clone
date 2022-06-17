
const navbar = () => 
{
    return`
    <img src="https://www.deccanherald.com/sites/deccanherald.com/themes/deccanherald/images/logo/white-logo.svg" alt="">
<div id="fields">
    <h3 id="top">Home</h3>
    <h3 id="politics">Politics</h3>
    <h3 id="science">Science</h3>
    <h3 id="sports">Sports</h3>
    <h3 id="business">Business</h3>
    <h3 id="health">Health</h3>
    <h3 id="technology">Technology</h3>
    <h3 id="world">National</h3>

</div>
<div id="searchBox">
<input type="text" id="query" placeholder="What are you looking for ?" />
</div>
    `;
};

const addFunctionality = () => 
{
    document.querySelector("#query").addEventListener("keydown", search);
}


const search = (e) => {
    if (e.code == "Enter") 
    {
        const query = document.querySelector("#query").value;
        localStorage.setItem("newsQuery", JSON.stringify(query));
        window.location.href = "detailNews.html";
    }
}


export { navbar, addFunctionality };