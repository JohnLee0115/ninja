class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 90;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(this.name)
    }

    showStats() {
        console.log(`
        Name : ${this.name},
        Health : ${this.health}, 
        Speed : ${this.speed}, 
        Strength : ${this.strength}`)
    }

    drinkSake() {
        this.health += 10;
    }
}

const ninja1 = new Ninja("Naruto");
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();