Rails.application.routes.draw do
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'
  
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
      resources :flights, only: [:index, :show, :create, :destroy]
      resources :users
      resources :packages
      resources :reserved_flights
    end
  end
  
  match '*path', to: 'root#index', via: :all
end
