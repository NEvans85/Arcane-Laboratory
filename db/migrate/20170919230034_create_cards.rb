class CreateCards < ActiveRecord::Migration[5.1]
  def change
    create_table :cards do |t|
      t.string :card_id, null: false
      t.string :name, null: false
      t.string :mana_cost
      t.string :type, null: false
      t.string :rarity, null: false
      t.string :set, null: false
      t.text :rules_text
      t.text :flavor_text
      t.string :power
      t.string :toughness
      t.string :loyalty
      t.string :image_url, null: false

      t.timestamps
    end

    add_index :cards, :name
    add_index :cards, :type
    add_index :cards, :card_id
  end
end
