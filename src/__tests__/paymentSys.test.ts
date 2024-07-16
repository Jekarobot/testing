import { getPaymentSystem } from '../app/paymentSys';

describe('getPaymentSystem', () => {
    it('should return Visa for a Visa card number', () => {
        expect(getPaymentSystem('4532015112830366')).toBe('Visa');
    });

    it('should return MasterCard for a MasterCard card number', () => {
        expect(getPaymentSystem('5500000000000004')).toBe('MasterCard');
    });

    it('should return American Express for an American Express card number', () => {
        expect(getPaymentSystem('340000000000009')).toBe('American Express');
    });

    it('should return Discover for a Discover card number', () => {
        expect(getPaymentSystem('6011000000000004')).toBe('Discover');
    });

    it('should return JCB for a JCB card number', () => {
        expect(getPaymentSystem('3530111333300000')).toBe('JCB');
    });

    it('should return Diners Club for a Diners Club card number', () => {
        expect(getPaymentSystem('30000000000004')).toBe('Diners Club');
    });

    it('should return MIR for a MIR card number', () => {
        expect(getPaymentSystem('2200112233445566')).toBe('MIR');
    });

    it('should return Unknown for an unknown card number', () => {
        expect(getPaymentSystem('1234567890123456')).toBe('Unknown');
    });
});