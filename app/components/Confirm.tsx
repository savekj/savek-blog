import Dialog from './Dialog';
import Button from './Button';

interface Props {
    title: string;
    children: React.ReactNode;
    open: boolean;
    onClose: Function;
    onConfirm: Function;
}
export default function ConfirmDialog(props: Props) {
    const { open, onClose, title, children, onConfirm } = props;
    if (!open) {
        return <></>;
    }

    return (
        <Dialog open={open} onClose={onClose}>
            <h2 className="text-xl">{title}</h2>
            <div className="py-5">{children}</div>
            <div className="flex justify-end">
                <div className="p-1">
                    <Button
                        onClick={() => onClose()}
                        className="bg-blue-600  hover:bg-blue-700"
                    >
                        No
                    </Button>
                </div>
                <div className="p-1">
                    <Button
                        onClick={() => {
                            onClose();
                            onConfirm();
                        }}
                        className='bg-red-600  hover:bg-red-700'
                    >
                        Yes
                    </Button>
                </div>
            </div>
        </Dialog>
    );
}