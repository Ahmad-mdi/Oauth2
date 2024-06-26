import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from "@mui/icons-material/Close";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius:4
};

export default function BasicModal({title,fragment}:any) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div >
            <Button variant={'contained'}  onClick={handleOpen} >ایجاد</Button>
            <Modal
                dir={'rtl'}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <CloseIcon onClick={handleClose} className={'absolute left-2 top-2'}/>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {title}
                    </Typography>
                    <Box>
                        {fragment}
                    </Box>
                    <div className={'flex items-center m-3'}>
                    <Button variant={"contained"}>ثبت</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
