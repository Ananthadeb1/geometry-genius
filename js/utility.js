function getValue(elemetnId){
  let textfieldData = document.getElementById(elemetnId);
  let value = elemetnId.value;
  if(value != 'number'){
    alert("Please give a number.");
    return 0;
  }
    else if(value >=0)
    return value;
    else return 0;
}
function calculateValue(elementId){
    if(elementId === "triClc"){
       return "Triangle " + (0.5 * getValue("triB") * getValue("triH")).toFixed(2);
    }
    else if(elementId === "recClc"){
        return "Rectangle "+ (getValue("racW") * getValue("racH")).toFixed(2);
    }
    else if(elementId === "ParaClc") return "Parallelogram "+ (10*12).toFixed(2);
    else if(elementId === "rombClc") return "Rhombus "+ (0.5 * 16 * 8).toFixed(2);
    else if(elementId === "pentClc") return "Pentagon "+(0.5 * 6 * 10).toFixed(2);
    else if(elementId === "ElepClc") return "Ellipse" + (3.14 * 10 * 4).toFixed(2);
    else return 0;
}

