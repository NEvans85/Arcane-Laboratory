class CreateDeckCards < ActiveRecord::Migration[5.1]
  def change
    create_table :deck_cards do |t|
      t.string :card_api_id, null: false
      t.integer :deck_id, null: false
      t.integer :quantity, default: 0
    end

    add_index :deck_cards, :card_api_id
    add_index :deck_cards, :deck_id
  end
end
