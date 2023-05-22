const button1 = document.querySelector("#searchButton1")

button1.addEventListener('click', async () => {
    // const apiKey = '78ad7a7a7f7569aaea70c6a492b24c64'

    let plyrName1 = document.querySelector("#plyrName1")
    
    let input = document.querySelector('#inputBar1')


    let person1 = input.value
        
  
    let response1 = await axios.get(`https://www.balldontlie.io/api/v1/players/${person1}`)
    
    plyrName1.innerHTML = `Name: ${response1.data.first_name}`
    
    console.log(response1.data)
    })





    const button2 = document.querySelector("#searchButton2")

    button2.addEventListener('click', async () => {
        // const apiKey = '78ad7a7a7f7569aaea70c6a492b24c64'
    
        let plyrName2 = document.querySelector("#plyrName2")
        
        let input = document.querySelector('#inputBar2')
    
    
        let person2 = input.value
            
      
        let response2 = await axios.get(`https://www.balldontlie.io/api/v1/players/${person2}`)
        
        plyrName2.innerHTML = `Name: ${response2.data.first_name}`
        
        console.log(response2.data)
        })