Rails.application.routes.draw do
  root 'users#new'

  get    'login'   => 'sessions#new'
  post   'login'   => 'sessions#create'
  delete 'logout'  => 'sessions#destroy'

  resources :links, only: [:index, :create]

  resources :users, only: [:new, :create, :show]

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :links, only: [:update]
    end
  end
end
