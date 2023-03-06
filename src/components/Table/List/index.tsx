import IUser from "../../../types/User";
import User from "./User";

interface Props {
    users: IUser[];
    selectUser: (selectedUser: IUser) => void;
}

export default function List({ users, selectUser }: Props): JSX.Element {
    return (
        <>
            {users.map((user) => (
                <User selectUser={selectUser} key={user.id} {...user} />
            ))}
        </>
    );
}
