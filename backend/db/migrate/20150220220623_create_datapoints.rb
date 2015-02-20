class CreateDatapoints < ActiveRecord::Migration
  def change
    create_table :datapoints do |t|
      t.string :domain
      t.datetime :time
      t.integer :delay

      t.timestamps null: false
    end
  end
end
