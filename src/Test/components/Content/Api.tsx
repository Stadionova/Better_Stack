import {VerticalLine} from './VerticalLine';
import React from 'react';

export const Api = ({title}: {title: string}) => {
    const apiLinesCount = 69;
    const apiLinesList: Array<React.ReactNode> = [];
    const makeApiLines = () => {
        for (let i = 0; i <= apiLinesCount; i++) {
            apiLinesList.push(<VerticalLine />);
        }
        return apiLinesList;
    };
    return (
        <>
            <div>{title}</div>
            <div style={{display: 'flex'}}>{makeApiLines()}</div>
        </>
    );
};