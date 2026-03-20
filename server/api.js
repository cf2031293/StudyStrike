const BASE = "http://localhost:3000";

export async function getDecks() {
  const res = await fetch(`${BASE}/decks`);
  if (!res.ok) throw new Error("Failed to fetch decks");
  return res.json();
}

export async function createDeck(user_id, title, description = "") {
  const res = await fetch(`${BASE}/decks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user_id, title, description }),
  });
  if (!res.ok) throw new Error("Failed to create deck");
  return res.json();
}

export async function duplicateDeck(deckId) {
  const res = await fetch(`${BASE}/decks/${deckId}/duplicate`, {
    method: "POST",
  });
  if (!res.ok) throw new Error("Failed to duplicate deck");
  return res.json();
}

export async function getCards(deckId) {
  const res = await fetch(`${BASE}/decks/${deckId}/cards`);
  if (!res.ok) throw new Error("Failed to fetch cards");
  return res.json();
}

export async function createCard(deckId, front, back) {
  const res = await fetch(`${BASE}/decks/${deckId}/cards`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ front, back }),
  });
  if (!res.ok) throw new Error("Failed to create card");
  return res.json();
}

export async function updateCard(cardId, front, back) {
  const res = await fetch(`${BASE}/cards/${cardId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ front, back }),
  });
  if (!res.ok) throw new Error("Failed to update card");
  return res.json();
}

export async function deleteCard(cardId) {
  const res = await fetch(`${BASE}/cards/${cardId}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete card");
  return res.json();
}