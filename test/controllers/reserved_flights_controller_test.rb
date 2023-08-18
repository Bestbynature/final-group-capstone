require "test_helper"

class ReservedFlightsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @reserved_flight = reserved_flights(:one)
  end

  test "should get index" do
    get reserved_flights_url
    assert_response :success
  end

  test "should get new" do
    get new_reserved_flight_url
    assert_response :success
  end

  test "should create reserved_flight" do
    assert_difference("ReservedFlight.count") do
      post reserved_flights_url, params: { reserved_flight: { flight_id: @reserved_flight.flight_id, package_id: @reserved_flight.package_id, user_id: @reserved_flight.user_id } }
    end

    assert_redirected_to reserved_flight_url(ReservedFlight.last)
  end

  test "should show reserved_flight" do
    get reserved_flight_url(@reserved_flight)
    assert_response :success
  end

  test "should get edit" do
    get edit_reserved_flight_url(@reserved_flight)
    assert_response :success
  end

  test "should update reserved_flight" do
    patch reserved_flight_url(@reserved_flight), params: { reserved_flight: { flight_id: @reserved_flight.flight_id, package_id: @reserved_flight.package_id, user_id: @reserved_flight.user_id } }
    assert_redirected_to reserved_flight_url(@reserved_flight)
  end

  test "should destroy reserved_flight" do
    assert_difference("ReservedFlight.count", -1) do
      delete reserved_flight_url(@reserved_flight)
    end

    assert_redirected_to reserved_flights_url
  end
end
