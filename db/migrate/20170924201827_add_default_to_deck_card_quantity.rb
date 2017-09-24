class AddDefaultToDeckCardQuantity < ActiveRecord::Migration[5.1]
  def change
    remove_column :deck_cards, :quantity, :integer
    add_column :deck_cards, :quantity, :integer, default: 0
  end
end
