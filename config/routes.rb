Rails.application.routes.draw do
  # get 'pages/home'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  root to: "pages#home"

  get "about", to: "pages#about", as: :about
  get "resume", to: "pages#resume", as: :resume
  get "portfolio", to: "pages#portfolio", as: :portfolio
  get "blog", to: "pages#blog", as: :blog
  get "contact", to: "pages#contact", as: :contact

  # Defines the root path route ("/")
  # root "articles#index"
end
