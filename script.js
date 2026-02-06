    const nameInput = document.getElementById("nameInput");
    const ageInput = document.getElementById("ageInput");
    const myButton = document.getElementById("myButton");
    let OUTPUT = document.getElementById("output");
    
    function happyBirthday() {
        console.log("happyBirthday is running!");
        return "Happy birthday to you!";
    }
    
    function birthdayName(name) {
        console.log("birthdayName is running!");
        return "Happy birthday dear, " + name + "!";

    }

    function personalizedSong(age) {
        let output = "You're " + age + " years old today!";
        output += "<br><br>" + happyBirthday();
        output += "<br>" + happyBirthday();
        output += "<br>" + birthdayName(nameInput.value);
        output += "<br>" + happyBirthday();
        return output;

    }

    myButton.addEventListener("click", function () {
        OUTPUT.innerHTML = personalizedSong(ageInput.value);
    });
    
    /* 
    Create function, happyBirthday, that outputs "Happy Birthday to you!" using the innerHTML property
	Look at the code from last week's assignment if you're unsure of how to use innerHTML


    Create function, birthdayName, that receives an argument from the nameInput input field
	and outputs a personalized "Happy Birthday dear, <name>!" using the innerHTML property"


	Create function, personalizedSong, that receives two arguments, age and name.
	
	The function should then output a personalized message,  "You're <age> years old today!" and assemble the personalized song using the functions you created:
	
	"You're <age> years old today!" outputs using innerHTML, using the actual age received by the user
	Call the happyBirthday function 
	Call the happyBirthday function again
	Call the birthdayName function, using the actual name received form the user
	Call the happyBirthday function

    Add an event listener to myButton that, once clicked, executes an anomymous function.
	
	The anonymous function should:
	 1. Clear the contents of the output innerHTML.
	 2. Get the values of the nameInput and ageInput input fields and assign them to local variables.
	 3. Call the personalizedSong function, using the local variables you created as its arguments.
	 
	 Hint: You can clear out output's innterHTML by 
	 setting its content to empty quotations, .innerHTML = "";
	*/