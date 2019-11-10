import React from 'react';
import {render, waitForElement} from '@testing-library/react'

import Main from '../Main';


describe('Main', () => {

    it('If fetch failed, Main should not render children', async () => {
        const fakeFunc = jest.fn(() => Promise.resolve({error: 'error'}));

        const {getByTestId} = render(
            // @ts-ignore
            <Main get={fakeFunc}/>
        );

        const nameNode = await waitForElement(() => getByTestId('test-id'));
        expect(nameNode.textContent).toBe('Something goes wrong with fetching data!');
    });
});
