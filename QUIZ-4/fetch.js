const URL = "https://swapi.tech/api/people"

async function getUser(){
    try{
        const response = await fetch(URL);

        if(!response.ok){
            throw new Error("Cards can't be loaded");
        }

       const data = await response.json();
       return data
       

    }catch(error){
        console.log(error)
    }
    
    
}
export {getUser}