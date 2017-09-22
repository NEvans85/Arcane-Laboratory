class Api::CardsController < ApplicationController

  def index(card_params)

  end

  def show(card_hash_id)
    @card = Card.find_by(card_hash_id: card_hash_id)
    render :show
  end

  def card_params
    params.require(card).permit(
      :name,
      :cmc,
      :colors,
      :exact_colors?,
      :type,
      :set
      )
  end
end
