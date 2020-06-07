import React from "react";
import { useQuery } from "@apollo/react-hooks";
import BottomScrollListener from "react-bottom-scroll-listener";
import { gql } from "apollo-boost";
import { useHistory } from "react-router-dom";

import "./Characters.scss";

const GET_CHARACTERS = gql`
	query fetchCharacters($page: Int!) {
		characters(page: $page) {
			results {
				name
				species
				id
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

const Characters = () => {
	const history = useHistory();

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

	const handleNewQuery = (id) => {
		history.push("/IndividualCharacter/" + id);
	};

	return (
		<BottomScrollListener onBottom={scrollEnd}>
			<div id="page-container">
				{Characters.map((character, i) => (
					<div
						className="character-container"
						key={i}
						onClick={() => handleNewQuery(character.id)}>
						<div className="image-container">
							<img
								src={character.image}
								alt={character.name}
								className="character-image"
							/>
						</div>
						<div className="character-info">
							<h3 className="name">{character.name}</h3>
						</div>
					</div>
				))}
			</div>
		</BottomScrollListener>
	);
};

export default Characters;
