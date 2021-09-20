const defaultLocales = 'en';

describe('Number.toLocaleString polyfill', () => {
    it('should respect `minimumFractionDigits` option', ()=>{
        const withoutFraction = 42;
        const withFraction = 42.1;

        expect(withoutFraction.toLocaleString(defaultLocales, {minimumFractionDigits: 1})).toEqual('42.0')

        expect(withFraction.toLocaleString(defaultLocales, {minimumFractionDigits: 2})).toEqual('42.10')

        expect(withFraction.toLocaleString(defaultLocales,)).toEqual('42.1')
    })
});
