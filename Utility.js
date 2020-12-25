class Utility{

    Pattern;

    firstName = (name) => {

        this.Pattern = new RegExp("^[A-Z]{1}[a-z]{2,}$");
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
}

module.exports = new Utility();