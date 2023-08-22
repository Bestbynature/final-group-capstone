class Api::V1::FlightsController < ApplicationController
  protect_from_forgery with: :exception
  skip_before_action :verify_authenticity_token, only: [:create]
  before_action :set_flight, only: %i[ show edit update destroy ]

  def index
    @flights = Flight.all.order(created_at: :desc)
    @user = current_user

    response_data = {
      user: @user.as_json(only: [:name, :email, :id]),
      flights: @flights.as_json(except: [:created_at, :updated_at])
    }
    render json: response_data, status: :ok
  end

  def show
  end

  def create
    @flight = Flight.new(flight_params)
    if @flight.save
      @packages = Package.all
      @packages.each do |package|
        package.flight_id = @flight.id
        package.save
      end
      @flight.reload
      @flights = Flight.all.order(created_at: :desc)
      @user = current_user
      response_data = {
        user: @user.as_json(only: [:name, :email, :id]),
        flights: @flights.as_json(except: [:created_at, :updated_at], include: { packages: { except: [:created_at, :updated_at] } })
      }
      render json: response_data, status: :ok
    else
      render json: { status: 'ERROR', message: 'Flight not created', data: @flight.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    respond_to do |format|
      if @flight.update(flight_params)
        format.html { redirect_to flight_url(@flight), notice: "Flight was successfully updated." }
        format.json { render :show, status: :ok, location: @flight }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @flight.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @flight = Flight.find(params[:id])

    respond_to do |format|
      if @flight.destroy
        format.html { redirect_to '/delete_flight', notice: "Flight was successfully destroyed." }
        format.json { head :no_content }
      else
        format.html { redirect_to delete_flight, alert: "Failed to destroy flight." }
        format.json { render json: @flight.errors, status: :unprocessable_entity }
      end
    end
  end


  private
    def set_flight
      @flight = Flight.find(params[:id])
    end

    def flight_params
      params.require(:flight).permit(:name, :picture, :reserved, :user_id, :base_price, :available_slots)
    end
end