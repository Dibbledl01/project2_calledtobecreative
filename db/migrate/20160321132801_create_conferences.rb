class CreateConferences < ActiveRecord::Migration
  def change
    create_table :conferences do |t|
      t.string :title
      t.string :theme
      t.string :location
      t.datetime :starting_date
      t.datetime :ending_date
      t.float :cost

      t.timestamps null: false
    end
  end
end
