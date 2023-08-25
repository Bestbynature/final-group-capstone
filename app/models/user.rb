class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  # Associations
  has_many :flights, dependent: :destroy

  # validations
  validates :name, presence: true, length: { maximum: 255 }
  
  validates :email, presence: true, uniqueness: true, length: { maximum: 255 },
                    format: { with: /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/ }

  validates :password, presence: true, length: { minimum: 6 }
end
