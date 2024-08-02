function Person(firstname, lastname, dob){
    this.firstname = firstname;
    this.lastname = lastname;
    this.dob =new Date (dob);
    this.getFullName = function(){
        return `${this.firstname} ${this.lastname}}`
}
}
const person1 = new Person ('Mary', 'Wamuyu', '3-3-1970');
console.log(person1.getFullName())
