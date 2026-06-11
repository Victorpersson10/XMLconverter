var builder = require('xmlbuilder');
const fs = require("fs");


function writeXMLfile(persons)
{
    var doc = builder.create("people", {encoding: "utf-8"});

    for (let i = 0; i < persons.length; i++) {
                const personNode = doc.ele("person");
                
                personNode.ele("firstname", persons[i].firstName).up();
                

                if(persons[i].lastName !== undefined && persons[i].lastName !== ""){
                    personNode.ele("lastname", persons[i].lastName).up();
                }

                // if the person has some form of adress information
                if (persons[i].street !== "" || persons[i].city !== "" || persons[i].zip !== ""){
                    const adressNode = personNode.ele("adress");

                    if (persons[i].street !== "") { 
                        adressNode.ele("street", persons[i].street).up();
                    }
    
                    if (persons[i].city !== "") { 
                        adressNode.ele("city", persons[i].city).up();
                    }
                    
                    if (persons[i].zip !== "") { 
                        adressNode.ele("zip", persons[i].zip).up();
                    }
                }

                // if the person has some form of phone information
                if (persons[i].mobileNumber !== "" || persons[i].landlineNumber !== "") {
                    const phoneNode = personNode.ele("phone");
                    if (persons[i].mobileNumber !== ""){
                        phoneNode.ele("mobile", persons[i].mobileNumber).up();
                    }
    
                    if (persons[i].landlineNumber !== ""){
                        phoneNode.ele("landline", persons[i].landlineNumber).up();
                    }
                }

                // if the person has a family member
                if (persons[i].family.length) {

                    // loop through the family list
                    for (let j = 0; j < persons[i].family.length; j++) {
                        const familyNode = personNode.ele("family");

                        familyNode.ele("name", persons[i].family[j].name).up();

                        
                        if(persons[i].family[j].born !== undefined && persons[i].family[j].born.trim() !== ""){
                            familyNode.ele("born", persons[i].family[j].born).up();
                        }

                        // If family member has adress data
                        if(persons[i].family[j].street !== "" || persons[i].family[j].city !== "" || persons[i].family[j].zip !== ""){
                            const familyAdressNode = familyNode.ele("adress")

                            if (persons[i].family[j].street !== ""){
                                familyAdressNode.ele("street", persons[i].family[j].street).up();
                            }
                            if (persons[i].family[j].city !== ""){
                                familyAdressNode.ele("city", persons[i].family[j].city).up();
                            }
                            if (persons[i].family[j].zip !== ""){
                                familyAdressNode.ele("zip", persons[i].family[j].zip).up();
                            }                        
                        }

                        // If family member has phone data
                        if(persons[i].family[j].mobileNumber !== "" || persons[i].family[j].landlineNumber){
                            const familyPhoneNode = familyNode.ele("phone")

                            if(persons[i].family[j].mobileNumber !== ""){
                                familyPhoneNode.ele("mobile", persons[i].family[j].mobileNumber).up();
                            }

                            if(persons[i].family[j].landlineNumber !== ""){
                                familyPhoneNode.ele("landline", persons[i].family[j].landlineNumber).up();
                            }

                        }
                    }
                }

    }

    try {
    fs.writeFileSync('output.xml', doc.end({ pretty: true }));
    // file written successfully
    } catch (err) {
    console.error(err);
    }

};

module.exports = {
    writeXMLfile    
}
