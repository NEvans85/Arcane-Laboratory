class CreateDeckCards < ActiveRecord::Migration[5.1]
  def change
    create_table :deck_cards do |t|
      t.integer :deck_id, null: false
      t.string :card_id, null: false

      t.timestamps
    end

    add_index :deck_cards, :deck_id
    add_index :deck_cards, :card_id
  end
end
