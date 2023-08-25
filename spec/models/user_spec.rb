require 'rails_helper'


RSpec.describe User, type: :model do
  describe 'validations' do
    it 'is valid with valid attributes' do
      user = User.new(
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: 'password123'
      )
      expect(user).to be_valid
    end

    it 'is not valid without a name' do
      user = User.new(
        email: 'johndoe@example.com',
        password: 'password123'
      )
      expect(user).to_not be_valid
    end

    it 'is not valid without a unique email' do
        existing_user = User.create(
          name: 'John Doe',
          email: 'johndoe@example.com',
          password: 'password123'
        )
      
        user = User.new(
          name: 'Another User',
          email: existing_user.email,
          password: 'anotherpassword'
        )
      
        expect(user).to_not be_valid
      end
      

    it 'is not valid with an invalid email format' do
      user = User.new(
        name: 'John Doe',
        email: 'invalid-email',
        password: 'password123'
      )
      expect(user).to_not be_valid
    end

    it 'is not valid with a short password' do
      user = User.new(
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: 'short'
      )
      expect(user).to_not be_valid
    end

    it 'can have multiple flights' do
        user = User.create(
          name: 'John Doe',
          email: 'johndoe@example.com',
          password: 'password123'
        )
    
        flight1 = Flight.create(
          name: 'Flight 1',
          picture: 'flight1.jpg',
          reserved: false,
          user: user,
          base_price: 100.0,
          available_slots: 150
        )
    
        flight2 = Flight.create(
          name: 'Flight 2',
          picture: 'flight2.jpg',
          reserved: true,
          user: user,
          base_price: 120.0,
          available_slots: 120
        )
    
        expect(user.flights).to include(flight1, flight2)
      end
    
  end

end
