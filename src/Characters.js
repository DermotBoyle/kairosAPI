import React from "react";
import { useQuery } from "@apollo/react-hooks";
import BottomScrollListener from "react-bottom-scroll-listener";
import { gql } from "apollo-boost";

import "./Characters.scss";
import { Button } from "reactstrap";

const GET_CHARACTERS = gql`
	query fetchCharacters($page: Int!) {
		characters(page: $page) {
			results {
				name
				species
				gender
				image
				origin {
					dimension
				}
				status
			}
		}
	}
`;

function Characters() {
	const { loading, error, data, fetchMore } = useQuery(GET_CHARACTERS, {
		variables: { page: 1 },
	});

	let Characters = data?.characters?.results;

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	const scrollEnd = () =>
		fetchMore({
			variables: {
				page: Characters.length / 20 + 1,
			},
			updateQuery: (prev, { fetchMoreResult }) => {
				if (!fetchMoreResult) return prev;
				return {
					characters: {
						__typename: "Characters",
						results: [
							...prev.characters.results,
							...fetchMoreResult.characters.results,
						],
					},
				};
			},
		});

	console.log(Characters);

	return (
		<BottomScrollListener onBottom={scrollEnd}>
			<div id="page-container">
				{Characters.map((character, i) => (
					<div className="character-container" key={i}>
						<div className="image-container">
							<img
								src={character.image}
								alt={character.name}
								className="character-image"
							/>
						</div>
						<div className="character-info">
							<h3 className="name">{character.name}</h3>
							<h5 className="detail">
								Species : <span>{character.species}</span>{" "}
							</h5>
							<h5 className="detail">
								Gender : <span>{character.gender}</span>
							</h5>
							<h5 className="detail">
								Dimension : <span>{character.origin.dimension}</span>
							</h5>
							<h5 className="detail">
								Status :{" "}
								<span
									className={
										character.status !== "Alive"
											? "status-negative"
											: "status-positive"
									}>
									{character.status}
								</span>
							</h5>
						</div>
					</div>
				))}
			</div>
		</BottomScrollListener>
	);
}

export default Characters;
