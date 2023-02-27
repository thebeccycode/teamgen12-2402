const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

let team = [
    {
        name: bea,
        age: 27,
        role: Manager,
    },
    {
        name: pop ,
        age: 32,
        role: Engineer,
    },
    {
        name: kip ,
        age: 41,
        role: Employee, 
    },
    {
        name: bip ,
        age: 23,
        role: Intern
    },
];

console.log(team);

async function startProgram(){
    
    team.push
    
    let htmlDoc = render(team)
    
    await fs.writeFile(outputPath, htmlDoc);
};

startProgram()

