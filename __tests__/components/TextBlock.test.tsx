import { render } from '@testing-library/react';
import TextBlock from '../../src/components/blockRenderers/TextBlock';

describe('Should render the text block with the correct properties', () => {

    const baseMockProps = {
        id: 'b5e08d664867419a85c40d333ca4a00e',
        type: 'text' as const,
        text: 'Welcome!',
        color: '#202020',
        align: 'center' as const,
    };

    test('Text align: center', async () => {
        render(<TextBlock block={ baseMockProps } />);

        const textSpan = document.querySelector('span');
        const wrapperDiv = textSpan?.parentElement;

        expect(textSpan).toHaveTextContent('Welcome!');
        expect(wrapperDiv).toHaveClass('text-center');
    });

    test('Text align: left', async () => {
        const mockProps = {
            ...baseMockProps,
            text: 'Left aligned text',
            align: 'left' as const,
        };

        render(<TextBlock block={ mockProps } />);

        const textSpan = document.querySelector('span');
        const wrapperDiv = textSpan?.parentElement;

        expect(textSpan).toHaveTextContent('Left aligned text');
        expect(wrapperDiv).toHaveClass('text-left');
    });

    test('Color: gold', async () => {
        const mockProps = {
            ...baseMockProps,
            text: 'This text is gold',
            color: 'gold',
        };

        render(<TextBlock block={ mockProps } />);

        const textSpan = document.querySelector('span');

        expect(textSpan).toHaveTextContent('This text is gold');
        expect(textSpan).toHaveStyle('color: gold;');
    });
});
