require "application_system_test_case"

class ReservedFlightsTest < ApplicationSystemTestCase
  setup do
    @reserved_flight = reserved_flights(:one)
  end

  test "visiting the index" do
    visit reserved_flights_url
    assert_selector "h1", text: "Reserved flights"
  end

  test "should create reserved flight" do
    visit reserved_flights_url
    click_on "New reserved flight"

    fill_in "Flight", with: @reserved_flight.flight_id
    fill_in "Package", with: @reserved_flight.package_id
    fill_in "User", with: @reserved_flight.user_id
    click_on "Create Reserved flight"

    assert_text "Reserved flight was successfully created"
    click_on "Back"
  end

  test "should update Reserved flight" do
    visit reserved_flight_url(@reserved_flight)
    click_on "Edit this reserved flight", match: :first

    fill_in "Flight", with: @reserved_flight.flight_id
    fill_in "Package", with: @reserved_flight.package_id
    fill_in "User", with: @reserved_flight.user_id
    click_on "Update Reserved flight"

    assert_text "Reserved flight was successfully updated"
    click_on "Back"
  end

  test "should destroy Reserved flight" do
    visit reserved_flight_url(@reserved_flight)
    click_on "Destroy this reserved flight", match: :first

    assert_text "Reserved flight was successfully destroyed"
  end
end
