Rails.application.routes.draw do
  root to: 'static_pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :user, only: [:create] do
      resources :decks, only: [:index]
    end
    resource :session, only: [:create, :destroy, :show]
    resources :decks, except: [:new, :edit] do
      resources :comments, only: [:create, :index]
    end
    resources :cards, only: [:show, :index]
  end
end
