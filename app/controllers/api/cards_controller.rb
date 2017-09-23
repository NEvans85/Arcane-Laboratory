class Api::CardsController < ApplicationController

  def index
    @cards = Card.search(card_params)
    render :index
  end

  def show
    @card = Card.find_by(card_hash_id: params[:id])
    render :show
  end

  def card_params
    params.permit(:name, :type, :set, :cmc, :colors, :page)
  end

end
