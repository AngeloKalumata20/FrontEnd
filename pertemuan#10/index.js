//Module in JS

// console.log("Module in JS");
// import { nama, numbers as angka, sayHallo } from "./utils.js";
// import Hello from "./greetings.js";

// console.log(nama);
// console.log(angka);
// console.log(sayHallo());
// console.log(Hello());

//Asynchronous JS

//Synchronous/Single Thread/Blocking

// console.log("Proses 1");
// console.log("Proses 2");
// console.log("Proses 3");
// console.log("Proses 4");

//Asynchronous/ multi thread/ non-blocking
// Ada 2 jenis async:
// 1. Parallel
// setTimeout(() => {
//   console.log("Proses 1");
// }, 1000);
// setTimeout(() => {
//   console.log("Proses 2");
// }, 5000);
// setTimeout(() => {
//   console.log("Proses 3");
// }, 5000);
// setTimeout(() => {
//   console.log("Proses 4");
// }, 3000);

//2. Concurent
// 1. Callback
setTimeout(() => {
  console.log("Proses 1");
  setTimeout(() => {
    console.log("Proses 2");
    setTimeout(() => {
      console.log("Proses 3");
      setTimeout(() => {
        console.log("Proses 4");
      }, 2000);
    }, 2000);
  }, 2000);
}, 2000);

//2. Promise
//1. Buat promise
let condition = true;
let newPromise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("Berhasil");
  } else {
    reject("Gagal");
  }
});

//2. Menggunakan/consume promise
//a. then - catch
// newPromise
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

//b. async - await
// cat: wajib membuat fungsi
// const getData = async () => {
//   try {
//     let result = await newPromise;
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };
// getData();

//Fetch (then - catch)
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//Fetch (async - await)
// const getJSONPlaceholder = async () => {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users");
//     let json = await response.json();
//     console.log(json);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getJSONPlaceholder();

//Axios (then - catch)
let axios = require("axios");
// axios
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then((response) => console.log(response.data));

//Axios (async - await)
// let getJSONPlaceholderAxios = async () => {
//   try {
//     let response = await axios.get(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     console.log(response.data);
//   } catch (error) {
//     console.log(error);
//   }
// };
// getJSONPlaceholderAxios();
// index.js
// Displaying index.js.
