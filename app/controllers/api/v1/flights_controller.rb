class Api::V1::FlightsController < ApplicationController
  protect_from_forgery with: :null_session
  skip_before_action :verify_authenticity_token, only: %i[create destroy]
  before_action :set_flight, only: %i[show edit update destroy]

  def index
    @flights = Flight.all.order(created_at: :desc)
    @user = current_user

    response_data = {
      user: @user.as_json(only: %i[name email id]),
      flights: @flights.as_json(except: %i[created_at updated_at]).map do |flight|
        {
          name: flight['name'],
          picture: flight['picture'],
          reserved: flight['reserved'],
          userId: flight['user_id'],
          basePrice: flight['base_price'],
          availableSlots: flight['available_slots'],
          id: flight['id']
        }
      end
    }

    render json: response_data, status: :ok
  rescue StandardError => e
    render json: { status: 'ERROR', message: e.message }, status: :internal_server_error
  end

  def show
    @flight = Flight.find(params[:id])

    response_data = {
      name: @flight.name,
      picture: @flight.picture,
      reserved: @flight.reserved,
      userId: @flight.user_id,
      basePrice: @flight.base_price,
      availableSlots: @flight.available_slots,
      id: @flight.id
    }

    render json: response_data, status: :ok
  rescue ActiveRecord::RecordNotFound
    render json: { status: 'ERROR', message: 'Flight cannot be found' }, status: :not_found
  rescue StandardError => e
    render json: { status: 'ERROR', message: e.message }, status: :internal_server_error
  end

  def create
    @flight = Flight.new(flight_params)

    if @flight.save
      @flights = Flight.all.order(created_at: :desc)
      @user = current_user

      response_data = {
        user: @user.as_json(only: %i[name email id]),
        flights: @flights.as_json(except: %i[created_at updated_at]).map do |flight|
          {
            name: flight['name'],
            picture: flight['picture'],
            reserved: flight['reserved'],
            userId: flight['user_id'],
            basePrice: flight['base_price'],
            availableSlots: flight['available_slots']
          }
        end
      }

      render json: response_data, status: :ok
    else
      render json: { status: 'failure', data: @flight.errors.full_messages }, status: :unprocessable_entity
    end
  rescue StandardError => e
    render json: { status: 'ERROR', message: e.message }, status: :internal_server_error
  end

  def destroy
    @flight = Flight.find(params[:id])

    if @flight.destroy
      head :no_content
    else
      render json: { status: 'ERROR', message: 'Failed to destroy flight.' }, status: :unprocessable_entity
    end
  rescue ActiveRecord::RecordNotFound
    render json: { status: 'ERROR', message: 'Flight cannot be found.' }, status: :not_found
  rescue StandardError => e
    render json: { status: 'ERROR', message: e.message }, status: :internal_server_error
  end

  private

  def set_flight
    @flight = Flight.find(params[:id])
  end

  def flight_params
    params.require(:flight).permit(:name, :picture, :reserved, :user_id, :base_price, :available_slots)
  end
end
