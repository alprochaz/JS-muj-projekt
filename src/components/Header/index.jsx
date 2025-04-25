import './index.css';

export const Header = (props) => {
    return (
      <header>
        <h1>{props.title}</h1>
        <div className='container-menu'>
          <a href="/">Domů</a>
          <a href="/nakupy">Nákupy</a>
          <a href="/kalendar">Kalendář</a>
        </div>
        <p className='user'>Přihlášený uživatel: {props.user}</p>
      </header>
    );
};