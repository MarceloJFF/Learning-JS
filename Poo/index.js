class Person{
    _firstName
    _lastName
    _age
    constructor(firstName, lastname, age) {
        this._firstName=firstName
        this._lastName = lastname
        this._age = age        
    }
    get fullName(){
        return this.firstName +" "+this.lastName
    }
    get firstName(){
        return this._firstName
    }
    set lastName(name){
        this._lastName = name
    }
    get lastName(){
        return this._lastName
    }
    set age(age){
        this._age = age
    }
    get age(){
        return this._age;
    }
}
class Student extends Person{
    _matricula
    _periodo

    constructor(firstName, lastName, age, matricula, periodo){
        super(firstName,lastName, age)
        this._matricula=matricula
        this._periodo = periodo
    }
}

//let pessoa = new Person("Marcelo",24)
let estudante = new Student("Marcelo","Jhones",24, "1828282", 8)
console.log(estudante.age) // quando colocamos dessa maneira ele acessa o método get
console.log(estudante.fullName)