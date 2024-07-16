import { luhnCheck } from './luhnAlg';
import { getPaymentSystem } from './paymentSys';
import { highlightIcon } from './domUtils';

let lastKnownPaymentSystem: string = '';

export function setupInputEventListener() {
    document.getElementById('card-number')?.addEventListener('input', function (event) {
        const target = event.target as HTMLInputElement;
        const cardNumber = target.value.replace(/\s+/g, '');

        if (/^\d+$/.test(cardNumber)) {
            const paymentSystem = getPaymentSystem(cardNumber);

            if (paymentSystem !== lastKnownPaymentSystem) {
                lastKnownPaymentSystem = paymentSystem;
                highlightIcon(paymentSystem);
            }
        }
    });
}

export function setupCheckButtonEventListener() {
    document.getElementById('check-button')?.addEventListener('click', function () {
        const cardNumber = (document.getElementById('card-number') as HTMLInputElement).value.replace(/\s+/g, '');
        const modal = document.getElementById('modal')!;
        const modalText = document.getElementById('modal-text')!;

        if (/^\d+$/.test(cardNumber) && cardNumber.length >= 13 && cardNumber.length <= 19) {
            const isValid = luhnCheck(cardNumber);
            const paymentSystem = getPaymentSystem(cardNumber);
            modalText.textContent = isValid
                ? `Карта ${paymentSystem} валидна`
                : `Карта ${paymentSystem} невалидна`;
        } else {
            modalText.textContent = 'Номер карты некорректен';
        }

        modal.style.display = 'block';
    });
}

export function setupCloseModalEventListener() {
    document.getElementById('close-modal')?.addEventListener('click', function () {
        const modal = document.getElementById('modal')!;
        modal.style.display = 'none';
    });
}

export function initializeApp() {
    setupInputEventListener();
    setupCheckButtonEventListener();
    setupCloseModalEventListener();
}

initializeApp(); // Инициализация при загрузке модуля
