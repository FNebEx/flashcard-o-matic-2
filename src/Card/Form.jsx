import { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * A component that is used for both the new card page and the edit card page.
 * @param {number} deckid Id for the deck that a card is being added to.
 * @param {object}  card The card that is being saved.
 * @returns JSX.Element
 */
function Form({ deckid, card, canEdit, handleSubmit, handleInputChange }) {
  /**
   * NOTE:
   * If it's a new card, the buttons are "Done/Save"
   * If editing a card, the buttons are "Cancel/Submit"
   */
  const navigate = useNavigate();

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="card-front">Front</label>
        <textarea
          name="front"
          className="form-control"
          placeholder="Front Side of the Card"
          value={card && card.front}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="card-back">Back</label>
        <textarea
          name="back"
          className="form-control"
          placeholder="Back Side of the Card"
          value={card && card.back}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <button
        className="btn btn-secondary"
        type="button"
        onClick={() => navigate(`/decks/${deckid}`)}
      >
        {!canEdit ? "Done" : "Cancel"}
      </button>
      <button className="btn btn-primary ml-2" type="submit">
        {!canEdit ? "Submit" : "Save"}
      </button>
    </form>
  );
}

export default Form;
