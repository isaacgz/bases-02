import { characters } from '../../src/js-foundation/02-destructuring';

describe('js-foundation/02-destructuring.ts', () => {
    test('characters should containt Flash, Superman', () => {

        expect( characters ).toContain('Flash');
        expect( characters ).toContain('Superman');
    });

    test('fisr character should be Flash, and second Superman', () => {


        const [ flash, superman ] = characters;

        console.log(characters);

        expect( flash ).toBe('Flash');
        expect( superman ).toBe('Superman');
        

    });
})
