class RemoveSubtypesAndSupertypes < ActiveRecord::Migration[5.1]
  def change
    drop_table :subtypes
    drop_table :supertypes
    drop_table :card_subtypes
    drop_table :card_supertypes
  end
end
