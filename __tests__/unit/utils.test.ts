import { ZodError } from 'zod';
import { isAllowedDomain, parseFunnelJson } from '../../src/utilities/utils';

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


describe('parseFunnelJson', () => {
    test('Should parse the JSON if the structure is valid', () => {
        const jsonString = '{"name":"My awesome funnel","bgColor":"#F5F5F5","pages":[{"id":"b6b05e20d3a1486585bb889b3c5b6e9f","blocks":[{"id":"b5e08d664867419a85c40d333ca4a00e","type":"text","text":"Welcome!","color":"#202020","align":"center"}]}]}';
        const result = parseFunnelJson(jsonString);

        expect(result.name).toBe('My awesome funnel');
    });

    test('Should throw if the JSON is corrupted', () => {
        const jsonString = '{"name":"My awesome funnel","bgColor":"#F5F5F5","pages":[{"id":"b6b05e20d3a1486585bb889b3c5b6e9f","blocks":[}';

        expect(() => parseFunnelJson(jsonString)).toThrow(SyntaxError);
    });

    test('Should throw if the JSON is valid, but a required property is missing', () => {
        const jsonString = '{"name":"My awesome funnel","bgColor":"#F5F5F5","pages":[{"blocks":[{"id":"b5e08d664867419a85c40d333ca4a00e","type":"text","text":"Welcome!","color":"#202020","align":"center"}]}]}';

        expect(() => parseFunnelJson(jsonString)).toThrow(ZodError);
    });

    test('Should throw if the JSON is valid, but we pass an unsupported value for the align property', () => {
        const jsonString = '{"name":"My awesome funnel","bgColor":"#F5F5F5","pages":[{"id":"b6b05e20d3a1486585bb889b3c5b6e9f","blocks":[{"id":"b5e08d664867419a85c40d333ca4a00e","type":"text","text":"Welcome!","color":"#202020","align":"middle"}]}]}';

        expect(() => parseFunnelJson(jsonString)).toThrow(ZodError);
    });
});
