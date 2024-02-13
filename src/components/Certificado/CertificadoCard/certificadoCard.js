import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import PropTypes from 'prop-types';

const CertificadoCard = ({ certification }) => {
    return (
        <Card sx={{ maxWidth: 345, backgroundColor: 'rgba(255, 255, 255, 0.)', borderRadius: '20px' }}>
            <CardActionArea>
                <CardMedia component="img" height="140" image={certification.img} alt={certification.source} />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {certification.source} - {certification.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

CertificadoCard.propTypes = {
    certification: PropTypes.object.isRequired
};

export default CertificadoCard;
