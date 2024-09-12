import React from 'react';

const Footer = () => {
	return (
		<footer className='bg-gray-100 dark:bg-gray-800 py-4 mt-8'>
			<div className='container mx-auto px-4'>
				<div className='flex justify-between items-center'>
					<p className='text-gray-600 dark:text-gray-300'>
						© 2024 Streamify. All rights reserved.
					</p>
					<div className='text-right'>
						<p className='text-gray-600 dark:text-gray-300'>
							Created by Hyung Noh
						</p>
						<p className='text-gray-600 dark:text-gray-300'>
							johnhyungilnoh@gmail.com
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
