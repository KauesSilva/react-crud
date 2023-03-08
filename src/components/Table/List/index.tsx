import IUser from "../../../types/User";
import User from "./User";

interface Props {
    users: IUser[];
    selectUser: (selectedUser: IUser) => void;
    deleteUser: (selectedUser: IUser) => void;
}

export default function List({ users, selectUser, deleteUser }: Props): JSX.Element {
    return (
        <>
            {users.map((user) => (
                <User selectUser={selectUser} deleteUser={deleteUser} key={user.id} {...user} />
            ))}
        </>
    );
}
