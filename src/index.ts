import './styles.css';
import visaImg from './images/visa.png';
import mastercardImg from './images/mastercard.png';
import amexImg from './images/amex.png';
import discoverImg from './images/discover.png';
import jcbImg from './images/jcb.png';
import dinersImg from './images/diners.png';
import mirImg from './images/mir.png';

document.addEventListener('DOMContentLoaded', () => {
  (document.getElementById('visaIcon') as HTMLImageElement).src = visaImg;
  (document.getElementById('masterCardIcon') as HTMLImageElement).src = mastercardImg;
  (document.getElementById('amexIcon') as HTMLImageElement).src = amexImg;
  (document.getElementById('discoverIcon') as HTMLImageElement).src = discoverImg;
  (document.getElementById('jcbIcon') as HTMLImageElement).src = jcbImg;
  (document.getElementById('dinersIcon') as HTMLImageElement).src = dinersImg;
  (document.getElementById('mirIcon') as HTMLImageElement).src = mirImg;
});

import './app/app';
