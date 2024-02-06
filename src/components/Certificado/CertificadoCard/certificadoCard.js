import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CertificadoCard = ({ certificado }) => {
    return (
        <Card sx={{ maxWidth: 345, backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '20px' }}>
            <CardActionArea>
                <CardMedia component="img" height="140" image="/static/images/cards/contemplative-reptile.jpg" alt="AWS" />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        AWS Certified Cloud Developer
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default CertificadoCard;
