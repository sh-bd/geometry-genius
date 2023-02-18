// triangle --------------------------

document.getElementById('triangle-btn').addEventListener('click',function(){


    
    const base = document.getElementById('triangle-base');
    const height = document.getElementById('triangle-height');

    
    const triangleBaseString = base.value;
    const triangleBase = parseFloat(triangleBaseString);

    const triangleHeightString = height.value;
    const triangleHeight = parseFloat(triangleHeightString);

    const calculateTriangleArea= 0.5 * triangleBase * triangleHeight;

    document.getElementById('final-output').innerText = calculateTriangleArea+' cm\u00B2'; 
    document.getElementById('geometric-shape').innerText= 'Triangle';

    base.value = '';
    height.value = '';
    
})


// rectangle --------------------------

document.getElementById('rectangle-btn').addEventListener('click',function(){

    const width = document.getElementById('rectangle-width');
    const height = document.getElementById('rectangle-length');


    const rectangleWidthString = width.value;
    const rectangleWidth = parseFloat(rectangleWidthString);

    const triangleHeightString = height.value;
    const triangleHeight = parseFloat(triangleHeightString);

    const calculateRectangleArea = triangleHeight * rectangleWidth;

    const previousFinalOutput = document.getElementById('final-output');
    const finalOutputString = previousFinalOutput.innerText;
    const currentOutput= finalOutputString +'\n'+calculateRectangleArea+' cm\u00B2';
    previousFinalOutput.innerText = currentOutput;

    const previousShape = document.getElementById('geometric-shape').innerText;
    document.getElementById('geometric-shape').innerText= previousShape+ ' Rectangle';
    
    document.getElementById('final-output').innerText = previousFinalOutput.innerText;

    width.value = '';
    height.value = '';
})

//  parallelogram----------------
document.getElementById('para-btn').addEventListener('click', function(){

    const base = 10;
    const height = 12;
    const areaParallelogram = base * height;

    console.log(10*12);
    

    const previousFinalOutput = document.getElementById('final-output');
    const finalOutputString = previousFinalOutput.innerText;
    let currentOutput;
    if(finalOutputString ===''){
         currentOutput= areaParallelogram+' cm\u00B2';
    }
    else{
         currentOutput= finalOutputString +'\n'+areaParallelogram+' cm\u00B2';
    }
    
    previousFinalOutput.innerText = currentOutput;

    const previousGeometry = document.getElementById('geometric-shape').innerText;
    document.getElementById('geometric-shape').innerText= previousGeometry+ ' Parallelogram';
    
    document.getElementById('final-output').innerText = previousFinalOutput.innerText;

    
})


//  Rhombus-------------------
document.getElementById('rhombus-btn').addEventListener('click',function(){

    const base = 16;
    const height = 8;
    const areaRhombus = 0.5*base*height;
    

    const previousFinalOutput = document.getElementById('final-output');
    const finalOutputString = previousFinalOutput.innerText;
    let currentOutput;
    if(finalOutputString ===''){
         currentOutput= areaRhombus+' cm\u00B2';
    }
    else{
         currentOutput= finalOutputString +'\n'+areaRhombus+' cm\u00B2';
    }
    
    previousFinalOutput.innerText = currentOutput;

    const previousGeometry = document.getElementById('geometric-shape').innerText;
    document.getElementById('geometric-shape').innerText= previousGeometry+ ' Rhombus';
    
    document.getElementById('final-output').innerText = previousFinalOutput.innerText;   
})

//  Pentagon-------------------
document.getElementById('pentagon-btn').addEventListener('click',function(){

    const base = 6;
    const height = 10;
    const areaPentagon = 0.5*base*height;
    

    const previousFinalOutput = document.getElementById('final-output');
    const finalOutputString = previousFinalOutput.innerText;
    let currentOutput;
    if(finalOutputString ===''){
         currentOutput= areaPentagon+' cm\u00B2';
    }
    else{
         currentOutput= finalOutputString +'\n'+areaPentagon+' cm\u00B2';
    }
    
    previousFinalOutput.innerText = currentOutput;

    const previousGeometry = document.getElementById('geometric-shape').innerText;
    document.getElementById('geometric-shape').innerText= previousGeometry+ ' Pentagon';
    
    document.getElementById('final-output').innerText = previousFinalOutput.innerText;   
})

//  Ellipse--------------------------
document.getElementById('ellipse-btn').addEventListener('click',function(){

    const base = 6;
    const height = 10;
    // const areaEllipse = Math.round((3.1416*base*height)*100/100);
    const result = Math.PI*base*height
    const areaEllipse = result.toFixed(2);

    const previousFinalOutput = document.getElementById('final-output');
    const finalOutputString = previousFinalOutput.innerText;
    let currentOutput;
    if(finalOutputString ===''){
         currentOutput= areaEllipse+' cm\u00B2';
    }
    else{
         currentOutput= finalOutputString +'\n'+areaEllipse+' cm\u00B2';
    }
    
    previousFinalOutput.innerText = currentOutput;

    const previousGeometry = document.getElementById('geometric-shape').innerText;
    document.getElementById('geometric-shape').innerText= previousGeometry+ ' Ellipse';
    
    document.getElementById('final-output').innerText = previousFinalOutput.innerText;   
})  



// Trying to convert to meter square
// document.getElementById('convert-btn').addEventListener('click', function(
// const valueInCM = parseFloat(document.getElementById('final-output').value);
// const toMeter = valueInCM / 100;

// document.getElementById('converted-to-meter').innerText = toMeter +'\n\'+' cm\u00B2';

// ))