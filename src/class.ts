class Animal {
    // name: string;
    // species: string;
    // sound: string;

    // parameter property
    constructor(public name: string, public species: string, public sound: string){
        // this.name = name;
        // this.species = species;
        // this.sound = sound
    }
    makeSound() {
        console.log(`This Animal is making sound ${this.sound}`);
        
    }
}
const dog = new Animal("Dogsh", "Dog", "Gaew ghaw")
const cat = new Animal("Bilai", "Cat", "Meaw meaw")

console.log(dog);

dog.makeSound()
