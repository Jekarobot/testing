import '@testing-library/jest-dom';
import { fireEvent, getByTestId } from '@testing-library/dom';
import { luhnCheck } from '../app/luhnAlg';
import { getPaymentSystem } from '../app/paymentSys';
import { highlightIcon } from '../app/domUtils';
import {
    setupInputEventListener,
    setupCheckButtonEventListener,
    setupCloseModalEventListener,
} from '../app/app';

jest.mock('../app/luhnAlg', () => ({
    luhnCheck: jest.fn(),
}));

jest.mock('../app/paymentSys', () => ({
    getPaymentSystem: jest.fn(),
}));

jest.mock('../app/domUtils', () => ({
    highlightIcon: jest.fn(),
}));

describe('app', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <div class="container" data-testid="container">
                <input id="card-number" data-testid="card-number" />
                <button id="check-button" data-testid="check-button">Check</button>
                <div id="modal" style="display:none;" data-testid="modal">
                    <p id="modal-text" data-testid="modal-text"></p>
                    <button id="close-modal" data-testid="close-modal">Close</button>
                </div>
                <div id="visaIcon" class="icon" data-testid="visa-icon"></div>
                <div id="masterCardIcon" class="icon" data-testid="mastercard-icon"></div>
                <div id="amexIcon" class="icon" data-testid="amex-icon"></div>
                <div id="discoverIcon" class="icon" data-testid="discover-icon"></div>
                <div id="jcbIcon" class="icon" data-testid="jcb-icon"></div>
                <div id="dinersIcon" class="icon" data-testid="diners-icon"></div>
                <div id="mirIcon" class="icon" data-testid="mir-icon"></div>
            </div>
        `;

        (getPaymentSystem as jest.Mock).mockReturnValue('Visa');
        (luhnCheck as jest.Mock).mockReturnValue(true);

        setupInputEventListener();
        setupCheckButtonEventListener();
        setupCloseModalEventListener();
    });

    it('should highlight the correct icon on input', () => {
        const input = getByTestId(document.body, 'card-number') as HTMLInputElement;
        fireEvent.input(input, { target: { value: '4532015112830366' } });

        expect(highlightIcon).toHaveBeenCalledWith('Visa');
    });

    it('should show a valid card message in the modal', () => {
        const input = getByTestId(document.body, 'card-number') as HTMLInputElement;
        const button = getByTestId(document.body, 'check-button') as HTMLButtonElement;

        fireEvent.input(input, { target: { value: '4532015112830366' } });
        fireEvent.click(button);

        const modalText = getByTestId(document.body, 'modal-text') as HTMLElement;

        expect(modalText).toHaveTextContent('Карта Visa валидна');
        expect(getByTestId(document.body, 'modal')).toHaveStyle('display: block');
    });

    it('should show an invalid card message in the modal', () => {
        (luhnCheck as jest.Mock).mockReturnValue(false);

        const input = getByTestId(document.body, 'card-number') as HTMLInputElement;
        const button = getByTestId(document.body, 'check-button') as HTMLButtonElement;

        fireEvent.input(input, { target: { value: '4532015112830366' } });
        fireEvent.click(button);

        const modalText = getByTestId(document.body, 'modal-text') as HTMLElement;
        expect(modalText).toHaveTextContent('Карта Visa невалидна');
        expect(getByTestId(document.body, 'modal')).toHaveStyle('display: block');
    });

    it('should close the modal on close button click', () => {
        const closeButton = getByTestId(document.body, 'close-modal') as HTMLButtonElement;
        const modal = getByTestId(document.body, 'modal') as HTMLElement;

        modal.style.display = 'block';
        fireEvent.click(closeButton);

        expect(modal).toHaveStyle('display: none');
    });
});
