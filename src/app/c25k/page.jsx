'use client';
import { Suspense } from 'react';
import Skeleton from 'react-loading-skeleton';
import Runs from '@data/runs';
import Link from 'next/link';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { WindowWidth } from '@utils/windowDimmensions';

// interface RunProps {
// 	session: string;
// 	date: Date;
// 	distance: number;
// 	time: string;
// 	splits: string[];
// }

const parseTimeToSeconds = (time) => {
	const [minutes, seconds] = time.split(':').map(Number);
	return minutes * 60 + seconds;
};

const formatSecondsToTime = (seconds) => {
	const minutes = Math.floor(seconds / 60);
	const remainingSeconds = seconds % 60;
	return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
};

const splitData = Runs.map((run) =>
	run.splits
		.filter((split) => split !== '00:00')
		.map((split, km) => ({
			session: run.session,
			km: km + 1,
			time: parseTimeToSeconds(split),
		})),
).flat();

const SplitChart = () => {
	const width = WindowWidth() > 1000 ? WindowWidth() - 500 : WindowWidth() - 80;

	return (
		<LineChart data={splitData} width={width} height={300}>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis
				dataKey="km"
				label={{ value: 'Kilometers', position: 'insideBottomRight', offset: 0 }}
				type="number"
				ticks={[1, 2, 3, 4, 5]}
				domain={[1, 5]}
				allowDecimals={false}
			/>
			<YAxis label={{ value: 'Time', angle: -90, position: 'insideLeft' }} tickFormatter={formatSecondsToTime} />
			<Tooltip labelFormatter={(label) => `KM ${label}`} formatter={(value) => formatSecondsToTime(value)} />
			{Runs.map((run, index) => (
				<Line
					key={index}
					type="monotone"
					dataKey="time"
					data={run.splits.map((split, km) => ({
						km: km + 1,
						time: parseTimeToSeconds(split),
						session: run.session,
					}))}
					name={run.session}
					stroke={`hsl(${(index * 360) / Runs.length}, 70%, 50%)`}
				/>
			))}
		</LineChart>
	);
};

const C25KPage = () => {
	return (
		<section style={{ minHeight: '80vh' }}>
			<h1>Couch to 5K</h1>
			<div className="flex column">
				<Suspense fallback={<Skeleton count={1} />}>
					<SplitChart />
				</Suspense>
			</div>
			<p className="prose glassmorphic" style={{ marginTop: '-2rem', marginBottom: '3rem' }}>
				I'm currently using an App called "Zombies, Run 5K Training" to do an 8 week program of the Couch to 5KM
				challenge. I attempted this briefly before, but I have never made it fully through and would like to improve my
				running ability.
			</p>
		</section>
	);
};

export default C25KPage;
