import { cn } from '@/lib/utils';

interface SectionProps {
	id: string;
	title: string;
	children: React.ReactNode;
	fixedHeight?: boolean;
}

const Section: React.FC<SectionProps> = ({
	id,
	title,
	children,
	fixedHeight = false,
}) => (
	<section
		id={id}
		className='flex flex-col items-center justify-center p-6 min-h-screen'
	>
		<div
			className={cn(
				'max-w-7xl w-full mx-auto bg-card rounded-lg shadow-lg p-8 dark:border-white dark:border',
				fixedHeight && 'flex flex-col'
			)}
		>
			<h2 className='text-3xl font-bold mb-4 text-foreground dark:text-white'>
				{title}
			</h2>
			<div className={cn(fixedHeight && 'flex-grow overflow-hidden')}>
				{children}
			</div>
		</div>
	</section>
);

export default Section;
