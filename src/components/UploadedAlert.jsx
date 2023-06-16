import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";

export default function UploadAlert({ uploaded }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(uploaded);
  }, [uploaded]);

  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      {uploaded ? (
        <Collapse in={open}>
          <Alert
            severity="success"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            File successfully uploaded!
          </Alert>
        </Collapse>
      ) : (
        <Collapse in={open}>
          <Alert
            severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            File failed to upload
          </Alert>
        </Collapse>
      )}
    </Stack>
  );
}
