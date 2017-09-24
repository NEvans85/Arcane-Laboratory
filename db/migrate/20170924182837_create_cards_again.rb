class CreateCardsAgain < ActiveRecord::Migration[5.1]
  def change
    create_table :cards do |t|
      t.string :api_id
      t.string :name
      t.string :image_url
      t.string :type
    end

    add_index :cards, :api_id, unique: true
  end
end
