let height = undefined;
function checkundf(height){
    let result = " "
    if(height === undefined){
     result = `Height is not defined`;
    }
    return result;
}
let result = checkundf(height) ;

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
