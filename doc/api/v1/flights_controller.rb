module Api::V1::FlightsControllerDoc
  extend Apipie::DSL::Concern

  api :GET, '/v1/flights', 'get flights'
  def index; end

end
