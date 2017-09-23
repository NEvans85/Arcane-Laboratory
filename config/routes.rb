Rails.application.routes.draw do
  root to: 'static_pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :decks, only: [:index, :show, :create, :update, :destroy] do
      resources :comments, only: [:create, :index]
    end
    resources :cards, only: [:show, :index, :create, :destroy]
  end
end
