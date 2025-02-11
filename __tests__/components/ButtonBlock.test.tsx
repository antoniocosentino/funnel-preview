import { render } from '@testing-library/react';
import ButtonBlock from '../../src/components/blockRenderers/ButtonBlock';

describe('Should render the button block with the correct properties', () => {

    const baseMockProps = {
        id: '218fb0f6146b4728ad0b19e3b1084awd',
        type: 'button' as const,
        text: 'Nice Menu!',
        color: 'white',
        bgColor: '#0076FF',
    };

    render(<ButtonBlock block={ baseMockProps } />);

    const button = document.querySelector('button');

    test('Should have the correct text', async () => {
        expect(button).toHaveTextContent('Nice Menu!');
    });

    test('Should have the correct color', async () => {
        expect(button).toHaveStyle('color: white;');
    });

    test('Should have the correct background color', async () => {
        expect(button).toHaveStyle('background-color: #0076FF;');
    });
});
