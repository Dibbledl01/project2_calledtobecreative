# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
# Definitely try to write seed data for each of your models! It's almost impossible to create views without it
# Unless you hard code it in the Rails console
Region.destroy_all
Conference.destroy_all
north = Region.create(title: "North")
south = Region.create(title: "South")
midwest = Region.create(title: "Midwest")
pacific_northwest = Region.create(title: "Pacific Northwest")
