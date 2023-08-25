Rails.application.routes.draw do
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'
  devise_for :users
  
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
    end
  end
  
  match '*path', to: 'root#index', via: :all
end
