import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';

interface SongData {
	name: string;
	streams: number;
}

const TopSongsChart: React.FC<{ data: SongData[] }> = ({ data }) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle className='dark:text-white'>Top 5 Streamed Songs</CardTitle>
			</CardHeader>
			<CardContent>
				<ResponsiveContainer width='100%' height={300}>
					<BarChart data={data}>
						<CartesianGrid strokeDasharray='3 3' />
						<XAxis dataKey='name' />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey='streams' fill='#8884d8' />
					</BarChart>
				</ResponsiveContainer>
			</CardContent>
		</Card>
	);
};

export default TopSongsChart;
