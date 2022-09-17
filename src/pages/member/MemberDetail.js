import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, FormControl, InputAdornment, OutlinedInput, Stack, Select, MenuItem, InputLabel, Typography, Avatar } from '@mui/material';
import { PhoneOutlined, IdcardOutlined } from '@ant-design/icons';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { CloseOutlined } from '@ant-design/icons';

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);
    const [isNew, setIsNew] = React.useState(true);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Thông tin
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>
                    {/* <Tooltip title="Đóng">
                        <IconButton color="error" aria-label="DeleteItem" component="label">
                            <CloseOutlined />
                        </IconButton>
                    </Tooltip> */}
                    <Typography variant="h3">Sign up</Typography>
                </DialogTitle>
                <DialogContent>
                    <Grid xs={12} md={12} container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Stack spacing={1}>
                                <InputLabel htmlFor="lastname-signup">Last Name*</InputLabel>
                                <OutlinedInput
                                    size="medium"
                                    id="IdCard"
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <IdcardOutlined />
                                        </InputAdornment>
                                    }
                                    aria-describedby="header-search-text"
                                    inputProps={{
                                        'aria-label': 'weight'
                                    }}
                                    placeholder="Số CCCD/ CMND"
                                />
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Stack spacing={1}>
                                <InputLabel htmlFor="lastname-signup">Last Name*</InputLabel>
                                <OutlinedInput
                                    size="medium"
                                    id="Phone"
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <PhoneOutlined />
                                        </InputAdornment>
                                    }
                                    aria-describedby="header-search-text"
                                    inputProps={{
                                        'aria-label': 'weight'
                                    }}
                                    placeholder="SDT"
                                />
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Stack spacing={1}>
                                <InputLabel htmlFor="lastname-signup">Last Name*</InputLabel>
                                <OutlinedInput
                                    size="medium"
                                    id="Phone"
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <PhoneOutlined />
                                        </InputAdornment>
                                    }
                                    aria-describedby="header-search-text"
                                    inputProps={{
                                        'aria-label': 'weight'
                                    }}
                                    placeholder="Full name"
                                />
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Stack spacing={1}>
                                <InputLabel htmlFor="lastname-signup">Last Name*</InputLabel>
                                <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Age">
                                    <MenuItem value={10}>Nam</MenuItem>
                                    <MenuItem value={20}>Nữ</MenuItem>
                                </Select>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Stack spacing={1}>
                                <InputLabel htmlFor="lastname-signup">Last Name*</InputLabel>
                                <OutlinedInput
                                    size="medium"
                                    id="IdCard"
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <IdcardOutlined />
                                        </InputAdornment>
                                    }
                                    aria-describedby="header-search-text"
                                    inputProps={{
                                        'aria-label': 'weight'
                                    }}
                                    placeholder="cap bac"
                                />
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Stack spacing={1}>
                                <InputLabel htmlFor="lastname-signup">Last Name*</InputLabel>
                                <OutlinedInput
                                    size="medium"
                                    id="IdCard"
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <IdcardOutlined />
                                        </InputAdornment>
                                    }
                                    aria-describedby="header-search-text"
                                    inputProps={{
                                        'aria-label': 'weight'
                                    }}
                                    placeholder="ddia chgiu"
                                />
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Stack spacing={1}>
                                <input type="file" />
                            </Stack>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Box sx={{ mx: 'auto' }}>
                        <Button variant="contained" color="primary" sx={{ m: 1 }} onClick={handleClose}>
                            Lưu
                        </Button>
                        <Button variant="contained" sx={{ m: 1 }} onClick={handleClose}>
                            Hủy
                        </Button>
                    </Box>
                </DialogActions>
            </Dialog>
        </div>
    );
}
