import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
	currentPage,
	totalPages,
	onPageChange,
}) => {
	return (
		<div className='flex items-center justify-center space-x-2'>
			<Button
				variant='outline'
				size='icon'
				onClick={() => onPageChange(currentPage - 1)}
				disabled={currentPage === 1}
			>
				<ChevronLeft className='h-4 w-4' />
			</Button>
			<span className='text-sm font-medium'>
				Page {currentPage} of {totalPages}
			</span>
			<Button
				variant='outline'
				size='icon'
				onClick={() => onPageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
			>
				<ChevronRight className='h-4 w-4' />
			</Button>
		</div>
	);
};

export default Pagination;
