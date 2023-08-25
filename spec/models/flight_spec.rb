require 'rails_helper'

RSpec.describe Flight, type: :model do
let(:user) { User.create(name: 'John Doe', email: 'john@example.com', password: 'password123') }


  it 'is valid with valid attributes' do
    flight = Flight.new(
      name: 'Flight 1',
      picture: 'flight1.jpg',
      base_price: 100.0,
      available_slots: 150,
      user: user,
      reserved: false
    )
    expect(flight).to be_valid
  end

  it 'is not valid without a name' do
    flight = Flight.new(
      picture: 'flight1.jpg',
      base_price: 100.0,
      available_slots: 150,
      user: user,
      reserved: false
    )
    expect(flight).to_not be_valid
  end

  it 'is not valid without a picture' do
    flight = Flight.new(
      name: 'Flight 1',
      base_price: 100.0,
      available_slots: 150,
      user: user,
      reserved: false
    )
    expect(flight).to_not be_valid
  end

  it 'is not valid without a base price' do
    flight = Flight.new(
      name: 'Flight 1',
      picture: 'flight1.jpg',
      available_slots: 150,
      user: user,
      reserved: false
    )
    expect(flight).to_not be_valid
  end

  it 'is not valid without available slots' do
    flight = Flight.new(
      name: 'Flight 1',
      picture: 'flight1.jpg',
      base_price: 100.0,
      user: user,
      reserved: false
    )
    expect(flight).to_not be_valid
  end

  it 'is not valid without a user' do
    flight = Flight.new(
      name: 'Flight 1',
      picture: 'flight1.jpg',
      base_price: 100.0,
      available_slots: 150,
      reserved: false
    )
    expect(flight).to_not be_valid
  end

  it 'is valid with a non-boolean reserved status' do
    flight = Flight.create(
      name: 'Flight 1',
      picture: 'flight1.jpg',
      base_price: 100.0,
      available_slots: 155,
      user: user,
      reserved: 'invalid'
    )
    expect(flight).to be_valid
  end

  it 'is not valid with a duplicate name' do
    Flight.create(
      name: 'Flight 1',
      picture: 'flight1.jpg',
      base_price: 100.0,
      available_slots: 150,
      user: user,
      reserved: false
    )
    flight = Flight.new(
      name: 'Flight 1',
      picture: 'flight2.jpg',
      base_price: 120.0,
      available_slots: 120,
      user: user,
      reserved: true
    )
    expect(flight).to_not be_valid
  end

  it 'belongs to a user' do
    flight = Flight.new(
      name: 'Flight 1',
      picture: 'flight1.jpg',
      base_price: 100.0,
      available_slots: 150,
      user: user,
      reserved: false
    )
    expect(flight.user).to eq(user)
  end
end
