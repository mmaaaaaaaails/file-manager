import {cpus} from "node:os";

export const getCpus = () => {
    const infoCpus = cpus().map(({model, speed}) => ({
        model,
        speed: `${speed / 1000}GHz`
    }))
    console.table(infoCpus);
}
