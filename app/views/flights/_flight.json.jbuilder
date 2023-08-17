json.extract! flight, :id, :name, :picture, :reserved, :user_id, :base_price, :available_slots, :created_at, :updated_at
json.url flight_url(flight, format: :json)
