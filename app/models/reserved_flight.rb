class ReservedFlight < ApplicationRecord
  belongs_to :user
  belongs_to :package
  belongs_to :flight
end
