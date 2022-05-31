/* Abstraction : It is an object oreinted feature which is used to implement
application level security , by making application level data secure & functionality
will be globally accessible . Also known as data hiding

To implement abstraction access specifiers are used :-

-> public : inside , outside & other class
-> protected : inside , other class
-> private : inside
*/
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.setEmployee = function (eno, enm) {
        this.eno = eno;
        this.enm = enm;
    };
    Employee.prototype.showEmployee = function () {
        console.log("Eno : " + this.eno);
        console.log("Enm : " + this.enm);
    };
    return Employee;
}());
var obj = new Employee();
obj.setEmployee(1001, "Jarvis");
obj.showEmployee();
//Error
//obj.eno=0