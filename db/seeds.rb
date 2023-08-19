# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Seeding the database"
user = User.create!(name: "dammy", email: "dammy@gmail.com", password: "123456", password_confirmation: "123456")
Flight.create([
    {name: 'Brazil', picture: 'https://images.pexels.com/photos/16129715/pexels-photo-16129715.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=300', base_price: 1500, available_slots: 10, reserved: false, user: user},
    {name: 'Egypt', picture: 'https://images.pexels.com/photos/3958516/pexels-photo-3958516.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=300', base_price: 1100, available_slots: 10, reserved: false, user: user},
    {name: 'America', picture: 'https://images.pexels.com/photos/356844/pexels-photo-356844.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=300', base_price: 2000, available_slots: 10, reserved: false, user: user},
    {name: 'Morocco', picture: 'https://images.pexels.com/photos/6945915/pexels-photo-6945915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=300', base_price: 1200, available_slots: 10, reserved: false, user: user},
    {name: 'Cameroon', picture: 'https://images.pexels.com/photos/17290979/pexels-photo-17290979.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=300', base_price: 1400, available_slots: 10, reserved: false, user: user},
    {name: 'Nigeria', picture: 'https://images.pexels.com/photos/16237519/pexels-photo-16237519.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=300', base_price: 1300, available_slots: 10, reserved: false, user: user},
    {name: 'Mexico', picture: 'https://images.pexels.com/photos/17806066/pexels-photo-17806066.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=300', base_price: 1050, available_slots: 10, reserved: false, user: user},
    {name: 'Ghana', picture: 'https://images.pexels.com/photos/6567674/pexels-photo-6567674.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=300', base_price: 1000, available_slots: 10, reserved: false, user: user},
  ])

  puts "Database is successfully seeded"
