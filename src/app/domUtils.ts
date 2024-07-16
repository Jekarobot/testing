export function highlightIcon(paymentSystem: string) {
    const icons = document.querySelectorAll('.icon');
    icons.forEach(icon => {
        icon.classList.remove('active');
    });

    switch (paymentSystem) {
        case 'Visa':
            document.getElementById('visaIcon')?.classList.add('active');
            break;
        case 'MasterCard':
            document.getElementById('masterCardIcon')?.classList.add('active');
            break;
        case 'American Express':
            document.getElementById('amexIcon')?.classList.add('active');
            break;
        case 'Discover':
            document.getElementById('discoverIcon')?.classList.add('active');
            break;
        case 'JCB':
            document.getElementById('jcbIcon')?.classList.add('active');
            break;
        case 'Diners Club':
            document.getElementById('dinersIcon')?.classList.add('active');
            break;
        case 'MIR':
            document.getElementById('mirIcon')?.classList.add('active');
            break;
        default:
            break;
    }
}
