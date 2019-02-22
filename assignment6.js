function check_datatype(parameter) {
    if (parameter === null) {
        console.log('Type : NULL')
        console.log('value: ' + parameter)
    } 
    else if(typeof parameter === 'boolean'){
        console.log('Type : Boolean')
        console.log('value: '+parameter)
    }
    else if(typeof parameter === 'undefined') {
        console.log('Type : Undefined')
    }
    else if(typeof parameter === 'string' || parameter instanceof String) {
        console.log('Type : String')
        console.log('value: ' + parameter)
    }
    else if(typeof parameter === 'number' && isFinite(parameter)) {
        console.log('Type : Number')
        console.log('value: ' + parameter)
    }
    else if(parameter && typeof parameter === 'object' && parameter.constructor === Object){
        console.log('Type : Object')
        console.log('value: ')
        console.log(parameter)
    }
    else  if(typeof(parameter)==='object'&& typeof(parameter[0])!=='object' )
    {
        console.log("array");
        parameter.map((x,i)=>{
            console.log(x)
        })
    }    
    else if(typeof(parameter)==='object'&& typeof(parameter[0])==='object')
    {
        console.log("Array of object");
        parameter.map((x,i)=>{
            console.log(x)
        })
    }
    else
    {
        if (isNaN(parameter)) 
        {
            console.log('Not a Number!');
        } 
    }
}
    check_datatype(200)
    check_datatype("hello")
    check_datatype(null)
    check_datatype(true)
    var array=[1,2,3]
    check_datatype(Math.max(array))
    check_datatype(array)
    var object_array=[{'a':1},{'b':2}]
    check_datatype(object_array)
    check_datatype({'a':1})
    