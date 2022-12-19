import {userInfo} from "node:os";

export const getUsername = () => {
    const { username } = userInfo();
    console.log(username)
}
