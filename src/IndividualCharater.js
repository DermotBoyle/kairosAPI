import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

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

	let { name, image, gender, species, status } = data.character;

	return (
		<div className="character-bio">
			<h1 className="title">{name}</h1>
			<section className="info">
				<div className="img-container">
					<img src={image} alt={name} />
				</div>
				<div className="info">
					<h5>Gender : {gender}</h5>
					<h5>
						<span>Species : </span>
						{species}
					</h5>
					<h5>
						<span>Status : </span> {status}
					</h5>
				</div>
			</section>
		</div>
	);
};

export default IndividualCharacter;
