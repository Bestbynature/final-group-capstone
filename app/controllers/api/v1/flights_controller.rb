class Api::V1::FlightsController < ApplicationController
  before_action :set_flight, only: %i[ show edit update destroy ]

  def index
    @flights = Flight.all
    @user = current_user

    response_data = {
      user: @user.as_json(only: [:name, :email]),
      flights: @flights.as_json(except: [:created_at, :updated_at])
    }

    render json: response_data, status: :ok
    # render json: @flights, status: :ok
  end

  def show
  end

  # GET /flights/new
  def new
    @flight = Flight.new
  end

  # GET /flights/1/edit
  def edit
  end

  # POST /flights or /flights.json
  def create
    @flight = Flight.new(flight_params)

    respond_to do |format|
      if @flight.save
        format.html { redirect_to flight_url(@flight), notice: "Flight was successfully created." }
        format.json { render :show, status: :created, location: @flight }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @flight.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /flights/1 or /flights/1.json
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

  # DELETE /flights/1 or /flights/1.json
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
    # Use callbacks to share common setup or constraints between actions.
    def set_flight
      @flight = Flight.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def flight_params
      params.require(:flight).permit(:name, :picture, :reserved, :user_id, :base_price, :available_slots)
    end
end
