import React from 'react';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '../ui/card';

interface Metric {
	title: string;
	value: string | number;
	description: string;
}

const KeyMetrics: React.FC<{ metrics: Metric[] }> = ({ metrics }) => {
	return (
		<div className='grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 dark:text-white'>
			{metrics.map((metric) => (
				<Card
					key={metric.title}
					className='flex flex-col h-full dark:border dark:border-white'
				>
					<CardHeader className='pb-2'>
						<CardTitle className='text-sm font-medium'>
							{metric.title}
						</CardTitle>
					</CardHeader>
					<CardContent className='flex items-center'>
						<div className='text-2xl font-bold'>{metric.value}</div>
					</CardContent>
					<CardFooter className='text-xs text-muted-foreground'>
						{metric.description}
					</CardFooter>
				</Card>
			))}
		</div>
	);
};

export default KeyMetrics;
