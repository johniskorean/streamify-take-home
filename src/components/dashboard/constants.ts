import { KeyMetric, SectionConfig } from './types';

export const KEY_METRICS: KeyMetric[] = [
	{
		title: 'Total Users',
		value: 'totalUsers',
		description: 'Total number of registered users on the platform',
	},
	{
		title: 'Active Users',
		value: 'activeUsers',
		description:
			'The number of users who have streamed at least one song in the last 30 days',
	},
	{
		title: 'Total Streams',
		value: 'totalStreams',
		description: 'The total number of song streams on the platform',
	},
	{
		title: 'Total Revenue',
		value: 'totalRevenue',
		description:
			'The total revenue generated from subscriptions and advertisements',
	},
	{
		title: 'Top Artist',
		value: 'topArtist',
		description: 'The artist withh the most streams in the past 30 days',
	},
];

export const SECTIONS: SectionConfig[] = [
	{ id: 'about', title: 'About Streamify' },
	{ id: 'key-metrics', title: 'Key Metrics' },
	{ id: 'user-growth', title: 'User Growth' },
	{ id: 'revenue', title: 'Revenue Distribution' },
	{ id: 'top-songs', title: 'Top 5 Streamed Songs' },
	{ id: 'recent-streams', title: 'Recent Streams' },
];

export const ITEMS_PER_PAGE = 5;
