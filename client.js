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

    //empty the inputs
    $('.inputs').children().val('')

    //update DOM
    displayEmployees();
    calculateMonthly();
}

//a function to display all employees on the DOM
function displayEmployees() {
    //clear the DOM
    $('#tableBody').empty();
    //loop through employees array
    //append each employee to the table
    for (let employee of employees) {
        const tableRow = $(`
            <tr>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.employeeID}</td>
                <td>${employee.jobTitle}</td>
                <td>${Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(employee.annualSalary)}</td>
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
    let totalSalaries = 0;
    for (let employee of employees) {
        totalSalaries += Number(employee.annualSalary);
    }
    //calculate monthly cost from total annual salaries
    let monthlySalaries = (totalSalaries / 12);


    //update the DOM
    //convert to currency for display

    $('#monthlySalaries').empty();
    $('#monthlySalaries').append(Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(monthlySalaries));

    //change to red background if over 20000, remove red background in drops below 20000 after removing employee
    if (monthlySalaries > 20000) {
        $('#monthlySalaries').addClass('overBudget');
    } else {
        $('#monthlySalaries').removeClass('overBudget');
    }
}

//a function to remove an employee from employees and the DOM
//recalculate monthly salary costs
function removeEmployee() {
    //remove employee object from employees array by targeting the index of the row in the tbody, will 
    //correspond to index of the employee object in the array
    employees.splice(($(this).closest('tr').index()), 1);
    //remove employee from the DOM
    $(this).closest('tr').remove();
    //update total monthly salaries on the DOM
    calculateMonthly();
}