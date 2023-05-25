const button1 = document.querySelector("#searchButton1")

button1.addEventListener('click', async () => {
  
    


    let plyr1Name = document.querySelector("#plyr1Name")
    let plyr1Photo1 = document.querySelector("#plyr1Photo1")
    let plyr1Series1 = document.querySelector('#plyr1Series1')
    let plyr1Release1 = document.querySelector('#plyr1Release1')
    let plyr1Photo2 = document.querySelector('#plyr1Photo2')
    let plyr1Series2 = document.querySelector('#plyr1Series2')
    let plyr1Release2 = document.querySelector('#plyr1Release2')
    

    let input = document.querySelector('#inputBar1')


    let person1 = input.value
        
    let response1 = await axios.get(`https://www.amiiboapi.com/api/amiibo/?name=${person1}`)
        
    if (response1.data.amiibo.length < 2){
        plyr1Name.innerHTML = `${response1.data.amiibo[0].name}`
        plyr1Photo1.innerHTML = `<img alt="An image of ${response1.data.amiibo[0].name}." src="${response1.data.amiibo[0].image}"/>`
        plyr1Series1.innerHTML = `Game Series: ${response1.data.amiibo[0].gameSeries}`
        plyr1Release1.innerHTML= `Amiibo Release Date: ${response1.data.amiibo[0].release.na}`


        plyr1Series2.style.display = 'none'
        plyr1Release2.style.display = 'none'
        plyr1Photo2.style.display = 'none'
    
        }else {
    plyr1Name.innerHTML = `${response1.data.amiibo[0].name}`
    plyr1Photo1.innerHTML = `<img alt="An image of ${response1.data.amiibo[0].name}." src="${response1.data.amiibo[0].image}"/>`
    plyr1Series1.innerHTML = `Game Series: ${response1.data.amiibo[0].gameSeries}`
    plyr1Release1.innerHTML= `Amiibo Release Date: ${response1.data.amiibo[0].release.na}`
    plyr1Photo2.innerHTML = `<img alt="An image of ${response1.data.amiibo[0].name}." src="${response1.data.amiibo[1].image}"/>`
    plyr1Series2.innerHTML = `Game Series: ${response1.data.amiibo[1].gameSeries}`
    plyr1Release2.innerHTML = `Amiibo Release Date: ${response1.data.amiibo[1].release.na}`

    plyr1Series2.style.display = 'block'
    plyr1Release2.style.display = 'inline'
    plyr1Photo2.style.display = 'inline'
}
    
    console.log(response1.data)
})





const button2 = document.querySelector("#searchButton2")

button2.addEventListener('click', async () => {
        
    
    let plyr2Name = document.querySelector("#plyr2Name")
    let plyr2Photo1 = document.querySelector("#plyr2Photo1")
    let plyr2Series1 = document.querySelector('#plyr2Series1')
    let plyr2Release1 = document.querySelector('#plyr2Release1')
    let plyr2Photo2 = document.querySelector('#plyr2Photo2')
    let plyr2Series2 = document.querySelector('#plyr2Series2')
    let plyr2Release2 = document.querySelector('#plyr2Release2')
    
    let input = document.querySelector('#inputBar2')


    let person2 = input.value
        
    
    let response2 = await axios.get(`https://www.amiiboapi.com/api/amiibo/?name=${person2}`)
    
    if (response2.data.amiibo.length < 2){
        plyr2Name.innerHTML = `${response2.data.amiibo[0].name}`
        plyr2Photo1.innerHTML = `<img alt="An image of ${response2.data.amiibo[0].name}." src="${response2.data.amiibo[0].image}"/>`
        plyr2Series1.innerHTML = `Game Series: ${response2.data.amiibo[0].gameSeries}`
        plyr2Release1.innerHTML= `Amiibo Release Date: ${response2.data.amiibo[0].release.na}`
        

        plyr2Series2.style.display = 'none'
        plyr2Release2.style.display = 'none'
        plyr2Photo2.style.display = 'none'

        }else {
            plyr2Name.innerHTML = `${response2.data.amiibo[0].name}`
            plyr2Photo1.innerHTML = `<img alt="An image of ${response2.data.amiibo[0].name}." src="${response2.data.amiibo[0].image}"/>`
            plyr2Series1.innerHTML = `Game Series: ${response2.data.amiibo[0].gameSeries}`
            plyr2Release1.innerHTML= `Amiibo Release Date: ${response2.data.amiibo[0].release.na}`
            plyr2Photo2.innerHTML = `<img alt="An image of ${response2.data.amiibo[0].name}." src="${response2.data.amiibo[1].image}"/>`
            plyr2Series2.innerHTML = `Game Series: ${response2.data.amiibo[1].gameSeries}`
            plyr2Release2.innerHTML = `Amiibo Release Date: ${response2.data.amiibo[1].release.na}`
            
            plyr2Series2.style.display = 'block'
            plyr2Release2.style.display = 'inline'
            plyr2Photo2.style.display = 'inline'
            

    }
        
       
    console.log(response2.data)




})

let fightBtn = document.querySelector('#fightBtn')
let fightText = document.querySelector('#fightText')


fightBtn.addEventListener('click', () => {
     
    if (Math.ceil(Math.random()*2)===1) {
        fightText.textContent = `${document.querySelector('#plyr1Name').innerHTML} Wins!`
    }else {
        fightText.textContent = `${document.querySelector('#plyr2Name').innerHTML} Wins!`
    }
    
})