import React, { useMemo, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { ITEMS_PER_PAGE } from './constants';
import Pagination from '../pagination';
import { Input } from '../ui/input';

interface StreamData {
	songName: string;
	artist: string;
	dateStreamed: string;
	streamCount: number;
	userId: string;
}

const RecentStreamsTable: React.FC<{ data: StreamData[] }> = ({ data }) => {
	const [searchValue, setSearchValue] = useState('');
	const [currentPage, setCurrentPage] = useState(1);

	const filteredData = useMemo(() => {
		return data.filter(
			(stream) =>
				stream.songName.toLowerCase().includes(searchValue.toLowerCase()) ||
				stream.artist.toLowerCase().includes(searchValue.toLowerCase()) ||
				stream.userId.toLowerCase().includes(searchValue.toLowerCase())
		);
	}, [data, searchValue]);

	const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

	const paginatedData = useMemo(() => {
		const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
		return filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
	}, [filteredData, currentPage]);

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	return (
		<Card className='dark:text-white flex flex-col h-[400px] sm:h-[500px]'>
			<CardHeader>
				<CardTitle>Recent Streams Data Table</CardTitle>
			</CardHeader>
			<CardContent className='flex-grow flex flex-col p-2 sm:p-6'>
				<Input
					placeholder='Search by song name, artist, or user ID'
					value={searchValue}
					onChange={(e) => {
						setSearchValue(e.target.value);
						setCurrentPage(1);
					}}
					className='mb-4'
				/>
				<div className='flex-grow overflow-auto mb-4'>
					<div className='min-w-[640px]'>
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead className='w-1/4'>Song Name</TableHead>
									<TableHead className='w-1/5'>Artist</TableHead>
									<TableHead>Date Streamed</TableHead>
									<TableHead className='w-1/6'>Stream Count</TableHead>
									<TableHead className='w-1/6'>User ID</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody className='min-h-[200px]'>
								{paginatedData.map((stream, index) => (
									<TableRow key={index}>
										<TableCell>{stream.songName}</TableCell>
										<TableCell>{stream.artist}</TableCell>
										<TableCell>
											{new Date(stream.dateStreamed).toLocaleString()}
										</TableCell>
										<TableCell>{stream.streamCount}</TableCell>
										<TableCell>{stream.userId}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</div>
				</div>
				<div className='mt-auto'>
					<Pagination
						currentPage={currentPage}
						totalPages={totalPages}
						onPageChange={handlePageChange}
					/>
				</div>
			</CardContent>
		</Card>
	);
};

export default RecentStreamsTable;
