function takeANumber (line, newCustomer) {
  line.push(newCustomer);
  return `Welcome, ${newCustomer}. You are number ${line.length}  in line.`;
}

function nowServing (line) {
  if (line.length>0) {
    return `Currently serving ${line.shift()}.`;
  }
  else {return `There is nobody waiting to be served!`}
}

function currentLine (line) {
  let lineStats = `The line is currently: `; 
  let i=0;
  if (line.length===0) 
  {return `The line is currently empty.`}
  while(i<line.length-1)
  {lineStats += `${i+1}. ${line[i]}, `; i++}
  if (i===line.length-1)
  {lineStats += `${i+1}. ${line[i]}`}
  return lineStats;  
}