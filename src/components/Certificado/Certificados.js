import CertificadoCard from './CertificadoCard/certificadoCard';
import Grid from '@mui/material/Grid';

export const Certificados = () => {
    const certificados = [[], []];
    return (
        <>
            <Grid item xs={12} sx={{ mt: 10, color: 'white' }}>
                <h1>Certifications</h1>
            </Grid>
            {certificados.map((certificado) => (
                <Grid item sm={6} md={3}>
                    <CertificadoCard certificado={certificado} />
                </Grid>
            ))}
        </>
    );
};
