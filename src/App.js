import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, CardMedia, TextField,Button } from '@mui/material';
import {makeStyles} from '@mui/styles';



const useStyles = makeStyles({
  card: {
    maxWidth: 600,
    padding: 10,
    margin: 10
  }
})

function App({UserData}) {
  
  const {username, imageurl, posts}=UserData;
  const [fullPosts, setFullPosts] = useState(posts);
  const [curPost, setCurPost] = useState("");
  const classes = useStyles();
  return (
    <div className="App">
       <TextField 
         id="newpost" 
         label="New Post" 
         variant="outlined" 
         onInput={ e=>setCurPost(e.target.value)}/>
       <Button 
         variant="contained"
         onClick={(e)=>{
          e.preventDefault();
          setFullPosts(fullPosts.concat([curPost]));
         }}
         >Submit</Button>  
       {fullPosts.map((post, index) => (
       <Card 
         className={classes.card}
         variant='outlined' 
         key={index}>
           <CardMedia
             component='img'
             image={imageurl}
             alt={username}/>
           {username}: {post}
        </Card>))}
    </div>
  );
}

export default App;
