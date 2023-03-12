import { useState } from "react";
import Form from "@/components/Form";
import Modal from "@/components/Modal";
import Table from "@/components/Table";
import List from "@/components/Table/List";
import IUser from "@/types/User";

export default function App(): JSX.Element {
    const [users, setUsers] = useState<IUser[] | []>([]);
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false);
    const handleOpenModal = () => setShowModal(true);
    const [selectedUser, setSelectedUser] = useState<IUser>();
    const [isEditing, setIsEditing] = useState(false);
    const [editedUser, setEditedUser] = useState<IUser | null>(null);

    const handleSelectUser = (user: IUser) => {
        setSelectedUser(user);
        setUsers((prevUsersList) =>
            prevUsersList.map((prevUser) => ({
                ...prevUser,
                selected: prevUser.id === user.id ? true : false,
            }))
        );
    };

    const handleDeleteUser = (user: IUser) => {
        setUsers((prevUsers) =>
            prevUsers.filter((prevUser) => prevUser.id !== user.id)
        );
    };

    const handleEditUser = (user: IUser) => {
        setIsEditing(true);
        setEditedUser(user);
        handleOpenModal();
    };

    const handleCreateUser = () => {
        if (selectedUser) {
            setSelectedUser(undefined);
            setIsEditing(false);
        }
        handleOpenModal();
    };

    return (
        <div className="App flex bg-white dark:bg-gray-900 justify-center items-center h-auto min-h-full w-full">
            <Table createBtn={handleCreateUser}>
                <List
                    selectUser={handleSelectUser}
                    deleteUser={handleDeleteUser}
                    editUser={handleEditUser}
                    users={users}
                />
            </Table>
            <Modal isVisible={showModal} onClose={handleCloseModal}>
                <Form
                    setUsers={setUsers}
                    editUsers={users}
                    isEditing={isEditing}
                    editedUser={editedUser}
                />
            </Modal>
        </div>
    );
}
