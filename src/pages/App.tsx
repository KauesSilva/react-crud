import { useState } from "react";
import Form from "../components/Form";
import Modal from "../components/Modal";
import Table from "../components/Table";
import List from "../components/Table/List";
import IUser from "../types/User";

export default function App(): JSX.Element {
    const [users, setUsers] = useState<IUser[] | []>([]);
    const [showModal, setShowModal] = useState(false);
    const handleOnClose = () => setShowModal(false);
    const handleCreateClick = () => setShowModal(true);
    const [selected, setSelected] = useState<IUser>();

    const selectUser = (userSelected: IUser) => {
        setSelected(userSelected);
        setUsers((prevUsers) =>
            prevUsers.map((user) => ({
                ...user,
                selected: user.id === userSelected.id ? true : false,
            }))
        );
    };

    return (
        <div className="App flex justify-center items-center h-auto min-h-full w-full">
            <Table createBtn={handleCreateClick}>
                <List selectUser={selectUser} users={users} />
            </Table>
            <Modal visible={showModal} onClose={handleOnClose}>
                <Form setUsers={setUsers} />
            </Modal>
        </div>
    );
}
