import {WallMineIcon} from './WallMineIcon';
import {Navigation} from './Navigation';
import {Button} from '../Button/Button';

import cn from './Header.module.scss';

export const Header = () => {
    return (
        <div className={cn.header}>
            <WallMineIcon />
            <div className={cn.verticalBorder}></div>
            <Navigation />
            <Button />
        </div>
    );
};