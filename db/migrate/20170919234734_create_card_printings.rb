class CreateCardPrintings < ActiveRecord::Migration[5.1]
  def change
    create_table :card_printings do |t|
      t.string :card_id, null: false
      t.integer :set_id, null: false
      t.timestamps
    end

    add_index :card_printings, :card_id
    add_index :card_printings, :set_id
  end
end
