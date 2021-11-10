import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';

import './AppBarTitle.css';

const AppBarTitle = () => {
    return (
        <div className='appBar-title'>
            <div className='appBar-title-wrapper'>
                    DO
                <p className='icon-wrapper'>
                    <HeadphonesOutlinedIcon style={{ color: '#ECD5B0' }}/>
                    AND
                </p>
                    CHILL
            </div>
        </div>
    )
}

export default AppBarTitle;