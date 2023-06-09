import Link from "next/link";
import { getUsers } from "./services/get-user"

interface responseItens {
  id: number,
  first_name: string;
}

export const metadata = {
  title: 'Usuários',
  description: 'Generated by create next app',
}

export default async function UsersPage() {
  const users = await getUsers()

  return <>

    <h2>Usuários</h2>
    <ul>
      {
        users.map((user: responseItens) => <Link href={`/users/${user.id}`} key={user.id}><li>{user.first_name}</li></Link>)
      }
    </ul>
    <hr />
  </>
}