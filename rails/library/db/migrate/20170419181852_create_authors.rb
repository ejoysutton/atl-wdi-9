class CreateAuthors < ActiveRecord::Migration[5.0]
  def change
    create_table :authors do |t|
      t.string :name
      t.string :nationality
      t.integer :birth_year

      t.timestamps
    end
  end
end
