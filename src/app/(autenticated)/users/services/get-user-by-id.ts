export async function getUsersById(userId: any) {
    const response = await fetch(`https://reqres.in/api/users/${userId}`)
    const users = await response.json()

    return users?.data || []
}