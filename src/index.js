module.exports = function toReadable (number) {
    
    let numberStr = String(number);
  
    const one_19 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  
    const twenty_90 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
    if (number === 0) one_19[0];  
  
     if (number < 20) {
      return one_19[number];
    }
  
    if (numberStr.length === 2) {
      if (numberStr[1] === '0') 
        return twenty_90[numberStr[0]];
      else
        return twenty_90[numberStr[0]] + ' ' + one_19[numberStr[1]];
    }
  
    if (numberStr.length == 3) {
      if (numberStr[1] === '0' && numberStr[2] === '0')
        return one_19[numberStr[0]] + ' hundred';
      else
        return one_19[numberStr[0]] + ' hundred ' + toReadable(+(numberStr[1] + numberStr[2]));
    }
  
}
