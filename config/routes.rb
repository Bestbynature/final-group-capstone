Rails.application.routes.draw do
  # resources :packages
  # resources :flights
  # resources :users
  # resources :reserved_flights
  # resources :packages
  # resources :flights
  # resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "root#index"
  match '*path', to: 'root#index', via: :all
  
  namespace :api do
    namespace :v1 do
      resources :flights
      resources :users
      resources :packages
      resources :reserved_flights
    end
  end
end
