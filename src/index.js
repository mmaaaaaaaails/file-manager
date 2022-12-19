import { homedir } from 'os';
import { join } from 'path';
import * as readline from 'node:readline/promises';
import {getGoodbye, getWelcome} from "./helper.js";
import {getUp} from "./up.js";

let username = '';

const parseArgv = () => {
    const user = process.argv.reduce((acc, value) => {
        if (value.startsWith('--username=')) {
            username = `${value.trim().replace('--username=','')}`;
            return [...acc, getWelcome(username)];
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
    getGoodbye(username);
    process.exit();
});

console.log(`You are currently in ${join(homedir())}`);

rl.on('line', (input) => {
    try {
        switch (input.trim()) {
            case '.exit':
                getGoodbye(username);
                process.exit();
                break;
            case 'up':
                getUp();
                break;
            default:
                console.log('Invalid input');
        }
    } catch {
        throw new Error('Operation failed')
    }
});
