import React, { useState } from 'react'

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Dialog, DialogActions, DialogContent } from '@mui/material';

const MenuItems = ({items}) => {
    const theme = useTheme();
    const [openDialog, setopenDialog] = useState(false)
    const openDialogFun=()=>{
        debugger
        setopenDialog(true)
    }

    const handleClose=()=>{
        setopenDialog(false)
    }
    return (
        <>
            <div className='Cards'>
            {
                items.map((elem) => {
                    const  {id,name,image,description,Price} =elem
                        return(
                    
                            <Card sx={{ maxWidth: 345 }} key={id}>
                            <CardMedia
                              component="img"
                              alt="green iguana"
                              height="140"
                              image= {image}
                            />
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="div">
                                {name}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {description}
                              </Typography>
                            </CardContent>
                            {/* <CardActions>
                                <h2>{Price}</h2>
                                <a href="#" className="card-link">
                                <Button variant="outlined" size="medium">Order Now</Button> </a>
                            </CardActions> */}
                             <div className="card-body d-flex justify-content-between">
                                 <h2>{Price}</h2>
                                     
                                     <Button className='btn-primary1' onClick={openDialogFun} variant="outlined" size="medium">Order Now</Button>
                                        
                                 </div>
                          </Card>

                          
                          


                            // <div  className="card mt-5" style={{width: '18rem'}} key={id}>
                            //     <img className="card-img-top" src={image} alt="Card img cap"/>
                            //     <div className="card-body">
                            //         <h5 className="card-title">{name}</h5>
                            //         <p className="card-text">{description}</p>
                            //     </div>
                            //     <ul className="list-group list-group-flush">
                                
                            //     </ul>
                            //     <div className="card-body d-flex justify-content-between">
                            //         <h2>{Price}</h2>
                            //         <a href="#" className="card-link">
                            //         <button className='btn-primary'>Order Now</button></a>
                            //     </div>
                            // </div>
                            
                        )
                    
                })
            }
          
            </div>

            <Dialog
          open={openDialog}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          fullWidth 
        maxWidth="sm"
          >
             <DialogActions>
                <Button className='btn-primaryy' onClick={handleClose} autoFocus>X</Button>
              </DialogActions>
              <DialogContent>
                <div>
                <Button>Add to Cart</Button>
                <Button>Buy Now</Button>
                </div>
              </DialogContent>
              
             
          </Dialog>
           
        </>
          


    )
}

export default MenuItems
