export interface UserGrowth {
	date: string;
	totalUsers: number;
	activeUsers: number;
}

export interface Revenue {
	date: string;
	subscriptions: number;
	ads: number;
}

export interface TopSong {
	name: string;
	artist: string;
	streams: number;
}

export interface RecentStream {
	songName: string;
	artist: string;
	dateStreamed: string;
	streamCount: number;
	userId: string;
}
