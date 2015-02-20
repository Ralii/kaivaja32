class CreateDomains < ActiveRecord::Migration
  def change
    create_table :domains do |t|
      t.string :domain
      t.integer :median
      t.integer :min
      t.integer :max
      t.integer :avg

      t.timestamps null: false
    end
  end
end
