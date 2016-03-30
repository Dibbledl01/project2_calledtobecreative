class CreateConferences < ActiveRecord::Migration
  def change
    create_table :conferences do |t|
      t.string :title
      t.string :location
      t.date :start_date
      t.date :end_date
      t.decimal :cost, precision: 8, scale: 2
      t.string :theme
      t.string :description
      t.string :conference_url

      t.timestamps null: false
    end
  end
end
