export const githubInfoLoader = async() => {
    const url = "https://api.github.com/users/ieAditya"
    // const url = "https://api.github.com/users/hiteshchoudhary"
    const response = await fetch(url).then(res => res.json())
    console.log(response);
    
    return response
}