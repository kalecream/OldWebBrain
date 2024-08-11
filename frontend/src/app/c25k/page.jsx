'use client';
import Runs from '@data/runs';
import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import Link from 'next/link';

// interface RunProps {
// 	session: string;
// 	date: Date;
// 	distance: number;
// 	time: string;
// 	splits: string[];
// }

const addTime = (a, b) => {
	let timeAdded = b.split(':');
	let ms = (60 * 60 * parseInt(timeAdded[0]) + 60 * parseInt(timeAdded[1])) * 1000;

	var newTime = new Date('1970-01-01T' + a).getTime() + ms;
	return new Date(newTime).toLocaleString('en-GB').slice(12, 20);
};

const DistancesChart = () => {
	const svgRef = useRef();
	const margin = { top: 20, right: 20, bottom: 30, left: 50 };
	const h = 300;
	const w = 500;

	useEffect(() => {
		Runs.forEach((o) => {
			o.date = new Date(o.date);
		});

		const svg = d3.select(svgRef.current).append('svg').attr('width', w).attr('height', h).attr('x', 100);

		const x = d3
			.scaleTime()
			//Returns an array of evenly spaced numbers from the first element array to the last element in the array minus 1 (Basically just for generating tick marks on a graph)
			.range([margin.left, w - margin.right])
			.domain(d3.extent(Runs, (d) => d.date))
			.nice();

		const y = d3
			.scaleLinear()
			.range([h - margin.bottom, margin.top])
			.nice();

		const values = Object.keys(Runs[0]).filter((key) => key !== 'date');

		y.domain([
			d3.min(Runs, (d) => d3.min(values, (value) => d[value])),
			d3.max(Runs, (d) => d3.max(values, (value) => d[value])),
		]);

		const line = d3
			.line()
			.x((d) => x(d.date))
			.y((d) => y(d.distance));

		const paths = values?.map((value) => {
			return {
				value: value,
				path: svg
					.append('path')
					.datum(Runs)
					.attr('fill', 'none')
					.attr('stroke', 'steelBlue')
					.attr('stroke-width', 2)
					.attr(
						'd',
						line.y((d) => y(d[value])),
					),
			};
		});

		svg
			.append('g')
			.attr('transform', `translate(0, ${h - margin.bottom})`)
			.call(d3.axisBottom(x));

		svg.append('g').attr('transform', `translate(${margin.left}, 0)`).call(d3.axisLeft(y));
	}, []);

	return (
		<>
			<div ref={svgRef} className="flex glassmorphic my-1"></div>
		</>
	);
};

const C25KPage = () => {
	let totalDistance = 0;
	let totalTime = '00:00';

	Runs.map((run) => ((totalDistance += run.distance), ([...totalTime] = addTime(totalTime, run.time))));

	return (
		<>
			<h1>Couch to 5KM</h1>

			<section>
				<div className="flex "></div>
				<p className="prose glassmorphic">
					I'm currently using an App called "Zombies, Run 5K Training" to do an 8 week program of the Couch to 5KM
					challenge. I attempted this briefly before, but I have never made it fully through and would like to improve
					my running ability.
				</p>
				<p className="prose glassmorphic">
					I used to track my progress via spreadsheet which can be found in the first link below. The second link takes
					you to the original challenge page:{' '}
					<Link href="https://docs.google.com/spreadsheets/d/1Ao_9w17kz0X82ZlpYiu4AoUsMOThUjBWkbDFai1bIsA/edit?usp=sharing">
						Advancing
					</Link>{' '}
					in the <Link href="https://c25k.com/c25k_plan/">C25K program</Link>
				</p>
				<div className="flex row prose">
					<fieldset className="flex">
						<label>Week 1</label>
						<input type="checkbox" checked readOnly title={Runs[0].date} />
						<input type="checkbox" />
						<input type="checkbox" />
					</fieldset>
					<fieldset className="flex">
						<label>Week 2</label>
						<input type="checkbox" />
						<input type="checkbox" />
						<input type="checkbox" />
					</fieldset>
					<fieldset className="flex">
						<label>Week 3</label>
						<input type="checkbox" />
						<input type="checkbox" />
						<input type="checkbox" />
					</fieldset>
					<fieldset className="flex">
						<label>Week 4</label>
						<input type="checkbox" />
						<input type="checkbox" />
						<input type="checkbox" />
					</fieldset>
					<fieldset className="flex">
						<label>Week 5</label>
						<input type="checkbox" />
						<input type="checkbox" />
						<input type="checkbox" />
					</fieldset>
					<fieldset className="flex">
						<label>Week 6</label>
						<input type="checkbox" />
						<input type="checkbox" />
						<input type="checkbox" />
					</fieldset>
					<fieldset className="flex">
						<label>Week 7</label>
						<input type="checkbox" />
						<input type="checkbox" />
						<input type="checkbox" />
					</fieldset>
					<fieldset className="flex">
						<label>Week 8</label>
						<input type="checkbox" />
						<input type="checkbox" />
						<input type="checkbox" />
					</fieldset>
				</div>
			</section>
		</>
	);
};

export default C25KPage;
