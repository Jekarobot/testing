import { luhnCheck } from '../app/luhnAlg';

describe('luhnCheck', () => {
    it('should return true for a valid card number', () => {
        expect(luhnCheck('4532015112830366')).toBe(true); // Valid Visa
    });

    it('should return false for an invalid card number', () => {
        expect(luhnCheck('4532015112830367')).toBe(false); // Invalid Visa
    });
});