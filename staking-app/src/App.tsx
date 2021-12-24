import { useEffect } from 'react';
import { Header } from './components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Staking } from './modules';
import { Paths, StoreageKey } from './utils';
import wallet from './utils/wallet';

const App = () => {
  useEffect(() => {
    const handleReconnect = async () => {
      try {
        const walletType = localStorage.getItem(
          StoreageKey.walletType
        ) as string;

        if (!isNaN(parseInt(walletType))) {
          await wallet.setProvider(parseInt(walletType));
          await wallet.login(parseInt(walletType));
        }
      } catch (e) {
        console.log('error in re connect ', e);
      }
    };

    handleReconnect();
  }, []);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path={Paths.homepage} component={Staking} />
      </Switch>
    </Router>
  );
};

export default App;
