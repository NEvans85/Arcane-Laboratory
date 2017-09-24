class CreateSubTypes < ActiveRecord::Migration[5.1]
  def change
    create_table :subtypes do |t|
      t.string :name
    end

    create_table :card_subtypes do |t|
      t.integer :card_id
      t.integer :subtype_id
    end

    add_index :card_subtypes, :card_id
    add_index :card_subtypes, :subtype_id
  end
end
