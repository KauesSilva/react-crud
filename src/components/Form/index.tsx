import { useState } from "react";
import IUser from "../../types/User";
import Button from "../Button";
import { v4 as uuidv4 } from "uuid";

interface Props {
    setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
}

export default function Form({ setUsers }: Props): JSX.Element | null {
    const [user, setUser] = useState<IUser>({
        id: uuidv4(),
        name: "",
        lastName: "",
        cellphone: "",
        email: "",
        selected: false,
    });

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const createUser = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setUsers((oldUsers) => [...oldUsers, { ...user }]);
        setUser({
            id: uuidv4(),
            name: "",
            lastName: "",
            cellphone: "",
            email: "",
            selected: false,
        });
    };

    return (
        <form onSubmit={createUser}>
            <label className="text-gray-500 uppercase text-xs dark:text-gray-400">
                Name
            </label>
            <input
                onChange={handleOnChange}
                value={user.name}
                type="text"
                name="name"
                className="rounded-lg w-full text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-white p-2 mt-2 mb-3"
                required
            />

            <label className="text-gray-500 uppercase text-xs dark:text-gray-400">
                Last Name
            </label>
            <input
                onChange={handleOnChange}
                value={user.lastName}
                type="text"
                name="lastName"
                className="rounded-lg w-full text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-white p-2 mt-2 mb-3"
                required
            />

            <label className="text-gray-500 uppercase text-xs dark:text-gray-400">
                Cellphone
            </label>
            <input
                onChange={handleOnChange}
                value={user.cellphone}
                type="text"
                name="cellphone"
                className="rounded-lg w-full text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-white p-2 mt-2 mb-3"
                required
            />

            <label className="text-gray-500 uppercase text-xs dark:text-gray-400">
                Email
            </label>
            <input
                onChange={handleOnChange}
                value={user.email}
                type="email"
                name="email"
                className="rounded-lg w-full text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-white p-2 mt-2 mb-3"
                required
            />
            <div className="bg-white border-b text-white dark:bg-gray-800 dark:border-gray-700 px-4 pt-5 pb-4 sm:p-6 sm:pb-4"></div>
            <div className="bg-white dark:bg-gray-800 pt-3 text-right">
                <Button
                    type="submit"
                    className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
                >
                    Save
                </Button>
            </div>
        </form>
    );
}
