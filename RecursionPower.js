// recursion : it is a technique where a function or a method calls itself until a base case is reached
// => There a two key parts of recursion
//  1: the base case => it is the condition where the function or the method stops calling itself
// => base case is important because if it is not there the function or the method gets into a infinite recursion call which may lead to a crash (stack overflow)
// 2:Recursive case : this a where the function calls itself with a smaller or simpler input

function power(base , expo)
{
    if(expo==1)
    {
                return base;
    }else{
        return base*power(base,expo-1);
    }    
}

console.log(power(7,2));


function powers(base , exponent)
{
    if(exponent==1)
    {
        return base;
    }else{
        return base*power(base,exponent-1);
    }
}
console.log(powers(3,2));


