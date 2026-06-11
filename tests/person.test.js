Person = require("../src/person.js");

test("Set First Name correctly", () => {
    var testPerson = new Person();
    testPerson.setFirstName("Victor");
    expect(testPerson.firstName).toBe("Victor");
})

test("Set Last Name correctly", () => {
    var testPerson = new Person();
    testPerson.setLastName("Persson");
    expect(testPerson.lastName).toBe("Persson");
})

test("Set Mobile Number correctly", () => {
    var testPerson = new Person();
    testPerson.setMobileNumber("0763056692");
    expect(testPerson.mobileNumber).toBe("0763056692");
})

test("Set Landline Number correctly", () => {
    var testPerson = new Person();
    testPerson.setLandlineNumber("86400");
    expect(testPerson.landlineNumber).toBe("86400");
})

test("Set Street correctly", () => {
    var testPerson = new Person();
    testPerson.setStreet("Polhemsgatan 21C");
    expect(testPerson.street).toBe("Polhemsgatan 21C");
})

test("Set City correctly", () => {
    var testPerson = new Person();
    testPerson.setCity("Karlskrona");
    expect(testPerson.city).toBe("Karlskrona");
})

test("Set Zip correctly", () => {
    var testPerson = new Person();
    testPerson.setZip("37156");
    expect(testPerson.zip).toBe("37156");
})
