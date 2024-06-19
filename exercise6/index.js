import helloWorld from "./helloWorld.js";
import ambilDataUser from "./ambilDataUser.js";
import ambilDataUserAsync from "./ambilDataUserAsnyc.js";

let messages = async() => {
    const msg = await helloWorld()
    console.log(msg)
}
messages()
ambilDataUser()
ambilDataUserAsync()