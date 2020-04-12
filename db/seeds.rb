# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Story.create!({
  title: 'Seven Devils',
  summary: 'When the infamous seven hills surrounding the epicenter of the ancient world come to life, shedding light on the personalities buried deep in earth...',
  place_of_origin: 'here',
  date_of_origin: '2020',
  story: 'GAJGSAJHDBAKHBS',
  user_id: 1
})

p "#{Story.count} stories were created!"