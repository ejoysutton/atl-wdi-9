Rails.application.routes.draw do
  devise_for :users
  get 'welcome' => 'static_pages#welcome'

  get 'support' => 'static_pages#support'

  get 'configure' => 'static_pages#configure'

  get 'home' => 'static_pages#home'

  root "static_pages#home"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
