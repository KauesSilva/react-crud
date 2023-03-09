import Button from "../Button";

interface Props {
    isVisible: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export default function Modal({
    isVisible,
    onClose,
    children,
}: Props): JSX.Element | null {
    return isVisible ? (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div
                className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
            >
                <div className="flex items-center justify-between p-4 border-b rounded-t-lg bg-white dark:bg-gray-800 dark:border-gray-700">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        User
                    </h3>
                    <Button
                        type="button"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={onClose}
                    >
                        <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </Button>
                </div>
                <div className="bg-white border-b text-white dark:bg-gray-800 dark:border-gray-700 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    {children}
                </div>
            </div>
        </div>
    ) : null;
}
