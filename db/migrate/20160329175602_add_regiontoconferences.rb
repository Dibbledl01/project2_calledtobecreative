class AddRegiontoconferences < ActiveRecord::Migration
  def change
    add_reference :conferences, :region, index: true, foreign_key: true
  end
end
