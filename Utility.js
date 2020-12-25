class Utility{

    Pattern;

    firstName = (name) => {

        this.Pattern = RegExp(`^[A-Z]{1}[a-z]{2,}$`);
        if(this.Pattern.test(name))
            console.log(`\n * ${name} Is Valid..!`)
        else
            console.log(`\n * ${name} Is Not Valid..!`)
        
        return this.Pattern;
    } 

    lastName = (name) => {

        this.firstName(name);
        return this.Pattern;
    }

    eMail = (email) => {

        this.Pattern = RegExp(`^[a-zA-Z0-9]([._+-]{0,1}[a-zA-Z0-9])*[@]{1}[a-zA-Z0-9]{1,}[.]{1}[a-zA-Z]{2,3}([.]{1}[a-zA-Z]{2,3}){0,1}$`);
        
        if(this.Pattern.test(email))
            console.log(`\n * ${email} Is Valid E-Mail..!`)
        else
            console.log(`\n * ${email} Is Not Valid E-Mail..!`)
        
        return this.Pattern;
    }

    mobileNumber = (number) => {
        
        this.Pattern = RegExp(`^([+][1-9]{1,3}[- ]?)?[1-9]{10}$`);

        if(this.Pattern.test(number))
            console.log(`\n * ${number} Is Valid Mobile Number..!`)
        else
            console.log(`\n * ${number} Is Not Valid Mobile Number..!`)
        
        return this.Pattern;
    }

    passWord = (pass) => {

        this.Pattern = RegExp(`^.{8,}$`);

        if(this.Pattern.test(pass))
            console.log(`\n * ${pass} Is Valid Password..!`)
        else
            console.log(`\n * ${pass} Is Not Valid Password..!`)
        
        return this.Pattern;
    }
}

module.exports = new Utility();