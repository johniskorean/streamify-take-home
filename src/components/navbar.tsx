import {
	Menu,
	FileText,
	ChartSpline,
	DollarSign,
	AudioLines,
	TvMinimalPlay,
	LucideIcon,
} from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import { useState } from 'react';
import { ModeToggle } from './ui/mode-toggle';

interface NavItem {
	label: string;
	value: string;
	icon: LucideIcon;
}

const NAV_ITEMS: NavItem[] = [
	{ label: 'Key Metrics', value: 'key-metrics', icon: FileText },
	{ label: 'User Growth', value: 'user-growth', icon: ChartSpline },
	{ label: 'Revenue', value: 'revenue', icon: DollarSign },
	{ label: 'Top Songs', value: 'top-songs', icon: AudioLines },
	{ label: 'Recent Streams', value: 'recent-streams', icon: TvMinimalPlay },
];

const Navbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleLogoClick = () => {
		const element = document.getElementById('about');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const handleNavClick = (value: string) => {
		const element = document.getElementById(value);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
		setIsOpen(false);
	};

	return (
		<nav className='fixed top-0 left-0 right-0 bg-white shadow-md dark:bg-black'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex items-center justify-between h-16'>
					<div className='flex-shrink-0'>
						<span
							className='text-2xl font-bold text-gray-800 cursor-pointer dark:text-white'
							onClick={handleLogoClick}
						>
							Streamify
						</span>
					</div>
					<div className='hidden md:block'>
						<div>
							{NAV_ITEMS.map((item) => (
								<a
									key={item.value}
									className='text-gray-600 dark:text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium cursor-pointer'
									onClick={() => handleNavClick(item.value)}
								>
									{item.label}
								</a>
							))}
						</div>
					</div>
					<ModeToggle />
					<div className='md:hidden'>
						<Sheet open={isOpen} onOpenChange={setIsOpen}>
							<SheetTrigger asChild>
								<Button size='icon' className='dark:text-white'>
									<Menu className='h-6 w-6 rounded' />
								</Button>
							</SheetTrigger>
							<SheetContent className='bg-white flex flex-col h-full p-4 dark:bg-gray-900 dark:border-black'>
								<nav className='flex flex-col space-y-4'>
									{NAV_ITEMS.map((item) => (
										<a
											key={item.value}
											className='text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium cursor-pointer dark:text-white'
											onClick={() => handleNavClick(item.value)}
										>
											<span className='flex justify-center py-2'>
												{item.label}
												<item.icon className='w-5 h-5' />
											</span>
										</a>
									))}
								</nav>
								<div className='mt-auto border-t pt-4'>
									<div className='flex justify-between space-x-4'>
										<p className='text-gray-800 font-semibold dark:text-white'>
											Hyung Noh
										</p>
										<p className='text-gray-600 text-sm dark:text-white'>
											johnhyungilnoh@gmail.com
										</p>
									</div>
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
