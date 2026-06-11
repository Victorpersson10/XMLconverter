const fs = require('fs');
const path = require('path');
const readline = require('readline');
const writer = require('./writer.js');
const Person = require('./person.js');


var isFamily = false;

var persons = [];

var tempFamilyMember = new Person();
var tempPerson = new Person();


    readFile = async (filename) => {
    
        try {
            const filePath = path.join(__dirname + '/../input', filename);
            const filestream =  fs.createReadStream(filePath, 'utf-8');
            const rl = readline.createInterface({
                input: filestream
            });



            // for each line in the file, we check if it starts with P, T, A or F
            for await (const line of rl) {

                if (line.startsWith("P")) {
                    
                    // if this isn't the first person in the file, we add the previous person to the array of persons
                    if (tempPerson.firstName !== "" ) {

                        // if the previous person had family-member data
                        if (tempFamilyMember.name !== "") {
                            tempPerson.addFamilyMember(tempFamilyMember);

                            // reset the familymember
                            tempFamilyMember = new Person();
                        }
                        persons.push(tempPerson);

                        // reset the temporary person. 
                        tempPerson = new Person();
                    }



                    isFamily = false;
                    tempFamilyMember = new Person();
                    tempPerson.setFirstName(line.split("|")[1]);
                    tempPerson.setLastName(line.split("|")[2]);
                }

                if (line.startsWith("T")) {
                    if (!isFamily) {
                        tempPerson.setMobileNumber(line.split("|")[1].toString());
                   
                    // check if landline number is present in the line
                    if (line.split("|").length > 2) {
                    tempPerson.setLandlineNumber(line.split("|")[2].toString());
                    }
                    
                    } else {
                        tempFamilyMember.setMobileNumber(line.split("|")[1].toString());

                        // check if landline number is present in the line
                        if (line.split("|").length > 2) {                        
                        tempFamilyMember.setLandlineNumber(line.split("|")[2].toString());
                        }
                        
                    }
                }
                if (line.startsWith("A")) {
                    if (!isFamily) {

                        tempPerson.setStreet(line.split("|")[1].toString());

                        // check if city is present in the line
                        if (line.split("|").length > 2) {
                            tempPerson.setCity(line.split("|")[2].toString());
                        }
                        
                        
                        // check if zip code is present in the line
                        if (line.split("|").length > 3) {
                        tempPerson.setZip(line.split("|")[3].toString());
                        }

                    } else {
                        tempFamilyMember.setStreet(line.split("|")[1].toString());

                        // check if city is present in the line
                        if (line.split("|").length > 2) {
                            tempFamilyMember.setCity(line.split("|")[2].toString());
                        }
                        
                        
                        // check if zip code is present in the line
                        if (line.split("|").length > 3) {
                        tempFamilyMember.setZip(line.split("|")[3].toString());
                        }
                    }
                }
                if (line.startsWith("F")) {
                    
                    // if this isn't the first family member
                    if (tempFamilyMember.name !== "") {

                        // add the family member to the person
                        tempPerson.addFamilyMember(tempFamilyMember);

                        // reset all variables for the next family member
                        tempFamilyMember = new Person();
                    }

                    isFamily = true;
                    tempFamilyMember.setName(line.split("|")[1].toString());

                    // If year of birth is present
                    if(line.split("|").length == 3){
                        tempFamilyMember.setBorn(line.split("|")[2].toString());
                    }
                    
                }
            }

            if (tempPerson.firstName !== "" ) {
                if (tempFamilyMember.name !== ""){
                    tempPerson.addFamilyMember(tempFamilyMember);
                }
                await persons.push(tempPerson);
            }

            
            
            // close the readline interface
            rl.close();

            // after the file, send the array of persons to the writer
            writer.writeXMLfile(persons);
        
        } catch (err) {
            console.error('Error reading file:', err);
        }   



    }
    
module.exports = {
    readFile
}