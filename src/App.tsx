import Dashboard from './components/dashboard/dashboard';
import { ThemeProvider } from './components/context/theme-provider';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
	return (
		<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
			<Navbar />
			<Dashboard />
			<Footer />
		</ThemeProvider>
	);
}

export default App;
