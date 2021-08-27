function dept(deptName, deptId) {
    this.deptName = deptName;
    this.deptId = deptId;
}

function Employee(f, l, deptName, deptId) {
    this.firstName = f;
    this.lastName = l;
    dept.call(this, deptName, deptId);
}
Employee.prototype = new dept;
var emp1 = new Employee("nikhil", "Mohan", "cse", "007");
console.log(emp1.firstName)