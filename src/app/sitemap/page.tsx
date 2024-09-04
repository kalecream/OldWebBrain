import { PageRoutes } from '@data/routes';
import Link from 'next/link';

const SitemapPage = () => {
	return (
        <section role="region" tabIndex={0}>
            <h1>Sitemap</h1>
            <p className='prose'>This table shows all the pages in this website.</p>
			<table>
				{/* <thead>
                    <tr>
                        <th>#</th>
						<th>Route</th>
						<th>Description</th>
						<th>Last Modified</th>
					</tr>
				</thead> */}
                <tbody>
                    <tr>{PageRoutes.map((r, i=1) => (
                        <td key={i}>
								{i += 1}
							</td>
						))}</tr>
					<tr>
						{PageRoutes.map((r) => (
                            <td key={r.route}>
								<Link href={r.route} target="_blank">
									{r.route}
								</Link>
							</td>
						))}
					</tr>

					{/* <tr>
						{PageRoutes.map((r) => (
							<td>{r.description || ''}</td>
						))}
					</tr> */}

					<tr>
						{PageRoutes.map((r, i=0) => (
                            <td key={i + 1}>{r.date.toISOString()}</td>
						))}
					</tr>
				</tbody>
			</table>
		</section>
	);
};

export default SitemapPage;
