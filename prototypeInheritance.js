function Employee(f, l) {
    this.firstName = f;
    this.lastName = l;
}

function Dept(id) {
    this.id = id;
}
emp = new Employee("Nikhil", "Mohan");
dept = new Dept(1);
dept.prototype = emp
console.log(dept.prototype.firstName)