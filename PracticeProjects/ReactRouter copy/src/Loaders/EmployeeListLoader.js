export const employeesListLoader = async() => {
    const url = "https://dummy.restapiexample.com/api/v1/employees"
    const response = await fetch(url).then(res => res.json())
    console.log(response);
    
    return response
}