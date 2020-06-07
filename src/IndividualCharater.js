import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

import "./IndividualCharacter.scss";

const GET_INDIVIDUAL = gql`
	query fetchIndividual($id: ID!) {
		character(id: $id) {
			name
			image
			gender
			species
			status
			episode {
				air_date
				name
				episode
				created
			}
		}
	}
`;

const IndividualCharacter = ({
	match: {
		params: { step },
	},
}) => {
	const { loading, error, data } = useQuery(GET_INDIVIDUAL, {
		variables: { id: `${step}` },
	});

	if (loading) return <p>Loading...</p>;
	if (error) return <p>error :(</p>;

	let { name, image, gender, species, status, episode } = data.character;

	return (
		<div className="character-bio">
			<h1 className="title">{name}</h1>
			<section className="character-container">
				<div className="img-container">
					<img src={image} alt={name} />
				</div>
				<div className="info">
					<h5>
						<span>Gender</span> : {gender}
					</h5>
					<h5>
						<span>Species : </span>
						{species}
					</h5>
					<h5>
						<span>Status : </span> {status}
					</h5>
				</div>
			</section>
			<section className="Episodes">
				<h3 className="episode-history">Episode history</h3>
				{episode.map((el) => (
					<div className="episode-container">
						<header>
							<h4 className="name">{el.name}</h4>
							<h5 className="code">{el.episode}</h5>
						</header>
						<p className="">{el.air_date}</p>
					</div>
				))}
			</section>
		</div>
	);
};

export default IndividualCharacter;
