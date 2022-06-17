
const sidebar = () => 
{
    return`
    <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#" class="feat-btn">Business
                <span class="fas fa-plus first"></span>
            </a>
            <ul class="feat-show">
                <li><a href="#">Business News</a></li>
                <li><a href="#">Family finance</a></li>
                <li><a href="#">Technology</a></li>
                <li><a href="#">DH Wheels</a></li>
            </ul>
            </li>
            <li><a href="#" class="serv-btn">Sports
                <span class="fas fa-plus second"></span>
            </a>
                <ul class="serv-show">
                    <li><a href="#">Cricket</a></li>
                    <li><a href="#">Football</a></li>
                    <li><a href="#">Tennis</a></li>
                    <li><a href="#">Other Sports</a></li>
                </ul>
             </li>
             <li><a href="#">Entertainment</a></li>
             <li><a href="#">Technology</a></li>
             <li><a href="#">Science</a></li>
             <li><a href="#">Health</a></li>
        </ul>
    `;
}

export { sidebar };