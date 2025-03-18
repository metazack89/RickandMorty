import { useEffect } from 'react';
import useFetchApi from '../hooks/useFetchApi';
import Skeleton from 'react-loading-skeleton';
import '../components/residentCard.css';

function ResidentCard({ residentUrl }) {
	const { data: resident, pending, error, request } = useFetchApi();
	const countEpisodes = resident?.episode.length;
	const textEpisodes = countEpisodes === 1 ? 'Episode' : 'Episodes';

	useEffect(() => {
		request(`${residentUrl} `);
	}, [residentUrl]);
	console.log(resident);

	const styleFooter = {
		background: resident?.status === 'Alive' ? '#00d26a' : '#f8312f',
		color: resident?.status === 'Alive' ? 'black' : 'white',
	};

	return (
		<div className="resident__card">
			{pending ? (
				<>
					<Skeleton height={350} />
					<Skeleton
						height={20}
						style={{ marginTop: '10px', padding: '10px' }}
					/>
					<Skeleton
						height={30}
						style={{ marginTop: '10px', padding: '10px' }}
					/>
					<Skeleton
						height={20}
						style={{ marginTop: '10px', padding: '10px' }}
					/>
					<Skeleton
						height={20}
						style={{ marginTop: '10px', padding: '10px' }}
					/>
					<Skeleton
						height={20}
						style={{ marginTop: '10px', padding: '10px' }}
					/>
				</>
			) : (
				<>
					<div className="resident__card__header">
						<img className="" src={resident?.image} alt={resident?.name} />
						<p className="resident__card__status">
							{resident?.status === 'Alive' ? (
								<span>🟢Alive</span>
							) : (
								<span>🔴Dead</span>
							)}
						</p>
					</div>
					<div className="resident__card__body">
						<h3>{resident?.name}</h3>
						<ul>
							<li>
								Specie: <br /> <span className="bold">{resident?.species}</span>{' '}
							</li>
							<li>
								Origin: <br />{' '}
								<span className="bold">{resident?.origin?.name}</span>{' '}
							</li>
						</ul>
						<div style={styleFooter} className="resident__card__footer">
							<p className="resident__card__copy">
								Appears in {countEpisodes} {textEpisodes}
							</p>
						</div>
					</div>
				</>
			)}
		</div>
	);
}

export default ResidentCard;
