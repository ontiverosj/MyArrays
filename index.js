import Senators from './data/senators'


export const republicans = () => {
  return Senators.filter((senator) => {
  return senator.party === "Republican"
  })
}

export const democrats = () => {
  return Senators.filter((senator) => {
    return senator.party === "Democrat"
    })
}

export const independents = () => {
  return Senators.filter((senator) => {
    return senator.party === "Independent"
    })
}

export const males = () => {
  return Senators.filter((senator) => {
    return senator.person.gender === "male"
    })
}

export const females = () => {
  return Senators.filter((senator) => {
    return senator.person.gender === "female"
    })
  }
  export const byState = (state = 'UT') => {
    return Senators.filter((senator) => {
     return senator.state === state
    })
     }

export const mapping = () => {
return Senators.map((senator) => {
return{
  firstName: senator.person.firstName,
  lastName: senator.person.lastName,
  gender:  senator.person.gender,
  party: senator.party,
}
})
}
  
    


export const reducedCount = () => {
   return Senators.reduce((previous,current, index) => {
 if(index === 1) {
   const parties = {
     democrat: 0,
     republican: 0,
     independent: 0
   }
   parties[previous.party.toLowerCase()]++
   parties[current.party.toLowerCase()]++
   
   return parties
 }
 previous[current.party.toLowerCase()]++
return previous
  })
}
console.log(reducedCount())