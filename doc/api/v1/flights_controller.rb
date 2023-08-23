module Api::V1::FlightsControllerDoc
  extend Apipie::DSL::Concern

  api :GET, '/v1/flights', 'get flights'
  def index; end

  api :POST, '/v1/flights', 'create new flight'
  param :flight, Hash do
    param :name, String
    param :base_price, String
    param :picture, String
    param :available_slots, String
  end
  def create; end
end
