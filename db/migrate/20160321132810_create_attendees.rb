class CreateAttendees < ActiveRecord::Migration
  def change
    create_table :attendees do |t|
      t.string :name
      t.string :location
      t.string :gender
      t.text :interests
      t.integer :age
      t.string :profession

      t.timestamps null: false
    end
  end
end
