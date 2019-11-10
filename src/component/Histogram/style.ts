import {makeStyles} from '@material-ui/core/styles';


const colors = ['#ff8000', ' #ff9933', '#ffb366', '#ffbf80', '#ffd9b3'];
// @ts-ignore
export const useStyles = makeStyles({
    cardWrapper: {
        padding: '10px 10px 10px 10px'
    },
    barWrapper: {
        display: 'grid',
        gridTemplateColumns: `30% 5% 65%`,
    },
    bar: {
        // @ts-ignore
        width: props => `${props.width}%`,
        // @ts-ignore
        backgroundColor: props => `${colors[props.backgroundColor] ? colors[props.backgroundColor] : colors[4]}`,
        height: 20,
        marginBottom: 15,
        borderRadius: 5
    }
});
