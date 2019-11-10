import React, {FC, useEffect, useMemo, useState} from 'react';
import {getPets, IPet, IPetsRes} from '../../api/transport'
import Histogram from '../Histogram'

interface IMainProps {
    get?: () => Promise<IPetsRes>
}

const Main: FC<IMainProps> = (props) => {
        const {get = getPets} = props;
        const [pets, setPets] = useState<IPet[]>([]);
        const [showError, setShowError] = useState(true);

        useEffect(() => {
            get()
                .then((res:IPetsRes) => {
                    if(!res.error){
                        setPets(res.data);
                        setShowError(false);
                     }
                    }
                ).catch(() => setShowError(true));
        }, [get]);

        const content = useMemo(() => pets.map((pet: IPet) => (<Histogram pet={pet}/>)), [pets]);

        return (
            <>
                {showError ? <div data-testid={'test-id'}>Something goes wrong with fetching data!</div> : content}
            </>
        )
    }
;

export default Main;