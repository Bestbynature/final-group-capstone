class ReservedFlightsController < ApplicationController
  before_action :set_reserved_flight, only: %i[ show edit update destroy ]

  # GET /reserved_flights or /reserved_flights.json
  def index
    @reserved_flights = ReservedFlight.all
  end

  # GET /reserved_flights/1 or /reserved_flights/1.json
  def show
  end

  # GET /reserved_flights/new
  def new
    @reserved_flight = ReservedFlight.new
  end

  # GET /reserved_flights/1/edit
  def edit
  end

  # POST /reserved_flights or /reserved_flights.json
  def create
    @reserved_flight = ReservedFlight.new(reserved_flight_params)

    respond_to do |format|
      if @reserved_flight.save
        format.html { redirect_to reserved_flight_url(@reserved_flight), notice: "Reserved flight was successfully created." }
        format.json { render :show, status: :created, location: @reserved_flight }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @reserved_flight.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /reserved_flights/1 or /reserved_flights/1.json
  def update
    respond_to do |format|
      if @reserved_flight.update(reserved_flight_params)
        format.html { redirect_to reserved_flight_url(@reserved_flight), notice: "Reserved flight was successfully updated." }
        format.json { render :show, status: :ok, location: @reserved_flight }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @reserved_flight.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /reserved_flights/1 or /reserved_flights/1.json
  def destroy
    @reserved_flight.destroy

    respond_to do |format|
      format.html { redirect_to reserved_flights_url, notice: "Reserved flight was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_reserved_flight
      @reserved_flight = ReservedFlight.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def reserved_flight_params
      params.require(:reserved_flight).permit(:user_id, :package_id, :flight_id)
    end
end
