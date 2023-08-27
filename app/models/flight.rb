class Flight < ApplicationRecord
  belongs_to :user

  validates :name, presence: true, length: { maximum: 255 }, uniqueness: true
  validates :picture, presence: true
  validates :base_price, presence: true, numericality: { greater_than_or_equal_to: 0 }
  validates :available_slots, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
  validates :user_id, presence: true
  validates :reserved, inclusion: { in: [true, false] }
end
