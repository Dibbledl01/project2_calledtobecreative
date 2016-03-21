require 'test_helper'

class PagesControllerTest < ActionController::TestCase
  test "should get home" do
    get :home
    assert_response :success
  end

  test "should get attend" do
    get :attend
    assert_response :success
  end

  test "should get host" do
    get :host
    assert_response :success
  end

  test "should get be_inspired" do
    get :be_inspired
    assert_response :success
  end

end
