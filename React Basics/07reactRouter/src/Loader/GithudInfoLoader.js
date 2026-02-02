export const githubInfoLoader = async () => {
    const apiUrl = "https://api.github.com/users/ieAditya"
    // const apiUrl = "https://api.github.com/users/hiteshchoudhary"
    const response = await fetch(apiUrl)
    return response.json()
}