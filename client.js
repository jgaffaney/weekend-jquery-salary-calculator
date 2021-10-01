console.log('JS');

$(readyNow);
//initialize global variables
let employees = [];
let totalSalary = 0;


function readyNow() {

    //click listeners
    $('#submit').on('click', addEmployee)

    //dynamic click listener
    $('#employeeDataTable').on('click', '.removeEmployee', removeEmployee)

}

//a function to add an employee to the employees array 
function addEmployee() {
    //get inputs from the employee
    //create an employee object
    const employee = {
        firstName: $('#employeeFirstName').val(),
        lastName: $('#employeeLastName').val(),
        employeeID: $('#employeeID').val(),
        jobTitle: $('#employeeJobTitle').val(),
        annualSalary: $('#employeeSalary').val()
    }
    //push the employee object to the employees array
    employees.push(employee);
    console.log(employees);
    

    //empty the inputs
    $('#employeeFirstName').val('');
    $('#employeeLastName').val('');
    $('#employeeID').val('');
    $('#employeeJobTitle').val('');
    $('#employeeSalary').val('');

    //update DOM
    displayEmployees();
}

//a function to display all employees on the DOM
function displayEmployees() {
    //clear the DOM
    $('#tableBody').empty();
    //loop through employees array
    //append each employee to the table
    for(let employee of employees) {
        const tableRow = $(`
            <tr>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.employeeID}</td>
                <td>${employee.jobTitle}</td>
                <td>${employee.annualSalary}</td>
                <td><button class="removeEmployee">Remove</button>
            </tr>
        `)
        $('#tableBody').append(tableRow);

    }

}

//a function to loop through the employees and calculate total of monthly salaries
//updates total salary costs and appends to the DOM

function calculateMonthly() {
    //loop through employees
    //add annualSalary to totalSalary
}

//a function to remove an employee from employees and the DOM
//recalculate monthly salary costs
function removeEmployee() {
    $(this).closest('tr').remove();
    calculateMonthly();
}