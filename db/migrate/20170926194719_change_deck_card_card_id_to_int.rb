class ChangeDeckCardCardIdToInt < ActiveRecord::Migration[5.1]
  def change
    remove_column :deck_cards, :card_api_id
    add_column :deck_cards, :card_id, :integer
  end
end
