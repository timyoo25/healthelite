Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  resources :categories, only: :index
  resources :users, only: :create
  resources :products, except: :create do 
    resources :reviews
  end
  post '/categories/:category_id/products', to: 'products#create'
  get '/categories/:category_id/products', to: 'products#get_by_category'
  # put '/categories/:category_id/products/:id', to: 'products#add_category'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
