const parties = [
	{ id: 'party1', votes: 0 },
	{ id: 'party2', votes: 0 },
	{ id: 'party3', votes: 0 },
	{ id: 'party4', votes: 0 },
	{ id: 'party5', votes: 0 },
];

const winner = {
	name: 'N/A',
	votes: 0,
};

const updatePartyVotes = (partyId, votes) => {
	const party = parties.find(p => p.id === partyId);
	if (party) {
		party.votes += votes;
		const votesElement = document.getElementById(`${partyId}-votes`);
		votesElement.textContent = party.votes;
		if (party.votes > winner.votes) {
			winner.name = partyId;
			winner.votes = party.votes;
			const winnerNameElement = document.getElementById('winner-name');
			winnerNameElement.textContent = partyId;
			const winnerVotesElement = document.getElementById('winner-votes');
			winnerVotesElement.textContent = party.votes;
		}
	}
};

const addVote = (partyId) => {
	const party = parties.find(p => p.id === partyId);
	if (party) {
		updatePartyVotes(partyId, 1);
	}
};
