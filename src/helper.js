const getGoodbye = (username) => {
    return console.log(`Thank you for using File Manager, ${username} goodbye!`);
}

const getWelcome = (username) => {
    return `Welcome to the File Manager, ${username}!`;
}

export {
    getGoodbye,
    getWelcome
}
