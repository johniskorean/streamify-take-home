import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import {
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';

interface UserGrowthData {
	date: string;
	totalUsers: number;
	activeUsers: number;
}

const UserGrowthChart: React.FC<{ data: UserGrowthData[] }> = ({ data }) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle className='dark:text-white'>
					User Growth Line Chart
				</CardTitle>
			</CardHeader>
			<CardContent>
				<ResponsiveContainer width='100%' height={300}>
					<LineChart
						data={data}
						margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
					>
						<CartesianGrid strokeDasharray='5 5' />
						<XAxis dataKey='date' />
						<YAxis />
						<Legend />
						<Line
							type='monotone'
							dataKey='totalUsers'
							stroke='#8884d8'
							name='Total Users'
						/>
						<Line
							type='monotone'
							dataKey='activeUsers'
							stroke='#82ca9d'
							name='Active Users'
						/>
						<Tooltip />
					</LineChart>
				</ResponsiveContainer>
			</CardContent>
		</Card>
	);
};

export default UserGrowthChart;
