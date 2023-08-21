require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module FinalGroupCapstone
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0

    # Configure CORS to allow requests from your React frontend's development server
    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins 'http://localhost:3000'  # Replace with the actual URL of your React frontend
        resource '*', headers: :any, methods: [:get, :post, :put, :patch, :delete, :options, :head], credentials: true
      end
    end
    config.middleware.use ActionDispatch::Cookies
config.middleware.use ActionDispatch::Session::CookieStore
config.middleware.use ActionDispatch::Flash
config.middleware.use Rack::MethodOverride
  end
end
