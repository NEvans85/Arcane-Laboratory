class Api::CommentsController < ApplicationController

  def create
    comment = Comment.create(comment_params)
    @deck = comment.deck
    render 'api/decks/show'
  end

  private

  def comment_params
    params.permit(:author_id, :deck_id, :comment_id, :body)
  end
end
