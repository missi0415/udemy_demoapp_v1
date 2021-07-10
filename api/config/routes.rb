Rails.application.routes.draw do
  namespace :api do
    # 「controllers」以下のディレクトリ階層を表します。
    namespace :v1 do
      resources :users, only:[:index]
    end
  end
end
