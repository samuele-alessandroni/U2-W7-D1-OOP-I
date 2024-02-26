class User{
    constructor(_firstName, _lastName, _age, _location){
        this.firstName = _firstName
        this.lastName = _lastName
        this.age = _age
        this.location = _location
    }

    ageCompare(secondUser){
        if (this.age > secondUser.age) {
            console.log(this.firstName, "è più vecchio di", secondUser.firstName);
        } else {if (this.age === secondUser.age) {
            console.log(this.firstName, "e", secondUser.firstName, "hanno la stessa età");
            
        }
            
        }
    }
}

const Mario = new User("Mario", "Rossi", "20", "Rome")
const Luigi = new User("Luigi", "Binchi", "20", "Milan")

//Mario.ageCompare(Luigi)

class Pet{
    constructor(_petName, _ownerName, _species, _breed){
        this.petName = _petName
        this.ownerName = _ownerName
        this.species = _species
        this.breed = _breed
    }

    ownerComapre(secondPet){
        if (this.ownerName === secondPet.ownerName) {
            console.log(this.petName, "e", secondPet.petName, "hanno lo stesso padrone");
        } else {
            console.log(this.petName, "e", secondPet.petName, "non hanno lo stesso padrone");
            
        }
    }
}

const form = document.getElementsByTagName("form")[0]

form.onsubmit = function(e){
    e.preventDefault()
    const petName = document.getElementById("petName")
    const petOwner = document.getElementById("petOwner")
    const species = document.getElementById("species")
    const breed = document.getElementById("breed")

    const animal = new Pet(petName.value, petOwner.value, species.value, breed.value)

    let petNameLi = document.createElement("li")
    let petOwnerLi = document.createElement("li")
    let speciesLi = document.createElement("li")
    let breedLi = document.createElement("li")
    let animalUl = document.getElementsByTagName("ul")[0]

    petNameLi.innerHTML = animal.petName
    petOwnerLi.innerHTML = animal.ownerName
    speciesLi.innerHTML = animal.species
    breedLi.innerHTML = animal.breed


    animalUl.appendChild(petNameLi)
    animalUl.appendChild(petOwnerLi)
    animalUl.appendChild(speciesLi)
    animalUl.appendChild(breedLi)
}