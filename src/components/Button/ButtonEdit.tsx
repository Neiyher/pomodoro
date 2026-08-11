type ButtonEditProps = {
    setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ButtonEdit({ setIsEditMode }: ButtonEditProps) {

    function handleEditMode() {
        setIsEditMode(prev => !prev);
    }

    return (
        <button onClick={handleEditMode}>
            Editar
        </button>
    );
}