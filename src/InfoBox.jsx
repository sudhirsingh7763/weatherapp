import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
export default function InfoBox({info}) {

   const INIT_URL="https://getwallpapers.com/wallpaper/full/4/3/a/842545-kashmir-wallpaper-1920x1080-for-mac.jpg"
   const COLD_URL="https://2.bp.blogspot.com/-6gB6SeyK2LU/TZnAWxmz0WI/AAAAAAAAAEo/fDbT_Nurz34/s1600/30122010418.jpg";
   const HOT_URL="https://tse1.mm.bing.net/th?id=OIP.2t9NmXcklGA5J42j0rI1DAHaE2&pid=Api&P=0&h=180";
   const RAIN_URL="https://assets.cntraveller.in/photos/60ba1694002baf698cc670fc/master/pass/GettyImages-1057286714.jpg";
    
    return (
        <div className="InfoBox">
          
<div className='cardContainer'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?RAIN_URL:info.temp>15?HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{""}
          {info.humidity>80?<ThunderstormIcon/>:info.temp>15?<WbSunnyIcon />:<AcUnitIcon />}
        </Typography>
        <Typography variant="body2"  component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          <p>Max Temp = {info.tempMax}&deg;C</p>
          <p>The weather can be described as <i>{info.weather}</i>  feels like = {info.feels_like}&deg;C</p>
          
        
        </Typography>
      </CardContent>
      <CardActions>
       
      </CardActions>
    </Card>

 </div>
 </div>
    );
}