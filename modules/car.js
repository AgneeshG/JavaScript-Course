
class Car{ 
    drive(){
        console.log("driving")
    }
}
function fillGas(){
    console.log("Filling gas");
}
function repair(){
    console.log("Repairing");
}

export default Car
export {fillGas, repair}