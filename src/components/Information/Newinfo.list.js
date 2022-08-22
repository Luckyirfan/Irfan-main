import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  Typography
} from '@mui/material';
import { Download as DownloadIcon } from '../../icons/download';
import { Search as SearchIcon } from '../../icons/search';
import { Upload as UploadIcon } from '../../icons/upload';
import React,{useState,useEffect } from "react"

export const Newinfolist = () => {
    

    const [query, setQuery] = useState("")
    const [data, setData] = useState(
        
    )
    console.log("**********Data",data)

    // console.log("irfan")
    // useEffect(() => {
    //     const filtered = query.filter((i) => i.title.toUpperCase().includes(query.toUpperCase()))
    //     setQuery(filtered);
    //     // console.log("query",filtered)
    // },[])
    return (
        <>
        <Box>
            <Box
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    m: -1
                }}
            >
                <Typography
                    sx={{ m: 1 }}
                    variant="h4"
                >
                    Information
                </Typography>
                <Box sx={{ m: 1 }}>
                    <Button
                        startIcon={(<UploadIcon fontSize="small" />)}
                        sx={{ mr: 1 }}
                    >
                        Up
                    </Button>
                    <Button
                        startIcon={(<DownloadIcon fontSize="small" color='error' />)}
                        sx={{ mr: 1 }}
                    >
                        Down
                    </Button>
                    <Button
                        color="secondary"
                        variant="contained"
                    >
                        Add products
                    </Button>
                </Box>
            </Box>
            <Box sx={{ mt: 3 }}>
                <Card>
                    <CardContent>
                        <Box sx={{ maxWidth: 500 }}>
                                <TextField
                                    
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start"   >
                                            
                                          
                                            <SvgIcon
                                                fontSize="small"
                                                color="error"

                                                >
                                                <SearchIcon />
                                            </SvgIcon>
                                        </InputAdornment>
                                    )
                                }}
                                placeholder="Search product"
                                    variant="outlined"
                            />
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Box>
</>
    );
}
