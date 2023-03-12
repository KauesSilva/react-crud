import IUser from "types/User";
import Button from "@/components/Button";

interface Props extends IUser {
    selectUser: (selectedUser: IUser) => void;
    deleteUser: (selectedUser: IUser) => void;
    editUser: (selectedUser: IUser) => void;
}

export default function User({
    id,
    name,
    lastName,
    cellphone,
    email,
    selectUser,
    deleteUser,
    editUser,
    selected,
}: Props): JSX.Element {
    return (
        <tr
            className={`${
                selected
                    ? "bg-gray-50 dark:bg-gray-600"
                    : "bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            }`}
            onClick={() =>
                selectUser({
                    id,
                    name,
                    lastName,
                    cellphone,
                    email,
                    selected,
                })
            }
        >
            <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
                {name}
            </th>
            <td className="px-6 py-4">{lastName}</td>
            <td className="px-6 py-4">{cellphone}</td>
            <td className="px-6 py-4">{email}</td>
            <td className="px-6 py-4 text-right">
                <Button
                    onClick={() =>
                        editUser({
                            id,
                            name,
                            lastName,
                            cellphone,
                            email,
                            selected,
                        })
                    }
                    type="button"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                    Edit
                </Button>
            </td>
            <td className="px-6 py-4 text-right">
                <Button
                    onClick={() =>
                        deleteUser({
                            id,
                            name,
                            lastName,
                            cellphone,
                            email,
                            selected,
                        })
                    }
                    type="button"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                    Delete
                </Button>
            </td>
        </tr>
    );
}
