
//function sleep(name){
//console.log(name + " sleeps for 8 hours");
//}
//function eat(name,food){
//console.log(name + " eats "+ food);
//food == favoriteFood ? console.log("Yum!!! " +name+ " wants more "+food) : sleep(name);
//}

//class Tiger {
//
//    constructor(name) {
//        this.favoriteFood ='meat';
//        this.name=name ;
//    }
//
//    sleep() {
//        console.log(this.name + " sleeps for 8 hours");
//    }
//    eat(food) {
//        console.log(this.name + " eats "+ food);
//        food === this.favoriteFood ? console.log("Yum!!! " +this.name+ " wants more "+food) : this.sleep(name);
//    }
//}
//class Bear {
//
//
//
//    constructor(name) {
//        this.favoriteFood = 'fish';
//        this.name = name;
//    }
//
//    sleep() {
//        console.log(this.name + " hibernates for 4 months");
//    }
//
//    eat(food) {
//        console.log(this.name + " eats " + food);
//        food === this.favoriteFood ? console.log("Yum!!! " + this.name + " wants more " + food) : this.sleep(name);
//    }
//}
function run() {
    var tigger = new Tiger("Tigger");
    tigger.eat("meat");
    tigger.eat("kibble");
    var pooh = new Bear("Pooh");
    pooh.eat("fish");
    pooh.eat("meat")
    var rarity = new Unicorn('Rarity');
    rarity.eat('Marshmallows');
    rarity.eat('schnacks');
    var gemma = new Giraffe('Gemma');
    gemma.eat('Leaves');
    gemma.eat('schnacks');
    var stinger = new Bee('Stinger');
    stinger.eat('Pollen');
    stinger.sleep();
    stinger.eat('schnacks');
    var zoebot= new Zookeeper('Zoebot');
    zoebot.feedAnimals([tigger,pooh,rarity,gemma,stinger],"now&laters");
    //Animal.getPopulation();
    //tigger.getPopulation();
}
//
var animalPopulation=0;
class Animal {
    // Put your instance variables here

    constructor(name,favoriteFood) {
        this.name=name;
        this.favoriteFood=favoriteFood;
        animalPopulation++;
    }

    sleep() {
        console.log(this.name + " sleeps for 8 hours");
    }

    eat(food) {
        console.log(this.name + " eats "+ food);
        food === this.favoriteFood ? console.log("Yum!!! " +this.name+ " wants more "+food) : this.sleep(name);
    }
    static getPopulation(){
        console.log(animalPopulation);
    }
}


class Tiger extends Animal {

    constructor(name) {
        super(name,'meat');
    }
}


class Bear extends Animal{
    constructor(name) {
        super(name,'meat');
    }
    sleep(){
        console.log(this.name + " hibernates for 4 months");
    }
}

class Unicorn extends Animal{
    constructor(name){
        super(name,'Marshmallows');
    }
    sleep(){
        console.log(this.name+" sleeps in a cloud");
    }
}

class Giraffe extends Animal{
    constructor(name){
        super(name,"Leaves");
    }
    eat(food){

        food === this.favoriteFood ? super.eat("Leaves")+this.sleep() : console.log(this.name + " eats "+ food) + console.log("YUCK!!! "+ this.name+ " will not eat "+ food);

    }
}

class Bee extends Animal{
    constructor(name){
        super(name,"Pollen");
    }
    sleep(){
        console.log(this.name+" never sleeps");
    }
    eat(food){
        //console.log(this.name + " eats "+ food);
        food === this.favoriteFood ? super.eat("Pollen"): console.log(this.name + " eats "+ food) + console.log("YUCK!!! "+ this.name+ " will not eat "+ food);

    }
}

class Zookeeper{
    constructor(name){
        this.name=name;
    }
    feedAnimals(animals,food){
        console.log(this.name +' is feeding '+ food +" to "+ animals.length+ " animals of "+ animalPopulation + " total animals.");
        for(var i=0;i<animals.length;i++){
            animals[i].eat(food);
        }
    }

}