import React, {FC, memo} from 'react';

import {useStyles} from './style'
import {IArrayData} from './helper'

interface IGraphProps extends IArrayData {
    width: number;
    name: string;
    rate: number;
    barIndex: number
}

const Bar: FC<IGraphProps> = (props) => {
        const {name, rate, width, barIndex} = props;

        const classes = useStyles({width: width, backgroundColor: barIndex});

        return (
            <div className={classes.barWrapper}>
                <span data-testid={`test-id-${barIndex}`} className={classes.label}>{name}</span>
                <span className={classes.label}>{rate}</span>
                <div className={classes.bar}/>
            </div>
        )
    }
;

export default memo(Bar);