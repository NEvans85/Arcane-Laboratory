class CreateSupertypes < ActiveRecord::Migration[5.1]
  def change
    create_table :supertypes do |t|
      t.string :name
    end

    create_table :card_supertypes do |t|
      t.integer :supertype_id
      t.integer :card_id
    end
  end
end
