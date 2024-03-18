try{
    let num = prompt("Enter a number")
    if(num===''){
        throw "Input can not be empty"
    }
    if(isNaN){
        throw "Enter a valid number"
    }

    console.log(num**2);
}
catch(error){
    console.log(error);
}
finally{
    console.log("Program completed.");
}
