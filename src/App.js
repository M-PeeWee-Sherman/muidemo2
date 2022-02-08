import logo from './logo.svg';
import './App.css';
import { Card, CardMedia } from '@mui/material';
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
  const classes = useStyles();
  return (
    <div className="App">
       {posts.map((post, index) => (
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
