function Employee(f, l) {
    this.firstName = f;
    this.lastName = l;
	this.dept=function (id)
	{
		this.deptId=id
	}
}
// dept is associated with  Employee as well as every employee object
var emp1=new Employee("Nikhil" ,"Mohan")
emp1.dept(12);
console.log(emp1.deptId);
Employee.prototype.Salary=function(salary)
{
	console.log(salary);
}
console.log(emp1)
console.log(Employee)
