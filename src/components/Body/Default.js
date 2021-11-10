import Container from '@mui/material/Container';

import logo from '../../images/logo.png';

import './Default.css';

function Default() {
    return (
        <div className='default-page'>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <img id='logo-img' src={logo} alt="Logo" />
            </Container>
        </div>
    );
}

export default Default;