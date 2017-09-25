class Api::DeckController < ApplicationController

  def create
    @deck = Deck.create(creator_id: 1)
    render :show
  end

  def destroy
    deck = Deck.find(params[:id])
    deck.destroy
    redirect_to action: 'index'
  end

  def update
    @deck = Deck.find(params[:id])
    case params[:update_type]
    when 'add_card'
      @deck.add_card(params[:api_id])
    when 'remove_card'
      @deck.remove_card(params[:api_id])
    when 'upvote'
      @deck.upvote
    end
    render :show
  end

  def show
    @deck = Deck.find(params[:id])
    render :show
  end

  def index
    case params[:index_type]
    when 'top'
      @decks = Deck.order(upvotes: :desc).limit(10)
    when 'new'
      @decks = Deck.order(created_at: :desc).limit(10)
    when 'user'
      @decks = Deck.find_by(creator_id: params[:user_id]) if params[:user_id]
    # when 'format'
      # @decks = Deck.find_by(format: params[:format]) if params[:format]
    end
    @decks = Deck.all unless @decks
    render :index
  end
end
