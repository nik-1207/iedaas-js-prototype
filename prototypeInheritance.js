function dept(deptName, deptId) {
    this.deptName = deptName;
    this.deptId = deptId;
}

function Employee(f, l, deptName, deptId) {
    dept.call(this, deptName, deptId);
    this.firstName = f;
    this.lastName = l;
}
Employee.prototype = new dept;
Employee.prototype.constructor = Employee;
var emp1 = new Employee("nikhil", "Mohan", "cse", "007");
console.log(emp1.constructor)