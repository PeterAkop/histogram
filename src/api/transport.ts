import axios from 'axios';

const transport = axios.create({
    baseURL: 'http://localhost:4000/',
    timeout: 1000
});

export interface IPet {
    title: string;
    data: { [key: string]: number };
    message?: string;
}

export interface IPetsRes {
    data: IPet[];
    error?: string;
}

export const getPets = (): Promise<IPetsRes> => transport.get(`/pets`);

