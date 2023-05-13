import { getUsersById } from "../services/get-user-by-id";


export default async function UserDatailPage({
    params,
}: {
    params: { userid: string };
}

) {

    const user = await getUsersById(params.userid)

    return <>
        <h2>Usuário: {user.first_name}</h2>
    </>
}