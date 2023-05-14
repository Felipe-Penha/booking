import '../styles/home-main.css';

function HomeMain({ children }) {
  return (
    <main className='home-main'>
      <h2 className='home-main-title'>ORDER FOR DELIVERY</h2>
      {children}
    </main>
  );
}

export default HomeMain;
