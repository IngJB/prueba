function suma()
    {
    var number1=parseInt(document.getElementById('num1').value);
    var number2=parseInt(document.getElementById('num2').value);
    
    var resutl;
    resutl=number1+number2;
    document.getElementById('SUMANDO').value=resutl;
    
    alert("El RESULTADO ES:"+resutl);
    }