function ambilDataUser(){
    fetch("https://reqres.in/api/users")
        .then((response) => response.json())
        .then((user) => console.log(user.data))
}

export default ambilDataUser