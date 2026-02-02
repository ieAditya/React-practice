export async function employeeProfileLoader({params}){
    const {id} = params;
    const url = `https://dummy.restapiexample.com/api/v1/employee/${id}`
    const response = await fetch(url).then(res => res.json())
    console.log(response);
    
    return response
}