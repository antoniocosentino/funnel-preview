import { render } from '@testing-library/react';
import TextBlock from '../../src/components/blockRenderers/TextBlock';

test('Should render the text block with the correct alignment', async () => {
    const mockProps = {
        id: 'b5e08d664867419a85c40d333ca4a00e',
        type: 'text' as const,
        text: 'Welcome!',
        color: '#202020',
        align: 'center' as const,
    };

    render(<TextBlock block={ mockProps } />);

    const firstSpan = document.querySelector('span');
    expect(firstSpan).toHaveTextContent('Welcome!');

});
