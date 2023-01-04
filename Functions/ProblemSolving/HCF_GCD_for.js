//Write a program to find the HCF or GCD of two integers

let hcf_value;

const first_number = 16;
const second_number = 8;

for(let iterator = 1; iterator <= first_number && iterator <= second_number; iterator++){
    if(first_number % iterator == 0 && second_number % iterator == 0){
        hcf_value = iterator
    }
}
console.log(`HCF of ${first_number} and ${second_number} is ${hcf_value}`)