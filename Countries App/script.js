const countries=document.querySelector(".countries-con");
const search=document.getElementById("search-input");
const select=document.getElementById("select");
const dark=document.querySelector(".dark");
const header=document.getElementById("header")
const allP=document.getElementsByTagName("p");
const allH3=document.getElementsByTagName("h3");

let region;
let q;
fetchCountries();
let nameOf="Mexico";

search.addEventListener('keyup', function (event) {
	q = event.target.value;
    countries.innerHTML=" "; 
	fetchElement(q);
});

select.addEventListener('change', function (event) {
	region = event.target.value;
    if(region==="all")
    {
        fetchCountries()
    }
    countries.innerHTML=" ";
	fetchRegion(region);
});

function fetchRegion(element)
{
    fetch(`https://restcountries.com/v3.1/region/${region}`)
    .then(res => res.json())
    .then(function (data) {
    for (let country of data) {
        create(country);
    }
});
}

function fetchCountries()
{
    fetch(`https://restcountries.com/v3.1/all`)
    .then(res => res.json())
    .then(function (data) {
   
    for (let country of data) {
        create(country);
    }
});
}

function fetchElement(nameOfCountry)
{
    let search=JSON.parse(localStorage.getItem(`${nameOfCountry}`));
    create(search);    
}

function create(parameter)
{
    let element=parameter;
    let elementHTML=`
    <a href="./country-details.html?name=${element.name.common}" id="a-element">
     <div class="country">
      <div class="country-img" style="background-image: url('${element.flags.png}');">

      </div>
      <div class="about-country">
        <h3>${element.name.common}</h3>
         <p  ">Population: <span id="population">${element.population}</span></p>
        <p ">Region: <span id="region">${element.region}</span></p>
         <p ">Capital: <span id="capital">${element.capital}</span></p>
      </div>
     </div>
    </a>
    
    `;

    localStorage.setItem(`${element.name.common}`,JSON.stringify(element));
    
    
   
    countries.insertAdjacentHTML("beforeend",elementHTML);
        
};

dark.addEventListener("click",function()
{
   dark.classList.toggle("active");

   dark.classList.contains("active")?document.documentElement.dataset.theme ="dark":document.documentElement.dataset.theme ="light";

})

