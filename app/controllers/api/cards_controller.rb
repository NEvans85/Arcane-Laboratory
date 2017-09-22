class Api::CardsController < ApplicationController

  def index
    @cards = Card.all
                 .where('lower(name) = ?', "%#{params[:name].downcase}%")
                 .where('lower(card_type) = ?', "%#{params[:type].downcase}%")
                 .where(expansion: params[:set])
                 .where(cmc: params[:cmc])
    if params[:colors]
      @cards = @cards.select do |card|
        card.colors.map(&:name).any? do |color|
          params[:colors].include?(color)
        end
      end
    end
    render :index
  end

  def show
    @card = Card.find_by(card_hash_id: params[:id])
    render :show
  end

  def card_params
    params.permit(
      :name,
      :cmc,
      :type,
      :set
    )
  end
end
