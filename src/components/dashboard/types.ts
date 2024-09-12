export interface Metrics {
	totalUsers: number;
	activeUsers: number;
	totalStreams: number;
	totalRevenue: number;
	topArtist: string;
}

export interface KeyMetric {
	title: string;
	value: string;
	description: string;
}

export interface RevenueData {
	name: string;
	value: number;
}

export interface ChartData {
	name: string;
	value: number;
}

export interface SectionConfig {
	id: string;
	title: string;
}
