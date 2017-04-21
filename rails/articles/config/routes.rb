Rails.application.routes.draw do
  get 'comments/index'

  get 'articles/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  #GET /articles then hit ArticlesController index
  get 'articles' => 'articles#index'

  #GET /comments hit Comments controller
  get 'comments' => 'comments#index'

end
