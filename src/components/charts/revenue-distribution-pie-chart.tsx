import {
	PieProps,
	PieChart,
	Pie,
	Sector,
	ResponsiveContainer,
	Cell,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React, { useState } from 'react';

interface RevenueData {
	name: string;
	value: number;
}

type RenderActiveShapeProps = {
	cx: number;
	cy: number;
	midAngle: number;
	innerRadius: number;
	outerRadius: number;
	startAngle: number;
	endAngle: number;
	fill: string;
	payload: RevenueData;
	percent: number;
	value: number;
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// following the official document for `Recharts` for specific customization

const renderActiveShape = (props: RenderActiveShapeProps) => {
	const RADIAN = Math.PI / 180;

	const {
		cx = 0,
		cy = 0,
		midAngle = 0,
		innerRadius = 0,
		outerRadius = 0,
		startAngle = 0,
		endAngle = 0,
		fill = '',
		payload,
		percent = 0,
		value = 0,
	} = props;

	const sin = Math.sin(-RADIAN * midAngle);
	const cos = Math.cos(-RADIAN * midAngle);
	const sx = cx + (outerRadius + 10) * cos;
	const sy = cy + (outerRadius + 10) * sin;
	const mx = cx + (outerRadius + 30) * cos;
	const my = cy + (outerRadius + 30) * sin;
	const ex = mx + (cos >= 0 ? 1 : -1) * 22;
	const ey = my;
	const textAnchor = cos >= 0 ? 'start' : 'end';

	return (
		<g>
			<text x={cx} y={cy} dy={8} textAnchor='middle' fill={fill}>
				{payload.name}
			</text>
			<Sector
				cx={cx}
				cy={cy}
				innerRadius={innerRadius}
				outerRadius={outerRadius}
				startAngle={startAngle}
				endAngle={endAngle}
				fill={fill}
			/>
			<Sector
				cx={cx}
				cy={cy}
				startAngle={startAngle}
				endAngle={endAngle}
				innerRadius={outerRadius + 6}
				outerRadius={outerRadius + 10}
				fill={fill}
			/>
			<path
				d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
				stroke={fill}
				fill='none'
			/>
			<circle cx={ex} cy={ey} r={2} fill={fill} stroke='none' />
			<text
				x={ex + (cos >= 0 ? 1 : -1) * 12}
				y={ey}
				textAnchor={textAnchor}
				fill='#333'
			>{`$${value.toLocaleString()}`}</text>
			<text
				x={ex + (cos >= 0 ? 1 : -1) * 12}
				y={ey}
				dy={18}
				textAnchor={textAnchor}
				fill='#999'
			>
				{`(${(percent * 100).toFixed(2)}%)`}
			</text>
		</g>
	);
};

const RevenueDistributionChart: React.FC<{ data: RevenueData[] }> = ({
	data,
}) => {
	const [activeIndex, setActiveIndex] = useState(0);

	const onPieEnter = (_: PieProps, index: number) => {
		setActiveIndex(index);
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle className='dark:text-white'>
					Revenue Distribution Pie Chart
				</CardTitle>
			</CardHeader>
			<CardContent>
				<ResponsiveContainer width='100%' height={400}>
					<PieChart>
						<Pie
							activeIndex={activeIndex}
							// eslint-disable-next-line @typescript-eslint/no-explicit-any
							activeShape={renderActiveShape as any}
							data={data}
							cx='50%'
							cy='50%'
							innerRadius={60}
							outerRadius={80}
							fill='#8884d8'
							dataKey='value'
							onMouseEnter={onPieEnter}
						>
							{data.map((_, index) => (
								<Cell
									key={`cell-${index}`}
									fill={COLORS[index % COLORS.length]}
								/>
							))}
						</Pie>
					</PieChart>
				</ResponsiveContainer>
			</CardContent>
		</Card>
	);
};

export default RevenueDistributionChart;
