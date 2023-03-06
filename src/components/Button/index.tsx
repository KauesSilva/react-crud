interface IButton {
    children: React.ReactNode;
    type: "submit" | "reset" | "button" | undefined;
    className: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
    children,
    type,
    className,
    onClick,
}: IButton) {
    return (
        <button className={className} type={type} onClick={onClick}>
            {children}
        </button>
    );
}
