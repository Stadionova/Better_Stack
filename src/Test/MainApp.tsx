import {Header} from './components/Header/Header';
import {Content} from './components/Content/Content';
import {Footer} from './components/Footer/Footer';

import cn from './MainApp.module.scss';

export const MainApp = () => {
    return (
        <div className={cn.wrapper}>
            <Header />
            <Content />
            <Footer />
        </div>
    );
};