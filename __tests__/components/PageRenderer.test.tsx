import { render, screen } from '@testing-library/react';
import PageRenderer from '../../src/components/PageRenderer';

describe('Should render the block elements in the page', () => {

    const baseMockProps = {
        id: '5b42cc0dc973441e9c83a1970bbaf810',
        blocks: [
            {
                id: '0879f6c1d6b94be7b61d3c99543713a1',
                type: 'text' as const,
                text: 'Thanks for stopping by!',
                color: '#202020',
                align: 'center' as const,
            },
            {
                id: '9f2f25ad177843b6b7fc81811b4f090c',
                type: 'image' as const,
                src: 'https://images.unsplash.com/photo-1578986568501-a6c637652d24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
            },
            {
                id: '218fb0f6146b4728ad0b19e3b1084a16',
                type: 'button' as const,
                text: 'Visit our website!',
                color: 'white',
                bgColor: '#0076FF',
            },
        ],
    };

    test('The 3 blocks are rendered in the page', async () => {
        render(<PageRenderer page={ baseMockProps } funnelBgColor={ '#f4f4f4' } />);

        const textElement = screen.getByText('Thanks for stopping by!');
        expect(textElement).toBeInTheDocument();

        const buttonElement = document.querySelector('button');
        expect(buttonElement).toHaveTextContent('Visit our website!');

        const imageElement = document.querySelector('img');
        expect(imageElement).toHaveAttribute('alt', 'An image element');
    });

    test('The 3 blocks are rendered in the page', async () => {
        render(<PageRenderer page={ baseMockProps } funnelBgColor={ 'gold' } />);

        const wrappingDiv = document.querySelector('[data-div-identifier="page-renderer-outer-div"]');

        expect(wrappingDiv).toHaveStyle('background-color: gold;');
    });
});
