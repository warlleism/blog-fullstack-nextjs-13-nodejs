export async function getUsers() {
    const response = await fetch('https://reqres.in/api/users?page=2')
    const users = await response.json()

    return users?.data || []
}