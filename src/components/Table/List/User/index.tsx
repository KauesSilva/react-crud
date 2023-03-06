import IUser from "../../../../types/User";
import Button from "../../../Button";

interface Props extends IUser {
    selectUser: (selectedUser: IUser) => void;
}

export default function User({
    id,
    name,
    lastName,
    cellphone,
    email,
}: Props): JSX.Element {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
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
                    type="button"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                    Edit
                </Button>
            </td>
            <td className="px-6 py-4 text-right">
                <Button
                    type="button"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                    Delete
                </Button>
            </td>
        </tr>
    );
}
