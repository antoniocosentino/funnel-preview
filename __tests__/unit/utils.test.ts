import { isAllowedDomain } from '../../src/utilities/utils';

describe('isAllowedDomain', () => {
    test('Should return true for a URL in a whitelisted domain', () => {
        const url = 'https://images.unsplash.com/photo-1598182198871-d3f4ab4fd181?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80';
        const result = isAllowedDomain(url);

        expect(result).toBe(true);
    });

    test('Should return false for a URL in a non-whitelisted domain', () => {
        const url = 'https://kultmedia.com/varie/img/wat.png';
        const result = isAllowedDomain(url);

        expect(result).toBe(false);
    });

});
