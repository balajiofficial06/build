import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { db } from '../utils/db'


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function EditDialog(todo) {


    // const [task, setTaks] = React.useState(todo);
    const [open, setOpen] = React.useState(false);
    const [textValue, setTextValue] = React.useState(todo.task.notes);


    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setTextValue(todo.task.notes)
        setOpen(false);
    };

    const handleSave = async (id, updatedText) => {
        await db.tasks.update(id, { notes: updatedText });
        setOpen(false);
    };

    return (
        <div className="edit-icon">
            <FontAwesomeIcon icon={faPenToSquare} onClick={handleClickOpen} />
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    {todo.task.task}
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    <textarea
                        value={textValue}
                        placeholder='Enter your notes of the task'
                        onChange={(e) => setTextValue(e.target.value)}
                        style={{ width: '370px', height: '100px', padding: '8px', fontSize: '16px' }}
                        id='textBox'
                    />

                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={() => handleSave(todo.task.id, textValue)}>
                        Save changes
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}
