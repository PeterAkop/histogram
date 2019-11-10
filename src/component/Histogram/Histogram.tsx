import React, {FC, useEffect, useMemo, useState, memo} from 'react';
import {Card, CardContent, CardHeader} from "@material-ui/core";

import {convertObjectToArray, IArrayData, percentage} from './helper'
import Bar from './Bar'
import {IPet} from '../../api/transport'
import {useStyles} from './style'


interface IHistogramProps {
    pet: IPet;
}

const Histogram: FC<IHistogramProps> = (props) => {
        const {pet} = props;
        const [array, setArray] = useState<IArrayData[]>([]);
        const [title, setTitle] = useState('');

        useEffect(() => {
            setArray(convertObjectToArray(pet.data));
            setTitle(pet.title);
        }, [pet]);

        const content = useMemo(() => array.map((ar: IArrayData, index) => {
            const [larger] = array;
            return (<Bar
                barIndex={index}
                key={`${ar.name}${ar.rate}`}
                name={ar.name}
                rate={ar.rate}
                width={percentage(ar.rate, larger.rate)}
            />)
        }), [array]);

        const classes = useStyles();

        return (
            <Card className={classes.cardWrapper}>
                <CardHeader data-testid={`test-id-title`} title={title}/>
                <CardContent>
                    {content}
                </CardContent>
            </Card>

        )
    }
;


export default memo(Histogram);