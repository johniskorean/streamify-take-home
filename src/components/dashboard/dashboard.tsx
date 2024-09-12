import useFetchData from '@/components/hooks/useFetchData';
import React from 'react';
import KeyMetrics from './key-metrics';
import UserGrowthChart from '../charts/user-growth-line-chart';
import RevenueDistributionChart from '../charts/revenue-distribution-pie-chart';
import TopSongsChart from '../charts/top-songs-bar-chart';
import RecentStreamsTable from './data-table';
import { KEY_METRICS, SECTIONS } from './constants';
import Section from './section';

interface Section {
	id: string;
	title: string;
	content: string;
}

const Dashboard: React.FC = () => {
	const { data, loading, error } = useFetchData();

	if (loading)
		return (
			<div className='flex justify-center items-center h-screen'>
				Loading...
			</div>
		);
	if (error)
		return (
			<div className='flex justify-center items-center h-screen text-red-500'>
				Error: {error.message}
			</div>
		);
	if (!data)
		return (
			<div className='flex justify-center items-center h-screen'>
				No data available
			</div>
		);

	const { userGrowth, revenue, topSongs, recentStreams, metrics } = data;

	const revenueDistribution = [
		{
			name: 'Subscriptions',
			value: revenue.reduce((sum, item) => sum + item.subscriptions, 0),
		},
		{ name: 'Ads', value: revenue.reduce((sum, item) => sum + item.ads, 0) },
	];

	const sectionContent = {
		about: (
			<p className='text-lg text-muted-foreground dark:text-white'>
				Streamify is a music streaming analysis board!
			</p>
		),
		'key-metrics': (
			<KeyMetrics
				metrics={KEY_METRICS.map((metric) => ({
					title: metric.title,
					value: metrics[metric.value as keyof typeof metrics],
					description: metric.description,
				}))}
			/>
		),
		'user-growth': <UserGrowthChart data={userGrowth} />,
		revenue: <RevenueDistributionChart data={revenueDistribution} />,
		'top-songs': <TopSongsChart data={topSongs} />,
		'recent-streams': <RecentStreamsTable data={recentStreams} />,
	};

	return (
		<div className='pt-12 dark:bg-black'>
			{SECTIONS.map((section) => (
				<Section
					key={section.id}
					id={section.id}
					title={section.title}
					fixedHeight={section.id === 'recent-streams'}
				>
					{sectionContent[section.id as keyof typeof sectionContent]}
				</Section>
			))}
		</div>
	);
};

export default Dashboard;
