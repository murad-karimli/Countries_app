const aboutPage=document.querySelector(".about-country");
const url=new URL(location.href);
let nameofCountry=url.searchParams.get("name");
let aboutCountry=JSON.parse(localStorage.getItem(`${nameofCountry}`));
const dark=document.querySelector(".dark");
 
dark.addEventListener("click",function()
{
   dark.classList.toggle("active");
   dark.classList.contains("active")?document.documentElement.dataset.theme ="dark":document.documentElement.dataset.theme ="light";
})
createAboutPage(aboutCountry);
function createAboutPage(element)
{
    let aboutHTML=`
    <div class="country-flag"  style="background-image: url('${element.flags.png}');">
            
        </div>
        <div class="about">
            <h1 id="name">${element.name.common}</h1>
            <div class="details">
                <div class="list">
                    <h4>Native Name: <span id="native-name">${element.name.official}</span></h4>
                    <h4>Population: <span id="population">${element.population}</span></h4>
                    <h4>Region: <span id="region">${element.region}</span></h4>
                    <h4>Sub-Region: <span id="subregion">${element.subregion}</span></h4>
                    <h4>Capital: <span id="capital">${element.capital}</span></h4>
                    <h4>Border: <span id="border">${element.borders===undefined?"none":Object.values(element.borders)}</span></h4>
                    
                </div>
                <div class="list">
                    <h4>Top Level Domain:</h4>
                    <h4>Currencies: <span id="currencies">${Object.values(aboutCountry.currencies)[0].name}</span></h4>
                    <h4>Languages: <span id="languages">${Object.values(element.languages)}</span></h4>
                </div>
            </div>
        </div>
    `

 aboutPage.insertAdjacentHTML("afterbegin",aboutHTML);
}
createAboutPage(localStorage.getItem(`${nameofCountry}`));


