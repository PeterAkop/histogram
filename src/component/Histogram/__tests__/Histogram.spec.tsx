import React from 'react';
import {render, waitForElement} from '@testing-library/react'

import Histogram from '../Histogram';
import {convertObjectToArray, percentage} from '../helper'


describe('Histogram', () => {

    const mockData = {
        title: 'testTitle',
        data: {
            'pet1': 10,
            'pet2': 15
        }
    };

    it('children should be generated according to given data', async () => {

        const {getByTestId} = render(
            <Histogram pet={mockData}/>
        );

        const titleNode = await waitForElement(() => getByTestId('test-id-title'));
        expect(titleNode.textContent).toBe(mockData.title);

        const pet1Node = await waitForElement(() => getByTestId('test-id-0'));
        expect(pet1Node.textContent).toBe('pet2');

        const pet2Node = await waitForElement(() => getByTestId('test-id-1'));
        expect(pet2Node.textContent).toBe('pet1');
    });

    it('convertObjectToArray', async () => {
        expect(convertObjectToArray(mockData.data)).toMatchObject([{name: 'pet2', rate: 15}, {name: 'pet1', rate: 10}]);
    });

    it('percentage', async () => {
        expect(percentage(10, 90)).toBe(11);
    });

});
