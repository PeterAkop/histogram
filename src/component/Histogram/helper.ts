import * as _ from 'lodash';


export interface IArrayData {
    name: string;
    rate: number;
}

export const convertObjectToArray = (meta: { [key: string]: number }): IArrayData[] => {
    const array = _.map(meta, (value, objKey) => ({name: [objKey].toString(), rate: value}));
    return _.orderBy(array, ['rate'], ['desc']);
};


export const percentage = (partialValue: number, totalValue: number) => Math.floor(100 * partialValue / totalValue);
