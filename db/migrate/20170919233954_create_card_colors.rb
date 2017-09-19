class CreateCardColors < ActiveRecord::Migration[5.1]
  def change
    create_table :card_colors do |t|
      t.string :card_id, null: false
      t.string :color_id, null: false

      t.timestamps
    end

    add_index :card_colors, :card_id
    add_index :card_colors, :color_id
  end
end
