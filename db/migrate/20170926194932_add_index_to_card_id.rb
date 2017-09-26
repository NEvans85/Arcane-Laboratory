class AddIndexToCardId < ActiveRecord::Migration[5.1]
  def change
    add_index :deck_cards, :card_id
  end
end
