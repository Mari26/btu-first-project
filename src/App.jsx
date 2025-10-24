
import './App.css'

// import ThemeProvider from './contexts/ThemeContext';

// import ThemeTogglerButton from './lesson-15/ThemeTogglerButton';
// import ContentDisplay from './lesson-15/ContentDisplay';
import { CartProvider } from './context/CartContext';
import Header from './lesson-15/Header';
import ProductList from './lesson-15/ProductList';
import Cart from './lesson-15/Cart';
 
import { useAuth } from './context/AuthContext';
import Login from './lesson-15/Login';
import Welcome from './lesson-15/Welcome';

import { useNotification } from './context/NotificationContext';
import NotificationContainer from './lesson-15/NotificationContainer';


function App() {
const { user } = useAuth();

const { addNotification } = useNotification();

  const showSuccess = () => {
    addNotification({
      type: 'success',
      message: 'ოპერაცია წარმატებით დასრულდა!'
    });
  };

  const showError = () => {
    addNotification({
      type: 'error',
      message: 'დაფიქსირდა შეცდომა.'
    });
  };

  const showInfo = () => {
    addNotification({
      type: 'info',
      message: 'ეს არის საინფორმაციო შეტყობინება.'
    });
  };
  return (
<div>

<CartProvider>
      <div className="App">
        {user ? <Welcome /> : <Login />}
        <Header />
        <main>
          <ProductList />
          <hr />
          <Cart /> 
        </main>
        <div className="App" style={{ padding: '20px' }}>
      
      <NotificationContainer />

      <h1>შეტყობინებების სისტემა</h1>
      <button onClick={showSuccess} style={{ background: '#4CAF50', color: 'white', marginRight: '10px' }}>
        აჩვენე Success
      </button>
      <button onClick={showError} style={{ background: '#f44336', color: 'white', marginRight: '10px' }}>
        აჩვენე Error
      </button>
      <button onClick={showInfo} style={{ background: '#2196F3', color: 'white' }}>
        აჩვენე Info
      </button>
    </div>
      </div>
    </CartProvider>




{/* <ThemeProvider>
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>React თემის გადამრთველი (Context API)</h1>
        <p>დააჭირე ღილაკს თემის შესაცვლელად.</p>
        <br />
        <ThemeTogglerButton />
        <ContentDisplay />
      </div>
    </ThemeProvider> */}
</div>
  
  
  )
}

export default App
