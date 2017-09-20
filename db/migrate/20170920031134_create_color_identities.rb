class CreateColorIdentities < ActiveRecord::Migration[5.1]
  def change
    create_table :color_identities do |t|
      t.integer :color_id
      t.string :card_id
      t.timestamps
    end

    add_index :color_identities, :card_id
    add_index :color_identities, :color_id
  end
end
