let ambilDataUserAsync = async() => {
    try{
        const response = await fetch("https://reqres.in/api/users")
        const user = await response.json()
        console.log(user.data)
    }catch(error){
        console.log('Terjadi Kesalahan')
    }
}

export default ambilDataUserAsync