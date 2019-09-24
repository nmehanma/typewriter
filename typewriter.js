const sentence = "hello there from lighthouse labs\n";

let wait = 0

for (const char of sentence) {
  
  setTimeout(() => {
    if(sentence.indexOf(char) === (sentence.length - 1)){
      process.stdout.write(char+'\n');
    } else {
      process.stdout.write(char)  
    }
  }, wait += 50);



};

console.log()



