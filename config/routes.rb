Rails.application.routes.draw do
  root 'users#new'

  get    'login'   => 'sessions#new'
  post   'login'   => 'sessions#create'
  delete 'logout'  => 'sessions#destroy'

  resources :links, only: [:index]

  resources :users, only: [:new, :create, :show]
end
