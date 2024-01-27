import Header from './components/Header.jsx';
import RefLogin from './components/RefsLogin.jsx';
import Signup from './components/Signup.jsx';
import StateLogin from './components/StateLogin.jsx';


function App() {
  return (
    <>
      <Header />
      <main>
        {/* <Signup /> */}
        <StateLogin />
        {/* <RefLogin /> */}
      </main>
    </>
  );
}

export default App;
