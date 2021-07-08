Rails.application.routes.draw do
  namespace :api do
    # 「controllers」以下のディレクトリ階層を表します。
    namespace :v1 do
      #api test action
      resources :hello, only:[:index]
      # ルートはhttp://localhost:3000/api/v1/hello
    end
  end
end
