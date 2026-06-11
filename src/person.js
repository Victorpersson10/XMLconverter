
class Person {
    // Name
    firstName = "";
    lastName = "";

    // Fullname - family members only
    name = "";

    // year of birth - family members only
    born = "";

    // phoneNumbers
    mobileNumber = "";
    landlineNumber = "";

    // Adress
    street = "";
    city = "";
    zip = "";

    family = [];


    addFamilyMember(familyMember)
    {
        this.family.push(familyMember);
    }

    setName(name) {
        this.name = name;
    }

    setFirstName(firstName) {
        this.firstName = firstName;
    }

    setLastName(lastName) {
        this.lastName = lastName;
    }   

    setBorn(year) {
        this.born = year;
    }

    setMobileNumber(mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    setLandlineNumber(landlineNumber) {
        this.landlineNumber = landlineNumber;
    }

    setStreet(street) {
        this.street = street;
    }

    setCity(city) {
        this.city = city;
    }

    setZip(zip) {
        this.zip = zip;
    }

}

module.exports = Person;