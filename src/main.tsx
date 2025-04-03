
// This file is a bridge to support web & native environments
import App from './App';
import { registerRootComponent } from 'expo';

// For web environment
export default App;

// For native environment with Expo
if (typeof registerRootComponent === 'function') {
  registerRootComponent(App);
}
