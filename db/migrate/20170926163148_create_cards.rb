class CreateCards < ActiveRecord::Migration[5.1]
  def change
    create_table :cards do |t|
      t.string :api_id, null: false
      t.string :name, null: false
      t.string :image_url, null: false
      t.string :full_type, null: false
      t.integer :cmc, null: false

      t.timestamps
    end

    add_index :cards, :cmc
    add_index :cards, :api_id, unique: true
  end
end
