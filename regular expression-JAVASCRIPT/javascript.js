const str1 = "The cat is white";
const str2 = "hi my name is";
const str3 = "hi how are you";
const str4 = `
Hello
good meat
is always good
Hai
`;


const regexp1 = /a/;
const result1 = regexp1.test(str1);//checks if str1 contains letter 'a'
console.log("result1:",result1);//true

//i- for case insensitive search
const regexp2 = /A/i;
const result2 = regexp2.test(str2);//since its case insensitive lower or uppercase doesn't matter
console.log("result2:",result2);//true

const regexp3 = /abc/;
const result3 = regexp3.test(str3);//checks if str3 contains'abc'
console.log("result3:",result3);//false

//[] - represents range
const regexp4 = /[crb]a/;
const result4 = regexp4.test(str1);//checks if str1 contains letters 'c' , 'r' and 'b' before a
console.log("result4:",result4);//true

const regexp5 = /[a-z]a/i;
const result5 = regexp5.test(str1);//checks letters contains in between a-z
console.log("result5:",result5);//true

const regexp6 = /[a-z0-9]a/i;
const result6 = regexp6.test(str1);//checks if the str1 contains letters in between 'a-z' and '0-9' 
console.log("result6:",result6);//true


//^represents start of a string
const regexp7 = /^rat/i;
const result7 = regexp7.test(str2);
console.log("result7:",result7);

const regexp8 = /^hi/i;
const result8 = regexp8.test(str2);
console.log("result8:",result8);

//$ represents end of a string
const regexp9 = /fish$/i;
const result9 = regexp9.test(str2);
console.log("result9:",result9);

const regexp10 = /is$/i;
const result10 = regexp10.test(str2);
console.log("result10:",result10);

const regexp11 = /^good/im;
const result11 = regexp11.test(str4);
console.log("result11:",result11);

const regexp12 = /good$/im;
const result12 = regexp12.test(str4);
console.log("result12:",result12);



const regexp13 = /you?/i;
const result13 = regexp13.test(str3);
console.log("result13:",result13);

const regexp14 = /you(r)?/i;
const result14 = regexp14.test(str3);
console.log("result14:",result14);

const regexp15 = /you*$/i;
const result15 = regexp15.test(str3);
console.log("result15:",result15);



{
    
}

