import './App.css';

function App() {
  return (
    <>
      <header className='App-header'>
        <img
          src='https://olioex.com/wp-content/uploads/2019/08/logo_olio_white.png'
          className='App-logo'
          alt='logo'
        />
      </header>
      <div className='App'>
        <SimpleTable data={data.articles} isFetching={data.isFetching} />
        <div className='App-link-container'>
          <a
            className='App-link'
            href='https://github.com/rveruna/Olio'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub link | Veronika Rosicova
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
