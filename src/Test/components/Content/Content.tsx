import {Api} from './Api';

export const Content = () => {
    return (
        <div style={{marginTop: '25px', marginBottom: '32px'}}>
            <Api title='API' />
            <div style={{marginTop: '40px'}}><Api title='Dashboard' /></div>
        </div>
    );
};