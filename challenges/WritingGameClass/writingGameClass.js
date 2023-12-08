// Challenge: Writing object-oriented game classes

class Hero {

    // properties
    constructor(name, age, type){
        this.name = name
        this.age  = age
        this.type = type // gerreiro, mago, monge, ninja
    }

    // methods get and set
    getName(name){
        name = this.name
        return name
    }
    getAge(age){
        age = this.age
        return age
    }
    getType(type){
        type = this.type
        return type
    }
    setName(name){
        this.name = name
    }
    setAge(age){
        this.age = age
    }
    setType(type){
        this.type = type
    }

    // specific methods
    attack(){
        let attackDescription
        if(this.type === "Mago")
            attackDescription = "magia"
        else if(this.type === "Guerreiro")
            attackDescription = "espada"
        else if(this.type === "Monge")
            attackDescription = "artes marciais"
        else if(this.type === "Ninja")
            attackDescription = "shuriken"
        else
            attackDescription = ("Tipo" + this.type + ": Not Identified")

        console.log(`O tipo ${this.type} atacou usando ${attackDescription}`)
    }
}

// Object instance
const hero = new Hero("João",25,"Mago")
hero.attack();
