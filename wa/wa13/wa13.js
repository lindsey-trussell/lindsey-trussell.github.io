// 1 and 2 cause i like to save time
let text = 
    '{ "companyName" : "Tech Stars" , ' + 
    '"website" : "www.techstars.site" , ' +
    '"employees" : [' +
        '{"name":"Sam" , "department":"Tech" , "designation":"Manager" , "salary":"40000" , "raiseEligable":"true"},' +
        '{"name":"Mary" , "department":"Finance" , "designation":"Trainee" , "salary":"18500" , "raiseEligable":"true"},' +
        '{"name":"Bill" , "department":"HR" , "designation":"Executive" , "salary":"21200" , "raiseEligable":"false"} ]}';

let obj = JSON.parse(text);

console.log('uhh...here are all of the employees. kinda underpaid tho');
for (const employee of obj.employees){
    console.log(employee);
};

console.log('and heres their company')
console.log(obj);

// 3
obj['employees'].push({"name":"Anna" , "department":"Tech" , "designation":"Executive" , "salary":"25600" , "raiseEligable":"false"});

console.log('oh wow look a new employee. an executive and she still doesnt make a living wage smh');
for (const employee of obj.employees){
    console.log(employee);
};

// 4
let totalSalary = 0;
for (const employee of obj.employees){
    totalSalary += parseInt(employee.salary);
};

console.log('how much do they make altogether? all five of them?');
console.log(totalSalary);
console.log('less than bezos makes in an hour...');

// 5
console.log('time for raises! im sure this wont be depressing!')

for (let employee of obj.employees){
    if(employee.raiseEligable === 'true'){
        employee.salary = String(1.1*employee.salary);
        employee.raiseEligable = 'false';
    }
};

for (const employee of obj.employees){
    console.log(employee);
};

// 6
console.log('ok so some of them are working from home, but in tech, who can really blame em');

for (let employee of obj.employees){
    employee['wfh'] = 'false';
    if(employee.name === 'Sam' || 'Anna'){
        employee.wfh = 'true';
    };
};

for (const employee of obj.employees){
    console.log(employee);
};