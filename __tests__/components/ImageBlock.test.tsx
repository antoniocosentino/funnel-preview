import { render } from '@testing-library/react';
import ImageBlock from '../../src/components/blockRenderers/ImageBlock';

describe('Should render the image block with the correct properties', () => {

    const baseMockProps = {
        id: '9f2f25ad177843b6b7fc81811b4f0456',
        type: 'image' as const,
        alt: 'Welcome image',
        src: 'https://images.unsplash.com/photo-1598182198871-d3f4ab4fd181?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80',
    };

    test('Should render the alt tag', async () => {
        render(<ImageBlock block={ baseMockProps } />);

        const image = document.querySelector('img');

        expect(image).toHaveAttribute('alt', 'Welcome image');
    });

    test('Should use the Next.js image component if image is from unsplash', async () => {
        render(<ImageBlock block={ baseMockProps } />);

        const image = document.querySelector('img');

        expect(image).toHaveAttribute('loading', 'lazy');
    });

    test('Should use a basic <img> tag if the image domain is not whitelisted', async () => {
        const mockProps = {
            ...baseMockProps,
            src: 'https://kultmedia.com/varie/img/wat.png',
        };

        render(<ImageBlock block={ mockProps } />);

        const image = document.querySelector('img');

        expect(image).not.toHaveAttribute('loading', 'lazy');
    });
});
