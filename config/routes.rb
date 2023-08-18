Rails.application.routes.draw do
  resources :reserved_flights
  resources :packages
  resources :flights
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "root#index"
  namespace :api do
    namespace :v1 do
      resources :users
      resources :flights
      resources :packages
      resources :reserved_flights
    end
  end
end
