require 'test_helper'

class SettingsEntitiesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get settings_entities_index_url
    assert_response :success
  end

end
