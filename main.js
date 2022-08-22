let btnSearch = document.querySelector('#btnSearch');
let ispis = document.querySelector('#ispisDiv');
btnSearch.addEventListener('click',meals)


async function meals() {
    let src = document.querySelector('#inputSrc').value;
    if(src){

        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${src}`);
        const respData = await response.json();
        
        ispisData(respData);

        return respData;
    }else{
        alert('You have not entered any terms');
    }
};


function ispisData(data) {

    let jela = data.meals;
    
    if(jela){

        ispis.innerHTML = '';
    
        data.meals.forEach(elem => {
            let jednoJelo = `<div class="jedanObrokDiv">
            <img src="${elem.strMealThumb}" alt="${elem.strMeal}" class="jednoJelo" data-id="${elem.idMeal}">
            <p class="naziv"></p>
            </div>`
            ispis.innerHTML += jednoJelo;
        });
        
        if(jela.length==1){

            let jednoJeloX = document.querySelector('.jednoJelo');
            jednoJeloX.addEventListener('mouseover', efekatMouseover)

        }else{
            let jednoJeloX = document.querySelectorAll('.jednoJelo');
            jednoJeloX.forEach(elem=>{
                elem.addEventListener('mouseover', efekatMouseover)
            })
            
            
        }
        
    }else{
        alert(`No results requested`);
    }


    
}


async function efekatMouseover(){
    let div = this.parentElement.childNodes[3];
    let naziv = this.alt;
    div.style.display = 'flex';
    div.textContent = naziv;
    
    div.addEventListener('mouseleave', ()=>{
        let div = this.parentElement.childNodes[3];
        div.style.display = 'none';
        div.textContent = '';
    })
    
    div.addEventListener('click', async ()=>{
        let dohvatiData = await meals();
        let meal = dohvatiData.meals
        let id = this.dataset.id;
        let oneMeal = meal.filter(elem => elem.idMeal == id);
        oneMeal = oneMeal[0];
        

        let ispis = `
        <div class="modal">
        <i class="fa-solid fa-xmark ikonica"></i>
        <h2 class="nazivModal">${oneMeal.strMeal}</h2>
        <img src="${oneMeal.strMealThumb}" alt="${oneMeal.strMeal}" class="modalSlika">
        <p class="opisModal">${oneMeal.strInstructions}</p>
        <div class="ingredients">
            <h3>Ingredients</h3>
                <div class="sastojci">
                <p class="sastojak">${oneMeal.strIngredient1?oneMeal.strIngredient1:''} ${oneMeal.strIngredient1? '-' :''} ${oneMeal.strMeasure1?oneMeal.strMeasure1:''}</p>
                <p class="sastojak">${oneMeal.strIngredient2?oneMeal.strIngredient2:''} ${oneMeal.strIngredient2? '-' :''} ${oneMeal.strMeasure2?oneMeal.strMeasure2:''}</p>
                <p class="sastojak">${oneMeal.strIngredient3?oneMeal.strIngredient3:''} ${oneMeal.strIngredient3? '-' :''} ${oneMeal.strMeasure3?oneMeal.strMeasure3:''}</p>
                <p class="sastojak">${oneMeal.strIngredient4?oneMeal.strIngredient4:''} ${oneMeal.strIngredient4? '-' :''} ${oneMeal.strMeasure4?oneMeal.strMeasure4:''}</p>
                <p class="sastojak">${oneMeal.strIngredient5?oneMeal.strIngredient5:''} ${oneMeal.strIngredient5? '-' :''} ${oneMeal.strMeasure5?oneMeal.strMeasure5:''}</p>
                <p class="sastojak">${oneMeal.strIngredient6?oneMeal.strIngredient6:''} ${oneMeal.strIngredient6? '-' :''} ${oneMeal.strMeasure6?oneMeal.strMeasure6:''}</p>
                <p class="sastojak">${oneMeal.strIngredient7?oneMeal.strIngredient7:''} ${oneMeal.strIngredient7? '-' :''} ${oneMeal.strMeasure7?oneMeal.strMeasure7:''}</p>
                <p class="sastojak">${oneMeal.strIngredient8?oneMeal.strIngredient8:''} ${oneMeal.strIngredient8? '-' :''} ${oneMeal.strMeasure8?oneMeal.strMeasure8:''}</p>
                <p class="sastojak">${oneMeal.strIngredient9?oneMeal.strIngredient9:''} ${oneMeal.strIngredient9? '-' :''} ${oneMeal.strMeasure9?oneMeal.strMeasure9:''}</p>
                <p class="sastojak">${oneMeal.strIngredient10?oneMeal.strIngredient10:''} ${oneMeal.strIngredient10? '-' :''} ${oneMeal.strMeasure10?oneMeal.strMeasure10:''}</p>
                <p class="sastojak">${oneMeal.strIngredient11?oneMeal.strIngredient11:''} ${oneMeal.strIngredient11? '-' :''} ${oneMeal.strMeasure11?oneMeal.strMeasure11:''}</p>
                <p class="sastojak">${oneMeal.strIngredient12?oneMeal.strIngredient12:''} ${oneMeal.strIngredient12? '-' :''} ${oneMeal.strMeasure12?oneMeal.strMeasure12:''}</p>
                <p class="sastojak">${oneMeal.strIngredient13?oneMeal.strIngredient13:''} ${oneMeal.strIngredient13? '-' :''} ${oneMeal.strMeasure13?oneMeal.strMeasure13:''}</p>
                <p class="sastojak">${oneMeal.strIngredient14?oneMeal.strIngredient14:''} ${oneMeal.strIngredient14? '-' :''} ${oneMeal.strMeasure14?oneMeal.strMeasure14:''}</p>
                <p class="sastojak">${oneMeal.strIngredient15?oneMeal.strIngredient15:''} ${oneMeal.strIngredient15? '-' :''} ${oneMeal.strMeasure15?oneMeal.strMeasure15:''}</p>
                <p class="sastojak">${oneMeal.strIngredient16?oneMeal.strIngredient16:''} ${oneMeal.strIngredient16? '-' :''} ${oneMeal.strMeasure16?oneMeal.strMeasure16:''}</p>
                <p class="sastojak">${oneMeal.strIngredient17?oneMeal.strIngredient17:''} ${oneMeal.strIngredient17? '-' :''} ${oneMeal.strMeasure17?oneMeal.strMeasure17:''}</p>
                <p class="sastojak">${oneMeal.strIngredient18?oneMeal.strIngredient18:''} ${oneMeal.strIngredient18? '-' :''} ${oneMeal.strMeasure28?oneMeal.strMeasure18:''}</p>
                <p class="sastojak">${oneMeal.strIngredient19?oneMeal.strIngredient19:''} ${oneMeal.strIngredient19? '-' :''} ${oneMeal.strMeasure19?oneMeal.strMeasure19:''}</p>
                <p class="sastojak">${oneMeal.strIngredient20?oneMeal.strIngredient20:''} ${oneMeal.strIngredient20? '-' :''} ${oneMeal.strMeasure20?oneMeal.strMeasure20:''}</p>

                </div>
            </div>
        </div>
        `;
        let modal = document.querySelector('#modalIspis');
        modal.innerHTML = ispis;
        let sastojak = document.querySelectorAll('.sastojak');
        sastojak.forEach(elem =>{
            if(elem.innerText.length ==0){
                elem.style.display = 'none';
            }
        })

        let close = document.querySelector('.ikonica')
        close.addEventListener('click', () =>{
            let modal = document.querySelector('#modalIspis');
            modal.innerHTML = '';
        })
        })

    }
    
    
    

