const button1 = document.querySelector("#searchButton1")

button1.addEventListener('click', async () => {
    const apiKey = '78ad7a7a7f7569aaea70c6a492b24c64'
    const button2 = document.querySelector("#searchButton2")
    let plyrName1 = document.querySelector("#plyrName1")
    


    let person1 = inputBar1.value
        
  
    let response1 = await axios.get(`https://v1.basketball.api-sports.io/teamsjson?key=${apiKey}&q=${person1}&aqi=no`)
    
    plyrName1.innerHTML = `Name: ${response1.data.id}`
    
    console.log(response1.data)
    })







//     let response = await axios.get('https://api-nba-v1.p.rapidapi.com/seasons').then((response)=>{
//         console.log(response.data)
//     })

//     const person = async () => {
//         const response = await axios.get(`https://api-nba-v1.p.rapidapi.com/seasons`)
//         console.log(response.data)
        
//     };
// })
//     person()



    
   








    // const options = {
    //     method: 'GET',
    //     url: 'https://api-nba-v1.p.rapidapi.com/seasons',
    //     headers: {
    //       'X-RapidAPI-Key': `${apiKey}`,
    //       'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    //     }
    //   };
      
    //   try {
    //       const response = await axios.request(options);
    //       console.log(response.data);
    //   } catch (error) {
    //       console.error(error);
    //   }
    // })