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

const regexp16 = /you+$/i;
const result16 = regexp16.test(str3);
console.log("result16:",result16)

const regexp17 = /you.$/i;
const result17 = regexp17.test(str3);
console.log("result17:",result17);

const regexp18 = /you.*$/;
const result18 = regexp18.test(str3);
console.log("result18:",result18)



{
    const str5 = "Hello";

    const regexp1 = /[kjm]/i;//if there is a "k" or "j" or "m"  then it will be true
    const result1 = regexp1.test(str5);
    console.log("result1:",result1);//false
    

    const regexp2 = /[^kjm]/i;//if there's no "k"  or "j"  or "m"  then it will be true
    const result2 = regexp2.test(str5);
    console.log("result2:",result2);//true

    const regexp3 = /[H+]/i;//atleast one"H" is required
    const result3 = regexp3.test(str5);
    console.log("result3:",result3);//true

    const regexp4 = /o$/i;//string ends with o
    const result4 = regexp4.test(str5);
    console.log("result4:",result4);//true

    const regexp5 = /o?$/i; //"0" in string ending is optional
    const result5 = regexp5.test(str5);
    console.log("result5:",result5);//true

    const regexp6 = /0+$/i; //atleast one "0" is required in the string ending
    const result6 = regexp6.test(str5);
    console.log("result6:",result6); //false


    //{} - indicates the no. of characters,a{2} means "aa" ,ie 2a is required
    const regexp7 = /L{2}o$/i;//"o" should be exactly after 2 Ls
    const result7 = regexp7.test(str5);
    console.log("result7:",result7);//true

    const regexp8 = /L{2,4}o$/i;//"o" should be exactly after between 2 to 4 Ls
    const result8 = regexp8.test(str5);
    console.log("result8:",result8);//true

    const regexp9 = /Hel{2,4}o$/i;//"o" should be exactly after between 2 to 4 Ls and "o" is required
    const result9 = regexp9.test(str5);
    console.log("result9:",result9);//true

    const regexp10 = /Hel{2,}o$/i;//2 or more "L" is required
    const result10 = regexp10.test(str5);
    console.log("result10:",result10);//true

    //\- indicates escape character, used for matching any characters which has special meaning
    const regexp11 = /\d/i;//if there's any digits ,it will be true, else it will be false 
    const result11 = regexp11.test(str5);
    console.log("result11:",result11);//false

    const regexp12 = /\D/i;//if there's any non-digits it will be true,if there's only digits it will be false
    const result12 = regexp12.test(str5);
    console.log("result12:",result12);//true

    //suppose we want to match "." in a string, since "." has a special meaning in regular expression it willl not work as expected and will match everything

    const regexp13 = /./i;//if there's a "." or anything it will match
    const result13 = regexp13.test(str5);
    console.log("result13:",result13);//true

    //so we can write it as
    const regexp14 = /\./i;
    const result14 = regexp14.test(str5);
    console.log("result14:",result14);//false

}


//DATE VALIDATION
//1
const regexpForDate = /^\d{1,2}-\d{1,2}-\d{4}$/i;
//2
const regexpForDate1 = /^([012]?\d|3[01])-([0]\d|[1][012])-(\d{4}$)/i;


function checkResult(value) {
    const result = regexpForDate1.test(value);

    if (result) {
        return '';
    } else {
        return'Invaild String';
    }
}

const value = "16-12-2023";

let validation_result = checkResult(value);
console.log("validation_result:",validation_result);

function onChange(arg) {
    let validation_result = checkResult(arg.value);
    let label = document.getElementById('error');
    if (validation_result) {
        label.innerHTML = validation_result;
    } else {
        label.innerHTML = validation_result;
    }
}


//'^' and '$' can only be used in the start and end of a string amd cannot be used in between strings to match, so we can use lookaheads for giving startin and ending in between strings

//(?=) - Positive Lookahead, A(?=B) -> Matches: A only if A is followed by B
//(?!) - Negative Lookahead, A(?!B) -> Matches: A only if A is not followed by B
//(?<=) - Positive Lookbehind, (?<=B)A -> Matches: A only if A is preceded by B
//(?<!) - Negative Lookbehind, (?<!B)A -> Matches: A only if A is not preceded by B

{
    let dateString = '19-12-2023';

    let regex = /-\d+-/; //it will match also '-12-' in result and gives as result array

    const result = dateString.match(regex);
    console.log("result:",result);

    //Inorder to match exactly '12' in dateString we can use lookaheads
    let regex1 = /(?<=-)\d+(?=-)/; //this will exactly match '12' in string
    const result1 = dateString.match(regex1);
    console.log("result1:",result1);

    //Example for Negative Lookahead and Negative Lookbehind
    let phone = "(91)9988776655";

    //To match numbers outside of (91)
    const phoneRegex = /(?<!\()\d+(?!\))/;
    const phoneRegexResult = phone.match(phoneRegex);
    console.log("phoneREgexResult:",phoneRegexResult);
 }

 {
    function findUser(userId) {
        let userInfo = [
            {
                id: 1,
                name: "ASWIN",
                age: 22,
            },
            {
                id: 2,
                name: "LUFFY",
                age:19,
            }
        ];
        let user = userInfo.find((element)=>element.id ==userId);
        return user;

    }
    let user = findUser(1);
    console.log("user:",user);



    function findUser1(userId) {
        let userInfo = [
            {
                id: 1,
                name: "ASWIN",
                age: 22,
            },
            {
                id: 2,
                name: "LUFFY",
                age:19,
            }
        ];
        setTimeout(() => {
            let user = userInfo.find(()=>userInfo.id ==userId);
        return user;
        },500);
        

    }
    let user1 = findUser1(1);
    console.log("user1:",user1);


    //Using Promises
    function findUser2(userId) {
        return new Promise((resolve,reject) => {
            //console.log("userId:",userId);

            //Invoking an asynchronous operation
            setTimeout(() => {
                let userInfo = [ {
                    id: 1,
                    name: "ASWIN",
                    age: 22,
                },
                {
                    id: 2,
                    name: "LUFFY",
                    age:19,
                }];
                let user = userInfo.find((element) => element.id ===userId);

                if (user) {
                    resolve(user);

                } else {
                    reject("user not found");

                }

            },3000);
        });
    }

    // findUser2(3)
    // .then((user) => {
    //     //when resolved
    //     console.log("\n\n");
    //     console.log("user:",user);
    //     console.log(user.name);
    // })
    // .catch((error) => {
    //     //when rejected
    //     console.log("\n\n");
    //     console.log("error:",error);
    // })
    // .finally(() => {
    //     console.log("Experiment completed");
    // })

    async function getUserData() {
        
        try {
            let userData = await findUser2(3);
        console.log("userData:",userData);

        } catch (error) {
            console.log("Error:", error.message?error.message:error);

        }finally {
            console.log("completed");
        }
    }
    getUserData();
 }

