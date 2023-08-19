Rails.application.routes.draw do
  devise_for :users
  # resources :packages
  # resources :flights
  # resources :users
  # resources :reserved_flights
  # resources :packages
  # resources :flights
  # resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  authenticated :user do
    root 'root#index', as: :authenticated_root
  end

  unauthenticated do
    root 'users#splash', as: :unauthenticated_root
  end

  # Defines the root path route ("/")
  root "root#index"
  namespace :api do
    namespace :v1 do
      resources :flights
      resources :users
      resources :packages
      resources :reserved_flights
    end
  end
  
  match '*path', to: 'root#index', via: :all
end
