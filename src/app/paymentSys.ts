export function getPaymentSystem(cardNumber: string): string {
    const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
    const masterCardRegex = /^(?:5[1-5][0-9]{14}|2(?!20\d)\d{14})$/;
    const amexRegex = /^3[47][0-9]{13}$/;
    const discoverRegex = /^6(?:011|5[0-9]{2})[0-9]{12}$/;
    const jcbRegex = /^(?:2131|1800|35\d{3})\d{11}$/;
    const dinersRegex = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/;
    const mirRegex = /^220[0-4][0-9]{12}$/;

    if (visaRegex.test(cardNumber)) {
        return 'Visa';
    } else if (masterCardRegex.test(cardNumber)) {
        return 'MasterCard';
    } else if (amexRegex.test(cardNumber)) {
        return 'American Express';
    } else if (discoverRegex.test(cardNumber)) {
        return 'Discover';
    } else if (jcbRegex.test(cardNumber)) {
        return 'JCB';
    } else if (dinersRegex.test(cardNumber)) {
        return 'Diners Club';
    } else if (mirRegex.test(cardNumber)) {
        return 'MIR';
    } else {
        return 'Unknown';
    }
}