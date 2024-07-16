import { highlightIcon } from '../app/domUtils';

describe('highlightIcon', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <div id="visaIcon" class="icon"></div>
            <div id="masterCardIcon" class="icon"></div>
            <div id="amexIcon" class="icon"></div>
            <div id="discoverIcon" class="icon"></div>
            <div id="jcbIcon" class="icon"></div>
            <div id="dinersIcon" class="icon"></div>
            <div id="mirIcon" class="icon"></div>
        `;
    });

    it('should highlight the Visa icon', () => {
        highlightIcon('Visa');
        expect(document.getElementById('visaIcon')!.classList.contains('active')).toBe(true);
    });

    it('should highlight the MasterCard icon', () => {
        highlightIcon('MasterCard');
        expect(document.getElementById('masterCardIcon')!.classList.contains('active')).toBe(true);
    });

    it('should highlight the American Express icon', () => {
        highlightIcon('American Express');
        expect(document.getElementById('amexIcon')!.classList.contains('active')).toBe(true);
    });

    it('should highlight the Discover icon', () => {
        highlightIcon('Discover');
        expect(document.getElementById('discoverIcon')!.classList.contains('active')).toBe(true);
    });

    it('should highlight the JCB icon', () => {
        highlightIcon('JCB');
        expect(document.getElementById('jcbIcon')!.classList.contains('active')).toBe(true);
    });

    it('should highlight the Diners Club icon', () => {
        highlightIcon('Diners Club');
        expect(document.getElementById('dinersIcon')!.classList.contains('active')).toBe(true);
    });

    it('should highlight the MIR icon', () => {
        highlightIcon('MIR');
        expect(document.getElementById('mirIcon')!.classList.contains('active')).toBe(true);
    });

    it('should not highlight any icon for an unknown payment system', () => {
        highlightIcon('Unknown');
        const icons = document.querySelectorAll('.icon');
        icons.forEach(icon => {
            expect(icon.classList.contains('active')).toBe(false);
        });
    });
});