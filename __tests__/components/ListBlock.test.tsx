import { render, screen } from '@testing-library/react';
import ListBlock from '../../src/components/blockRenderers/ListBlock';

describe('Should render the list block with the correct properties', () => {

    const baseMockProps = {
        id: '6dc5ca19c11d4314bba0905de6c9dc07',
        type: 'list' as const,
        items: [
            {
                id: '7dc5ca19c11d4314bba0905de6c9dc08',
                title: 'Drinks',
                description: 'Tshhh... Ahhhhh!',
                src: 'https://img.icons8.com/0076FF/win10/247/kawaii-soda',
            },
            {
                id: '8dc5ca19c11d4314bba0905de6c9dc09',
                title: 'Icecream',
                description: 'Cool down ...',
                src: 'https://img.icons8.com/0076FF/win10/247/kawaii-cupcake',
            },
            {
                id: '9dc5ca19c11d4314bba0905de6c9dc10',
                title: 'Taccos',
                description: '... to heat up',
                src: 'https://img.icons8.com/0076FF/win10/247/kawaii-taco',
            },
        ],
    };

    test('All the elements should be rendered', async () => {
        render(<ListBlock block={ baseMockProps } />);

        const element1 = screen.getByText('Drinks');
        const element2 = screen.getByText('Icecream');
        const element3 = screen.getByText('Taccos');

        expect(element1).toBeInTheDocument();
        expect(element2).toBeInTheDocument();
        expect(element3).toBeInTheDocument();

    });

    test('All the images should be rendered', async () => {
        render(<ListBlock block={ baseMockProps } />);

        const images = screen.getAllByRole('img');

        expect(images.length).toBe(3);

        expect(images[0]).toHaveAttribute('alt', 'Drinks');
        expect(images[1]).toHaveAttribute('alt', 'Icecream');
        expect(images[2]).toHaveAttribute('alt', 'Taccos');
    });

    test('When using non-whitelisted domain, images should be rendered with the basic <img> tag', async () => {
        const mockProps = {
            ...baseMockProps,
            items: [
                {
                    ...baseMockProps.items[0],
                    src: 'https://kultmedia.com/varie/img/wat.png',
                },
                {
                    ...baseMockProps.items[1],
                    src: 'https://kultmedia.com/varie/img/ok.png',
                },
                {
                    ...baseMockProps.items[2],
                    src: 'https://kultmedia.com/varie/img/pickle_rick_emoji.png',
                },
            ],
        };

        render(<ListBlock block={ mockProps } />);

        const images = screen.getAllByRole('img');

        expect(images.length).toBe(3);

        expect(images[0]).toHaveAttribute('src', 'https://kultmedia.com/varie/img/wat.png');
        expect(images[1]).toHaveAttribute('src', 'https://kultmedia.com/varie/img/ok.png');
        expect(images[2]).toHaveAttribute('src', 'https://kultmedia.com/varie/img/pickle_rick_emoji.png');
    });
});
