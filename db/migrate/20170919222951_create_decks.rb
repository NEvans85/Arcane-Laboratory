class CreateDecks < ActiveRecord::Migration[5.1]
  def change
    create_table :decks do |t|
      t.integer :creator_id, null: false
      t.string :title, null: false
      t.text :description, default: ""
      t.string :format, null: false
      t.integer :upvotes, default: 0

      t.timestamps
    end

    add_index :decks, :creator_id
    add_index :decks, :title
    add_index :decks, :format
  end
end
