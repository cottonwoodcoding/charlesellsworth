Rails.application.routes.draw do
  root 'users#landing'
  devise_for :users, controllers: {
    sessions: 'api/sessions'
  }

  namespace :api do
    get '/users/info', to: 'users#info'
    get '/bio', to: 'bios#index'
    put '/bio', to: 'bios#update'
    get '/press_release', to: 'press_release#show'
    put '/press_release', to: 'press_release#update'
    resources :sessions
    resources :events, except: [:new, :edit]
    resources :videos, only: [:index, :destroy, :create]
    resources :releases, only: [:index, :create, :destroy]
    resources :albums, only: [:index, :create, :destroy]
    resources :subscribers, only: [:index, :create]
  end

   get '*unmatched_route', to: 'users#landing'
end
