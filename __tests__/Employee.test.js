const Employee = require('../lib/Employee.js');

test('creates a name object', () => {
    const employee = new Employee('name');

    expect(employee.name).toBe('name');
})