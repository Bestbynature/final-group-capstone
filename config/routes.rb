Rails.application.routes.draw do
  apipie
  devise_for :users do
    delete '/users/sign_out' => 'devise/sessions#destroy'
  end

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
