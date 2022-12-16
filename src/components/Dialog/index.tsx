import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface AlertDialogProps extends React.PropsWithChildren {
  onConfirm: () => void;
  actionTitle: string;
  disabled?: boolean;
}

const UIDialog = (props: AlertDialogProps) => {
  const {children, onConfirm, actionTitle, disabled} = props;

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    setOpen(false);

    onConfirm();
  };

  return (
    <div>
      <Button disabled={disabled} variant="contained" onClick={handleOpen}>
        {actionTitle}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Подтвердите действие</DialogTitle>
        <DialogContent>
          <DialogContentText>{children}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose()}>Отклонить</Button>
          <Button variant="contained" onClick={handleConfirm} autoFocus>
            Применить
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UIDialog;
