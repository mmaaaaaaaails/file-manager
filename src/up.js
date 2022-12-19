export const getUp = () => {
    process.chdir('..');
    console.log(`You are currently in ${process.cwd()}`);
}
