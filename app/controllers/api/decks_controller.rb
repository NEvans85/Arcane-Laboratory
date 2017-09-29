class Api::DecksController < ApplicationController

  def create
    @deck = Deck.create(creator_id: params[:creator_id])
    render :show
  end

  def destroy
    @deck = Deck.find(params[:id])
    @deck.destroy
    render :show
  end

  def update
    @deck = Deck.find(params[:deck][:id].to_i)
    case params[:update_type]
    when 'addCard'
      @deck.add_card!(params[:api_id])
    when 'removeCard'
      @deck.remove_card!(params[:api_id])
    when 'upvote'
      @deck.upvote
    when 'updateAttributes'
      unless @deck.update_attributes(deck_params)
        render json: @deck.errors.full_massages, status: 422
      end
    end
    render :show
  end

  def show
    @deck = Deck.find(params[:id])
    render :show
  end

  def index
    case params[:category]
    when 'Top'
      @decks = Deck.order(upvotes: :desc).limit(15)
    when 'New'
      @decks = Deck.order(created_at: :desc).limit(15)
    else
      @decks = Deck.where(format: params[:category])
                   .order(upvotes: :desc).limit(20)
    end
    @decks = Deck.where(creator_id: params[:user_id]) if params[:user_id]
    @decks = Deck.all unless @decks
    render :index
  end

  def deck_params
    params[:deck].permit(:id, :title, :description, :format)
  end
end
