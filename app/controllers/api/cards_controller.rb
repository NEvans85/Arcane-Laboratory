class Api::CardsController < ApplicationController

  def index
    @cards = Card.search(card_params)
    render :index
  end

  def show
    @card = Card.search(id: params[:id]).first
    render :show
  end

private

  def card_params
    params.permit(:name, :type, :set, :text, :cmc, :colors, :page)
  end

end
