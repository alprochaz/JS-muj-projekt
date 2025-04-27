import { render } from '@czechitas/render';
import { Header } from '../components/Header';    // import vsech komponent, co jsme vytvorili - jinak nefunguje ❗❗❗
import { Plysaci } from '../components/Plysaci';
import { Footer } from '../components/Footer';

import '../global.css';
import './index.css';
// import { data } from './seznam.json';

// Komponenta Odkazy (sla by taky oddelit do samostatne slozky)
const Odkazy = () => {
  return (
    <ul className='seznam-odkazu'>
      <li><a href="#">Odkaz nikam 1</a></li>
      <li><a href="#">Odkaz nikam 2</a></li>
      <li><a href="#">Odkaz nikam 3</a></li>
      <li><a href="#">Odkaz nikam 4</a></li>
    </ul>
  )
}

/* ..Presunuto do "components - Plysaci - index.jsx" ❗ 
const Plysaci = () => {

  const Ctirad = () => {
    const plysakName = "Ctirad"
    const plysakImg = "https://kodim.cz/cms/assets/czechitas/js2/lekce/sablony-komponenty/cv-komponenty/plysaci/mouse.jpg"
    const plysakText = "Ctirad tráví svůj čas v blízkosti lednice a s očekáváním pozoruje její bílé dveře."

    return (
      <div class="plushy">
        <img src={plysakImg} />
        <strong>{plysakName}</strong>
        <p>{plysakText}</p>
      </div>
    )
  }

  const Silvestr = () => {
    const plysakName = "Silvestr"
    const plysakImg = "https://kodim.cz/cms/assets/czechitas/js2/lekce/sablony-komponenty/cv-komponenty/plysaci/elephant.jpg"
    const plysakText = "Silvestr rád pozoruje dění za oknem a upřímně se usmívá na všechno kolemjdoucí."

    return (
      <div>
        <img src={plysakImg} />
        <strong>{plysakName}</strong>
        <p>{plysakText}</p>
      </div>
    )
  }

  return (
    <div>
      <Ctirad />
      <Silvestr />
    </div>
  )
}

*/

// Zde je obsah stranky - vyrendruje se do divu v index.html s id="root"
document.querySelector('#root').innerHTML = render(
  <div className="container">
    {/* Header je komponenta: title a user se posilaji jako atributy do Header-index.jsx a tam se pouziji jako props.title a props.user  */}
    <Header title="Plyšáci" user="Alena Procházková" />   

    <main>
      <p>Moje parádní naklonovaná stránka.</p>
      <p>Seznam moc zajímavých odkazů:</p>
      <Odkazy />
      <h2>Vyber si plyšáka</h2> 
      {/* Komponenta Plysaci - v ni jeste dalsi komp. Plysak - stylovani je v komponente! */}
      <Plysaci />
    </main>
    <br />
    
    <Footer />
  </div>
);
