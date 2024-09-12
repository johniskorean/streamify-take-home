import { Metrics } from '@/components/dashboard/types';
import { RecentStream, Revenue, TopSong, UserGrowth } from './types';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface DashboardData {
	userGrowth: UserGrowth[];
	revenue: Revenue[];
	topSongs: TopSong[];
	recentStreams: RecentStream[];
	metrics: Metrics;
}

const BASE_API_URL = 'http://localhost:3000';

const useFetchData = () => {
	const [data, setData] = useState<DashboardData | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		const fetch = async () => {
			try {
				const [
					userGrowthRes,
					revenueRes,
					topSongsRes,
					recentStreamsRes,
					metricRes,
				] = await Promise.all([
					axios.get<UserGrowth[]>(`${BASE_API_URL}/userGrowth`),
					axios.get<Revenue[]>(`${BASE_API_URL}/revenue`),
					axios.get<TopSong[]>(`${BASE_API_URL}/topSongs`),
					axios.get<RecentStream[]>(`${BASE_API_URL}/recentStreams`),
					axios.get<Metrics>(`${BASE_API_URL}/metrics`),
				]);
				setData({
					userGrowth: userGrowthRes.data,
					revenue: revenueRes.data,
					topSongs: topSongsRes.data,
					recentStreams: recentStreamsRes.data,
					metrics: metricRes.data,
				});
				setError(null);
			} catch (err) {
				const error = axios.isAxiosError(err)
					? err.message
					: 'An error occurred while fetching data';
				setError(new Error(error));
			} finally {
				setLoading(false);
			}
		};
		fetch();
	}, []);
	return { data, loading, error };
};

export default useFetchData;
