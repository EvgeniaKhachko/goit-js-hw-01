function getElementWidth (content, padding, border)
{
    
    const resultContent = parseFloat(content); 
    const resultPadding = 2*parseFloat(padding); 
    const resultBorder = 2 * parseFloat(border);
    const resVal = resultContent + resultPadding + resultBorder;
    
    return resVal;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
