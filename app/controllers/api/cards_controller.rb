class Api::CardsController < ApplicationController

  def index
    @cards = Card.search(params)
    render :index
  end

  def show
    @card = Card.find_by(card_hash_id: params[:id])
    render :show
  end

end
