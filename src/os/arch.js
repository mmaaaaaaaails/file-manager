import {arch} from "node:os";

export const getArch = () => {
    console.log(arch())
}
