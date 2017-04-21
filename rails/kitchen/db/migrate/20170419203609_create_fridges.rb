class CreateFridges < ActiveRecord::Migration[5.0]
  def change
    create_table :fridges do |t|
      t.string :location
      t.string :brand
      t.integer :size

      t.timestamps
    end
  end
end
