import { join } from 'path';
import * as readline from 'node:readline/promises';
import {getGoodbye, getWelcome} from "./helper.js";
import {getUp} from "./up.js";
import {getOEL} from "./os/eol.js";
import {homedir} from 'node:os'
import {getArch} from "./os/arch.js";
import {getUsername} from "./os/username.js";
import {getHomedir} from "./os/homedir.js";
import {getCpus} from "./os/cpus.js";

let userName = '';

const parseArgv = () => {
    const user = process.argv.reduce((acc, value) => {
        if (value.startsWith('--username=')) {
            userName = `${value.trim().replace('--username=','')}`;
            return [...acc, getWelcome(userName)];
        }
        return acc;
    },[])
    console.log(user.join(', '));
}

parseArgv();

const rl = readline.createInterface({
    input: process.stdin,
});

process.on('SIGINT', () => {
    getGoodbye(userName);
    process.exit();
});

console.log(`You are currently in ${join(homedir())}`);

rl.on('line', (input) => {
    try {
        switch (input.trim()) {
            case '.exit':
                getGoodbye(userName);
                process.exit();
                break;
            case 'up':
                getUp();
                break;
            case 'os --EOL':
                getOEL();
                break;
            case 'os --architecture':
                getArch();
                break;
            case 'os --username':
                getUsername();
                break;
            case 'os --homedir':
                getHomedir();
                break;
            case 'os --cpus':
                getCpus();
                break;
            default:
                console.log('Invalid input');
        }
    } catch {
        throw new Error('Operation failed')
    }
});



