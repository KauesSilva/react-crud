import IUser from "../../../types/User";
import User from "./User";

interface Props {
    users: IUser[];
    selectUser: (selectedUser: IUser) => void;
    deleteUser: (selectedUser: IUser) => void;
    editUser: (selectedUser: IUser) => void;
}

export default function List({ users, selectUser, deleteUser, editUser }: Props): JSX.Element {
    return (
        <>
            {users.map((user) => (
                <User selectUser={selectUser} deleteUser={deleteUser} editUser={editUser} key={user.id} {...user} />
            ))}
        </>
    );
}
